import { Steps } from "antd";
import React from 'react';
const ServiceStep = ({number}) => {
  const { Step } = Steps;
    return (
    
      <Steps current={number}>
        <Step title="Start" description="" />
        <Step title="Finish" description="" />
      </Steps>
     
    );
};

export default ServiceStep;