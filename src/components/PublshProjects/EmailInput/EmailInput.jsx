import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import AllServicePostData from "../../../hooks/AllServicePostData";
import ProcessBar from "../../../utils/ProcessBar";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";

const EmailInput = () => {
  const { email } = useParams();
  const {stepName,singlePostData,length,preStepName,processStep}=ServiceSteps(email,'email')
  const [emailText,setEmailText]=useState(null)
  const dispatch =useDispatch()

  const handleSubmit = ()=>{

    // dispatch(serviceEmail({email:emailText}))
   AllServicePostData({emails:emailText})

  }
  
  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">Étape {processStep} sur {length}</h6>
        <ProcessBar processStep={processStep} length={length} />
        <h2 className="py-3">{singlePostData[0].title}</h2>

        <div className="row">
          <p className="text-secondary">
            Vos coordonnées seront visibles uniquement par les artisans que vous
            aurez choisis.
          </p>
          <p>
            E-mail <span className="text-danger">*</span>
          </p>
          <input type="email" name="email" id="email" required  className="form-control w-50 ms-2" 
          onChange={(e)=>setEmailText(e.target.value)}/>
          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link
                //   to={`/post-service-request/${path}`}
                to={`/post-service-request/${preStepName}/${email}`}
              >
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link
                to={`/post-service-request/${stepName}/${email}`}
              >
                {" "}
                <button className="main_button" onClick={handleSubmit}> Suivant</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailInput;
