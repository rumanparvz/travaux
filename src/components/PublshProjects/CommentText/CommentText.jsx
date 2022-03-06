import React from "react";
import { Link, useParams } from "react-router-dom";
import { serviceData } from "../../../data/ServiceData";
import NavBar from "../../Common/NavBar/NavBar";
const CommentText = () => {
  const { comment } = useParams();
  const postData = serviceData.filter((sd) => sd.path === comment);
  const singlePostData = postData[0].steps.filter(
    (post) => post.type === "comment"
  );

  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">Étape 8 sur 10</h6>
        <h5 className="py-3">{singlePostData[0].title}</h5>
        <p className="text-secondary">
          Par exemple : type de bâtiment, étage d'installation, mesures,
          ouverture pour la fenêtre requise, fourniture de la fenêtre requise,
          etc.
        </p>

        <div className="row">
          <form action="">
            <textarea
              name=""
              id=""
              cols="10"
              rows="7"
              className="form-control w-50"
              placeholder="Merci de ne pas partager vos coordonnées ici"
            ></textarea>
          </form>
          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link
                //   to={`/post-service-request/${path}`}
                to={`/post-service-request/titles/${comment}/${
                  singlePostData[0].routeNumber - 1
                }`}
              >
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link
                to={`/post-service-request/email/${comment}/${
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

export default CommentText;
