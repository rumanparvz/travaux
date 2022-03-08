import { useEffect, useState } from "react";
import { serviceData } from "../data/ServiceData";

const ServiceSteps = (params, type) => {
  const [index, setIndex] = useState(null);
  const [stepNumbers, setStepNumbers] = useState(null);

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
    setIndex(indexCount);
    const nextArray = postData[0].steps[index + 1];
    setStepNumbers(nextArray.routeNumber);
  }, [index]);

  return {
    stepNumbers,
    singlePostData,
    length,
  };
};

export default ServiceSteps;
