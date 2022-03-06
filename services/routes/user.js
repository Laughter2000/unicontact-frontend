import { RouteObject } from "@/services/routeObject";

const user = {
  signin: new RouteObject("post", "jwt/create/"),

  signup: new RouteObject("post", "users/"),

  user_details: new RouteObject("get", "users/me/"),

  // update_profile: new RouteObject("patch", "users/me/"),
  
  change_password: new RouteObject("post", "users/set_password/"),

  forgot_password: new RouteObject("post", "users/reset_password/"),

  reset_password: new RouteObject("post", "users/reset_password_confirm/"),

  active_account: new RouteObject("post", "users/activation/"),



 //Profile Data
 profile_details: new RouteObject("get", "accounts/profile/"),
 
 create_data : new RouteObject("post", "accounts/profile/"),

 update_data : new RouteObject("patch", "accounts/profile/"),

 all_profile: new RouteObject("get", "accounts/all-profile/"),



 


}

export default user;