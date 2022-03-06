import { RouteObject } from "@/services/routeObject";

const institution = {

  faculties: new RouteObject("get", "institution/faculties/"),


  department: (id) => {
    return new RouteObject("get", `institution/faculties/${id}/`);
  },


}

export default institution;