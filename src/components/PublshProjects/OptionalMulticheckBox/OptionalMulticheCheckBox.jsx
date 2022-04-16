import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addProjectsData, moreServicesMultiPleCheckBox } from "../../../redux/actions/ProjectsActions";
import ProcessBar from "../../../utils/ProcessBar";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";

const OptionalMulticheCheckBox = () => {
  const { moreMultipleCheckBox } = useParams();
  const { stepName, singlePostData, length, preStepName,processStep } = ServiceSteps(  moreMultipleCheckBox,  "moreMultipleCheckBox");

  const [optionalElement,setOptionalElement]=useState([])
  const projectsData = useSelector((state) => state.service.projectsData);
 
  console.log(optionalElement);
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
 
 
   const handleNextSubmit = (key)=>{
     dispatch(moreServicesMultiPleCheckBox(optionalElement))
     dispatch(addProjectsData({...projectsData, additionalInfo:[...projectsData?.additionalInfo, {key, name: optionalElement}] }));
   }



  return (
    <div>
      <NavBar />
      <div className="container mb-5">
        <h6 className="pt-2 pt-4">
          Étape {processStep} sur {length}
        </h6>
        <ProcessBar processStep={processStep} length={length} />

        <h5 className="py-3">{singlePostData[0].title}</h5>

        <div className="row">
          {singlePostData[0].options.map(({ svg, name, id, key }) => (
            <div className="col-lg-2 col-lg-3 col-sm-4 mb-2 col-xs-6" key={id}>
              <Card className="pt-4 pb-3" style={{ height: "150px" }}>
                <label for={id} style={{ cursor: "pointer" }}>
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
                to={`/post-service-request/${preStepName}/${moreMultipleCheckBox}`}
                // /post-service-requests/:multiCheckBox/:id
              >
                {" "}
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link
                to={`/post-service-request/${stepName}/${moreMultipleCheckBox}`}
              >
                {" "}
                <button className="main_button" onClick={()=>handleNextSubmit(singlePostData[0]?.keyword)}> Suivant</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionalMulticheCheckBox;
