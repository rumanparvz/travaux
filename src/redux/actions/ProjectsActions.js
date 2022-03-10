import { actionTypes } from "../types/ActionsTypes";

 const ProjectPostalCode = (project) => {
  return {
    type: actionTypes.ADD_POSTAL_CODE,
    payLoad: project,
  };
};

const serviceTypeCheckBox = (serviceCheckBox)=>{
  return {
    type: actionTypes.ADD_SERVICE_TYPE_CHECKBOX,
    payLoad: serviceCheckBox,
  };

}

const serviceMultiPleProjectCheckBox = (serviceCheckBox)=>{
  return {
    type: actionTypes.ADD_SERVICE_MULTIPLE_CHECKBOX,
    payLoad: serviceCheckBox,
  };

}

const  moreServicesMultiPleCheckBox = (multiPleCheckBox)=>{
  return {
    type: actionTypes.ADD_MORE_SERVICE_MULTIPLE_CHECKBOX,
    payLoad: multiPleCheckBox,
  };
}

const serviceOptionsBox = (serviceOptionBox)=>{
  return{
    type:actionTypes.ADD_SERVICE_OPTIONS_BOX,
    payLoad:serviceOptionBox
  }
}

const serviceTitleOptionBox = (serviceOptionBox)=>{
  return{
    type:actionTypes.ADD_SERVICE_TITLE_CHECKBOX,
    payLoad:serviceOptionBox
  }
}

const serviceImageUpload = (serviceImage)=>{
  return{
    type:actionTypes.ADD_SERVICE_IMAGE,
    payLoad:serviceImage
  }
}

const serviceComment = (serviceImage)=>{
  return{
    type:actionTypes.ADD_SERVICE_COMMENT,
    payLoad:serviceImage
  }
}

const serviceEmail = (serviceImage)=>{
  return{
    type:actionTypes.ADD_SERVICE_EMAIL,
    payLoad:serviceImage
  }
}



export { ProjectPostalCode, serviceTypeCheckBox, serviceMultiPleProjectCheckBox, moreServicesMultiPleCheckBox, serviceOptionsBox, serviceTitleOptionBox, serviceImageUpload, serviceComment, serviceEmail };
