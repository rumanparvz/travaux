import React from "react";
import { Link, useParams } from "react-router-dom";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";

const EmailInput = () => {
  const { email } = useParams();
  const {stepNumbers,singlePostData,length,preStepNumbers}=ServiceSteps(email,'email')

  // const postData = serviceData.filter((sd) => sd.path === email);
  // const singlePostData = postData[0].steps.filter(  (post) => post.type === "email");
  // const routeNumber =postData[0].steps.slice(9,10)[0].routeNumber

  console.log("preStepNumber",preStepNumbers);
  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">Étape {stepNumbers-1} sur {length}</h6>
        <h2 className="py-3">{singlePostData[0].title}</h2>

        <div className="row">
          <p className="text-secondary">
            Vos coordonnées seront visibles uniquement par les artisans que vous
            aurez choisis.
          </p>
          <p>
            E-mail <span className="text-danger">*</span>
          </p>
          <input type="email" name="email" id="email" required  className="form-control w-50 ms-2"/>
          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link
                //   to={`/post-service-request/${path}`}
                to={`/post-service-request/${preStepNumbers}/${email}`}
              >
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link
                to={`/post-service-request/${stepNumbers}/${email}`}
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

export default EmailInput;
