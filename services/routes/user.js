import { RouteObject } from "@/services/routeObject";

const user = {
  signin: new RouteObject("post", "jwt/create/"),

  signup: new RouteObject("post", "users/"),

  
  
  // logout: new RouteObject("post", "user/logout/"),

  user_details: new RouteObject("get", "users/me/"),

  update_profile: new RouteObject("patch", "users/me/"),
  
  change_password: new RouteObject("post", "users/set_password/"),

  forgot_password: new RouteObject("post", "users/reset_password/"),

  reset_password: new RouteObject("post", "users/reset_password_confirm/"),

  active_account: new RouteObject("post", "users/activation/")
}

export default user;