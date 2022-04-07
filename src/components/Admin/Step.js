import { Steps } from "antd";
import React from 'react';
const Step = ({number}) => {
  const { Step } = Steps;
    return (
    
      <Steps current={number}>
        <Step title="Finished" description="This is a description." />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a description." />
      </Steps>
     
    );
};

export default Step;