import { actionTypes } from "../types/ActionsTypes";

const initialState = [];

const serviceProjectsReducers = (state = initialState, action) => {
  switch (action) {
    case actionTypes.ADD_SERVICE_PROJECTS:
      return {
        state,
      };

    default:
      return state;
  }
};

export default serviceProjectsReducers;
