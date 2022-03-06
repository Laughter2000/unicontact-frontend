import { api } from "@/services/api";

export class RouteObject {
  constructor(method, route, isProtected = false, requiredRoles = "user") {
    this.method = method;
    this.route = route;
    this.isProtected = isProtected;
    this.requiredRoles = requiredRoles;
  }

  async request(payload) {

    if (this.method === "get") {
      if (payload) {
        return api[this.method](`${this.route}?${new URLSearchParams(payload)}`);
      }
      return api[this.method](this.route);
    } else if (this.method === "post") {
      return api[this.method](this.route, payload);
    } else if (this.method === "patch") {
      return api[this.method](this.route, payload);
    } else if (this.method === "delete") {
      return api[this.method](this.route, payload);
    }

    return Promise.reject("invalid method executed");
  }
}