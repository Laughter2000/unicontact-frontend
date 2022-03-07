import Axios from "axios";
import Cookies from "js-cookie";

let urls = {
  development: "https://unicontacts.herokuapp.com/api/v1/",
  production: "https://unicontacts.herokuapp.com/api/v1/"
}

var baseURL = urls[process.env.NODE_ENV]

if (typeof window !== 'undefined') {
	var value = Cookies.get('access_token') ? 'JWT ' + Cookies.get('access_token') : null
}

export const api = Axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: value,
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});


api.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		const originalRequest = error.config;

		if (typeof error.response === 'undefined') {
			console.log(
				'A server/network error occurred. ' +
					'Looks like CORS might be the problem. ' +
					'Sorry about this - we will get it fixed shortly.'
			);
			return Promise.reject(error);
		}

		if (
			error.response.status === 401 &&
			originalRequest.url === 'jwt/refresh/'
		) {
			Cookies.remove("access_token");
          	Cookies.remove("refresh_token");
			window.location.href = '/signin/';
			return Promise.reject(error);
		}

		if (
			error.response.data.code === 'token_not_valid' &&
			error.response.status === 401 &&
			error.response.statusText === 'Unauthorized'
		) {
			const refreshToken = Cookies.get('refresh_token');

			if (refreshToken) {
				const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

				// exp date in token is expressed in seconds, while now() returns milliseconds:
				const now = Math.ceil(Date.now() / 1000);
				console.log(tokenParts.exp);

				if (tokenParts.exp > now) {
					return api
						.post('jwt/refresh/', {
							refresh: refreshToken,
						})
						.then((response) => {
							Cookies.set("access_token", response.data.access);
          					Cookies.set("refresh_token", response.data.refresh)

							api.defaults.headers['Authorization'] =
								'JWT ' + response.data.access;
							originalRequest.headers['Authorization'] =
								'JWT ' + response.data.access;

							return api(originalRequest);
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					console.log('Refresh token is expired', tokenParts.exp, now);
					window.location.href = '/signin/';
				}
			} else {
				console.log('Refresh token not available.');
				window.location.href = '/signin/';
			}
		}

		// specific error handling done elsewhere
		return Promise.reject(error);
	}
);
