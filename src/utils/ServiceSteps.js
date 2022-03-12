import { useEffect, useState } from "react";
import { serviceData } from "../data/ServiceData";

const ServiceSteps = (params, type) => {
  const [index, setIndex] = useState(0);
  const [postIndex, setPostIndex] = useState(3);
  const [stepName, setstepName] = useState(null);
  const [preStepName, setpreStepName] = useState(null);

  const postData = serviceData.filter((sd) => sd.path === params);
  const singlePostData = postData[0].steps.filter((post) => post.type === type);

  const length = postData[0].steps.length;
  //try
  const array1 = postData[0].steps;
  const iterator = array1.values();
  let indexCount;
  const processStep= index +1

  for (const value of iterator) {
    if (value.type === type) {
      indexCount = array1.indexOf(value);
    }
  }

  useEffect(() => {
    //next steps
    setIndex(indexCount);
    setPostIndex(indexCount);
    const nextArray = postData[0].steps[index + 1];
    setstepName(nextArray.type);
    // Previous step
    const preArray = postData[0]?.steps[postIndex - 1];
    setpreStepName(preArray.type);

  }, [index]);

  return {
    stepName,
    singlePostData,
    length,
    preStepName,
    processStep
  };
};

export default ServiceSteps;
