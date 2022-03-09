import { actionTypes } from "../types/ActionsTypes";

const serviceProjects = (project) => {
  return {
    type: actionTypes.ADD_SERVICE_PROJECTS,
    payLoad: project,
  };
};

export default serviceProjects;
