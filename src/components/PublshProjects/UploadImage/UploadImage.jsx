import React from "react";
import { Link, useParams } from "react-router-dom";
import { serviceData } from "../../../data/ServiceData";
import NavBar from "../../Common/NavBar/NavBar";

const UploadImage = () => {
  const { uploadImage } = useParams();
  const postData = serviceData.filter((sd) => sd.path === uploadImage);
  const singlePostData = postData[0].steps.filter(  (post) => post.type === "uploadImage");

  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">Étape 7 sur 10</h6>
        <h5 className="py-3">{singlePostData[0].title}</h5>

        <div className="row">
          <p className="text-secondary">
            En ajoutant des photos, les artisans pourront mieux évaluer le
            travail à réaliser pour votre projet de chantier et vous faire un
            devis plus précis. (Maximum de 25 fichiers de 15 MB)
          </p>
          <form action="">
    
            <label htmlFor="" className="uploadImage">
            Sélectionnez vos fichiers, faites-les glisser et déposez-les ou
              prenez une photo.
              <input type="file" name="" id="" />
            </label>
        
          </form>
          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link
                //   to={`/post-service-request/${path}`}
                to={`/post-service-request/title/${uploadImage}/${  singlePostData[0].routeNumber - 1  }`}
          
              >
                {" "}
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link
                to={`/post-service-request/comment/${uploadImage}/${   singlePostData[0].routeNumber + 1    }`}
                // /post-service-request/comment/:comment/:id
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

export default UploadImage;
