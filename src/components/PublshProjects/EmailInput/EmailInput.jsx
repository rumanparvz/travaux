import React from "react";
import { Link, useParams } from "react-router-dom";
import { serviceData } from "../../../data/ServiceData";
import NavBar from "../../Common/NavBar/NavBar";

const EmailInput = () => {
  const { email } = useParams();
  const postData = serviceData.filter((sd) => sd.path === email);
  const singlePostData = postData[0].steps.filter(  (post) => post.type === "email");
  
  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">Étape 9 sur 10</h6>
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
                to={`/post-service-request/comment/${email}/${
                  singlePostData[0].routeNumber - 1
                }`}
              >
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link
                to={`/post-service-request/complete/${email}/${
                  singlePostData[0].routeNumber + 1
                }`}
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
