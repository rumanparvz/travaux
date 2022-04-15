import { actionTypes } from "../types/ActionsTypes";

const initialState = {
  postCode: {},
  projectType: {},
  multipleOptionalCheckbox: [],
  moreMultipleOptionalCheckbox: [],
  serviceOptionsBox: {},
  serviceTitleBox: {},
  inputRadio: {},
  image: {},
  comment: {},
  doubleRadioOptionBox: {},
  email: {},
<<<<<<< HEAD
  doubleTitleRadio:{},
  registrationData: {},
  postData:[],
  
=======
<<<<<<< HEAD
  doubleTitleRadio: {},
  registrationData: {},
  productsData: {}

=======
  doubleTitleRadio: {},
  registrationData: {},
>>>>>>> 492c94696e8c702868584476830746f7205378f2
>>>>>>> 7720d53d58aa354c67afcd9b9f80e138ce6eb780
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

    case actionTypes.ADD_INPUT_RADIO:
      return { ...state, inputRadio: action.payLoad };


<<<<<<< HEAD
          
        case actionTypes.ADD_DOUBLE_TITLE_RADIO:
          return { ...state, doubleTitleRadio: action.payLoad };
        case actionTypes.ADD_REGISTRATION_DATA:
          console.log(action.payLoad);
          return { ...state, registrationData: action.payLoad };
          // FETCH
          case actionTypes.ADD_POST_DATA:
            return { ...state, postData: action.payLoad };
            // FETCH
=======
    case actionTypes.ADD_DOUBLE_TITLE_RADIO:
      return { ...state, doubleTitleRadio: action.payLoad };
    case actionTypes.ADD_REGISTRATION_DATA:
      return { ...state, registrationData: action.payLoad };
    case actionTypes.ADD_PRODUCT_DATA:
      return { ...state, productsData: action.payLoad };
    case actionTypes.ADD_DOUBLE_CHECKBOX:
      return { ...state, doubleRadioOptionBox: action.payLoad };
>>>>>>> 7720d53d58aa354c67afcd9b9f80e138ce6eb780

    case actionTypes.ADD_DOUBLE_TITLE_RADIO:
      return { ...state, doubleTitleRadio: action.payLoad };
    case actionTypes.ADD_REGISTRATION_DATA:
      console.log(action.payLoad);
      return { ...state, registrationData: action.payLoad };

    default:
      return state;
  }
};

export default serviceProjectsReducers;
