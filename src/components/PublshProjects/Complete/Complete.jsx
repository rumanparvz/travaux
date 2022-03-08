import React from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../Common/NavBar/NavBar";

const Complete = () => {
  const { complete } = useParams();
  // const {stepNumbers,singlePostData}=ServiceSteps(complete,'complete')

  // console.log(stepNumbers);
  // const postData = serviceData.filter((sd) => sd.path === complete);
  // const singlePostData = postData[0].steps.filter(  (post) => post.type === "complete" );

  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">Étape 10 sur 10 </h6>
        {/* <h2 className="py-3">{singlePostData[0].title}</h2> */}

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
                to={`/post-service-request/9/${complete}`}
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
