import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ProcessBar from "../../../utils/ProcessBar";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";
const Complete = () => {
  const { complete ,email} = useParams();
  
  const {service} = useSelector((state) => state) 
// const {email}=useSelector()
  const {stepName,singlePostData,length,preStepName,processStep}=ServiceSteps(complete,'email')

  

console.log(service);

  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">Étape {processStep +1} sur {length} </h6>

        <ProcessBar processStep={10} length={10} />


        <div className="row">
          <p>
            E-mail <span className="text-danger">*</span>
          </p>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="form-control w-50 ms-2"
            value={"abdullahaloman1512@gmail.com"}
          />
          <p className="mt-3">
            Mot de passe <span className="text-danger ">*</span>
          </p>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="form-control w-50 ms-2"
          />
          <p className="text-primary py-5">
            Créer ou réinitialiser un mot de passe
          </p>

          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link
                //   to={`/post-service-request/${path}`}
                to={`/post-service-request/email/${complete}`}
              >
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link
                to='/'
              >
                {" "}
                <button className="main_button"> Suivant</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
