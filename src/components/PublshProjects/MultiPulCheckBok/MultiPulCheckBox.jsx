import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { serviceMultiPleProjectCheckBox } from "../../../redux/actions/ProjectsActions";
import ProcessBar from "../../../utils/ProcessBar";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";

const MultiPulCheckBox = () => {

  const { multipleCheckBox } = useParams();
  const {stepName,singlePostData,length,preStepName,processStep}=ServiceSteps(multipleCheckBox,'multipleCheckBox')
 const [optionalElement,setOptionalElement]=useState([])
 
 const dispatch = useDispatch()
  

  const handleSubmit = (e)=>{
    if(e.target.checked===true){
      const newOptionalElement= [...optionalElement,{name:e.target.value}]
      setOptionalElement(newOptionalElement)
    }
    if(e.target.checked===false){
     const  uncheckedElement = optionalElement.filter((el) => el.name !== e.target.value)
       setOptionalElement(uncheckedElement)
    }

  }


  const handleNextSubmit = ()=>{
    dispatch(serviceMultiPleProjectCheckBox(optionalElement))
  }
 
  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="pt-2">Étape {processStep} sur  {length}</h6>
        <ProcessBar processStep={processStep} length={length} />

        <h5>{singlePostData[0].title}</h5>
        <div className="row">
          {singlePostData[0].options.map(({ svg, name, id }) => (
            <div className="col-lg-2 col-lg-3 col-sm-4 mb-2 col-xs-6" key={id}>
              <Card className="pt-4 pb-3" style={{ height: "150px" }}>
                <label for={id}  style={{cursor:'pointer'}}>
                <input
                  type="checkbox"
                  name="checkBok"
                  id={id}
                  value={name}
                  style={{ position: "absolute", left: "92%", top: "7%" }}
                  onChange={handleSubmit}
                />
                
                  <div className="text-center">
                    <Card.Img
                      variant="top"
                      src={svg}
                      style={{ width: "40px" }}
                      className="text-center"
                    />
                  </div>
                  <Card.Body>
                    <p className="text-center pb-2">{name}</p>
                  </Card.Body>
                </label>
             
              </Card>
            </div>
          ))}
          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link
                //   to={`/post-service-request/${path}`}
                to={`/post-service-request/${preStepName}/${multipleCheckBox}`}
              >
                {" "}
                <button className="secondary_button" >Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link
                to={`/post-service-request/${stepName}/${multipleCheckBox}`}
              >
                {" "}
                <button className="main_button" onClick={handleNextSubmit}> Suivant</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiPulCheckBox;
