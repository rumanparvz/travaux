import axios from "axios";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addProjectsData, serviceImageUpload } from "../../../redux/actions/ProjectsActions";
import ProcessBar from "../../../utils/ProcessBar";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";

const UploadImage = () => {
  const { uploadImage } = useParams();
  const { stepName, singlePostData, length, preStepName, processStep } = ServiceSteps(uploadImage, "uploadImage");
  const dispatch = useDispatch()
  const [imageLoader, setImageLoader] = useState("");
  const [image, setImage] = useState("");
  const projectsData = useSelector((state) => state.service.projectsData);
  console.log("image", image);
  const handleImageUpload = (e) => {
    setImageLoader("pending");
    const imageFile = e.target.files[0];
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "service");
    data.append("cloud_name", "dzghsspe7");
    axios
      .post(`https://api.cloudinary.com/v1_1/dzghsspe7/image/upload`, data)
      .then((res) => {
        setImage(res.data.url);
        setImageLoader("success");
      });
  };

  const handleImage = () => {
    dispatch(serviceImageUpload({ image: image }))
    dispatch(addProjectsData({ ...projectsData, portfolio: image }));
  }
  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">
          Étape {processStep} sur {length}
        </h6>
        <ProcessBar processStep={processStep} length={length} />
        <h5 className="py-3">{singlePostData[0].title}</h5>

        <div className="row">
          <p className="text-secondary">
            En ajoutant des photos, les artisans pourront mieux évaluer le
            travail à réaliser pour votre projet de chantier et vous faire un
            devis plus précis. (Maximum de 25 fichiers de 15 MB)
          </p>
          <form action="">
            <label for="image" className="uploadImage">
              Sélectionnez vos fichiers, faites-les glisser et déposez-les ou
              prenez une photo.
              <input
                type="file"
                name=""
                id="image"
                onChange={(e) => handleImageUpload(e)}
                style={{ height: '1px', width: '1px' }}
              />
            </label>
          </form>

          {image && (
            <img
              className="img-fluid mt-3 "
              src={image}
              alt=""
              style={{ width: "150px", height: "150px" }}
            />
          )}
          {imageLoader === "pending" && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link
                //   to={`/post-service-request/${path}`}
                to={`/post-service-request/${preStepName}/${uploadImage}`}
              >
                {" "}
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link
                to={`/post-service-request/${stepName}/${uploadImage}`}
              // /post-service-request/comment/:comment/:id
              >
                {" "}
                <button className="main_button" onClick={handleImage}> Suivant</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
