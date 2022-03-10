import { actionTypes } from "../types/ActionsTypes";

const initialState = {
  postCode: {},
  projectType: {},
  multipleOptionalCheckbox: [],
  moreMultipleOptionalCheckbox: [],
  serviceOptionsBox: {},
  serviceTitleBox: {},
  image: {},
  comment: {},
  email: {},
};

const serviceProjectsReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POSTAL_CODE:
      return { ...state, postCode: action.payLoad };

    case actionTypes.ADD_SERVICE_TYPE_CHECKBOX:
      return { ...state, projectType: action.payLoad };

    case actionTypes.ADD_SERVICE_MULTIPLE_CHECKBOX:
      return { ...state, multipleOptionalCheckbox: action.payLoad };

    case actionTypes.ADD_MORE_SERVICE_MULTIPLE_CHECKBOX:
      return { ...state, moreMultipleOptionalCheckbox: action.payLoad };

    case actionTypes.ADD_SERVICE_OPTIONS_BOX:
      return { ...state, serviceOptionsBox: action.payLoad };

    case actionTypes.ADD_SERVICE_TITLE_CHECKBOX:
      return { ...state, serviceTitleBox: action.payLoad };

    case actionTypes.ADD_SERVICE_IMAGE:
      return { ...state, image: action.payLoad };

    case actionTypes.ADD_SERVICE_COMMENT:
      return { ...state, comment: action.payLoad };
      
    case actionTypes.ADD_SERVICE_EMAIL:
      return { ...state, email: action.payLoad };

    default:
      return state;
  }
};

export default serviceProjectsReducers;
