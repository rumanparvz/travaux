import { useEffect, useState } from "react";
import { serviceData } from "../data/ServiceData";

const ServiceSteps = (params, type) => {
  const [index, setIndex] = useState(0);
  const [postIndex, setPostIndex] = useState(3);

  const [stepNumbers, setStepNumbers] = useState(null);
  const [preStepNumbers, setPreStepNumbers] = useState(null);

  const postData = serviceData.filter((sd) => sd.path === params);
  const singlePostData = postData[0].steps.filter((post) => post.type === type);

  const length = postData[0].steps.length;
  //try
  const array1 = postData[0].steps;
  const iterator = array1.values();
  let indexCount;
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
    setStepNumbers(nextArray.type);
    // Previous step
    const preArray = postData[0]?.steps[postIndex - 1];
    setPreStepNumbers(preArray.type);

    console.log("nextarray", nextArray.type);
    console.log("preArray", preArray.stepNumber - 1);
  }, [index]);

  return {
    stepNumbers,
    singlePostData,
    length,
    preStepNumbers,
  };
};

export default ServiceSteps;
