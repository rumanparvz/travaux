import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addProjectsData, serviceComment } from "../../../redux/actions/ProjectsActions";
import ProcessBar from "../../../utils/ProcessBar";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";
const CommentText = () => {
  const { comment } = useParams();
  const {stepName,singlePostData,length,preStepName,processStep}=ServiceSteps(comment,'comment')
 const [commentText,setComment ]=useState(null)
const dispatch = useDispatch()
const projectsData = useSelector((state) => state.service.projectsData)

 const handleSubmit = ()=>{
  dispatch(serviceComment({comment:commentText}))
  dispatch(addProjectsData({...projectsData, about:commentText}));
  // AllPostData('hmm')

 }

  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">Étape {processStep} sur {length}</h6>
        <ProcessBar processStep={processStep} length={length} />
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
              onChange={(e)=>setComment(e.target.value)}
            ></textarea>
          </form>
          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link
                //   to={`/post-service-request/${path}`}
                to={`/post-service-request/${preStepName}/${comment}`}
              >
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link
                to={`/post-service-request/${stepName}/${comment}`}
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

export default CommentText;
