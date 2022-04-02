import React from "react";
import { Accordion } from "react-bootstrap";

const Accordions = ({ findData }) => {
  console.log("accordation", findData.reviews.accordion);
  return (
    <div className="container mt-5">
      <Accordion defaultActiveKey="0">
 
          {findData.reviews.accordion.map((service,index) => (
            <>
                   <Accordion.Item eventKey={index +1}>
              <Accordion.Header style={{Color:'#3f27ba'}}><h5 >{service.name}</h5></Accordion.Header>
              <Accordion.Body><p>{service.description}</p></Accordion.Body>
              </Accordion.Item>
            </>
          ))}

      </Accordion>
    </div>
  );
};

export default Accordions;
