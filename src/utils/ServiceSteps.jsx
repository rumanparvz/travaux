import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ServiceadditionalInfo = (params, type) => {
  const postdata = useSelector(state => state.service.postData)
  console.log("params", params);


  //data
  const [index, setIndex] = useState(0);
  const [postIndex, setPostIndex] = useState(3);
  const [stepName, setstepName] = useState(null);
  console.log(stepName);
  const [preStepName, setpreStepName] = useState(null);
  // const postData = serviceData?.filter((sd) => sd.path === params);
  const postData = postdata?.filter((sd) => sd?.categoryDescription === params);

  // const singlePostData = postData[0]?.additionalInfo?.filter((post) => post.type === type);
  const singlePostData = postData[0]?.additionalInfo?.filter((post) => post?.type === type);
  const length = postData[0]?.additionalInfo?.length + 1;

  console.log("length", length, postData[0]?.additionalInfo);



  const array1 = postData[0]?.additionalInfo;
  let indexCount;
  const processStep = index + 2

  for (const value of postData[0]?.additionalInfo) {
    if (value?.type === type) {
      indexCount = array1?.indexOf(value);
    }
  }

  // for (const value of iterator) {
  //   console.log(value);
  //   if (value?.type === type) {
  //     indexCount = array1?.indexOf(value);
  //   }
  // }


  useEffect(() => {
    // next additionalInfo
    setIndex(indexCount);
    setPostIndex(indexCount);
    const nextArray = postData[0]?.additionalInfo[index + 1];
    console.log(nextArray);
    setstepName(nextArray?.type);
    //   // Previous step
    const preArray = postData[0]?.additionalInfo[postIndex - 1];
    setpreStepName(preArray?.type);

  }, [index]);

  // FETCH DATA 



  return {
    stepName,
    singlePostData,
    length,
    preStepName,
    processStep,
    postData
  };
};

export default ServiceadditionalInfo; 
