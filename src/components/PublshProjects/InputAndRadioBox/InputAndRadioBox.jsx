import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addProjectsData, serviceInputRadio } from "../../../redux/actions/ProjectsActions";
import ProcessBar from "../../../utils/ProcessBar";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";

const InputAndRadioBox = () => {
  const { radio } = useParams();
  const { stepName, singlePostData, length, preStepName, processStep } =
    ServiceSteps(radio, "radio");
  const dispatch = useDispatch();

  const [inputState, setInputState] = useState({});
  const projectsData = useSelector((state) => state.service.projectsData);
  const handleChange = (e, key) => {
    const newStage = { ...inputState, [e.target.name]: e.target.value };
    setInputState(newStage);
    dispatch(addProjectsData({...projectsData, additionalInfo:[...projectsData?.additionalInfo, {key, name: e.target.value}] }));
  };

  const handleSubmit = () => {
    dispatch(serviceInputRadio(inputState));
    
  };
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
          <p className="text-secondary">{singlePostData[0].title}</p>
          <input
            type="number"
            className="form-control w-50 my-3 py-3 ms-4"
            name="size"
            id=""
            placeholder="ex:2"
            onChange={(e)=>handleChange(e)}
          />
          <h5 className="ms-2">{singlePostData[0].title}</h5>
          {singlePostData[0].title && (
            <div>
              {singlePostData[0].options.map(({ name, _id, key }) => (
                <div className="col-md-12 " key={_id}>
                  <label
                    for={_id}
                    className="check_box_item d-flex justify-content-between align-items-center"
                    style={{ cursor: "pointer" }}
                  >
                    <label for={_id}>
                      <p>{name}</p>
                    </label>
                    <input
                      type="radio"
                      value={name}
                      name="place"
                      id={_id}
                      onChange={(e)=>handleChange(e, singlePostData[0]?.keyword)}
                    />
                  </label>
                </div>
              ))}
            </div>
          )}

          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link
                //   to={`/post-service-request/${path}`}
                to={`/post-service-request/${preStepName}/${radio}`}
              >
                {" "}
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link to={`/post-service-request/${stepName}/${radio}`}>
                {" "}
                <button className="main_button" onClick={handleSubmit}>
                  {" "}
                  Suivant
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputAndRadioBox;
