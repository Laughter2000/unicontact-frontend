import { RouteObject } from "@/services/routeObject";

const institution = {

  faculties: new RouteObject("get", "institution/faculties/"),

  enquiry: new RouteObject("get", "enquiry/"),


}

export default institution;