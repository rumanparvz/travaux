import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addProjectsData, serviceOptionsBox } from "../../../redux/actions/ProjectsActions";
import ProcessBar from "../../../utils/ProcessBar";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";

const RadioSErviceOption = () => {
  const { optionsBox } = useParams();
  const { stepName, singlePostData, length, preStepName, processStep } = ServiceSteps(optionsBox, "optionsBox");

  const dispatch = useDispatch();
  const projectsData = useSelector((state) => state.service.projectsData);

  const handleChange = (e, key) => {
    dispatch(serviceOptionsBox({ optionalTypeCheckBox: e.target.value }));
    dispatch(addProjectsData({ ...projectsData, additionalInfo: [...projectsData?.additionalInfo, { key, name: e.target.value }] }));
  };

  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">Étape {processStep} sur {length}</h6>
        <ProcessBar processStep={processStep} length={length} />

        <h5 className="py-3">{singlePostData[0].title}</h5>

        <div className="row">
          {singlePostData[0].options.map(({ name, _id }) => (
            <div className="col-md-12 " key={_id}>
              <label
                for={_id}
                className="check_box_item d-flex justify-content-between align-items-center"
                style={{ cursor: 'pointer' }}
              >
                <label for={_id}>
                  <p>{name}</p>
                </label>
                <input
                  type="radio"
                  value={name}
                  name="radio"
                  id={_id}
                  onChange={(e) => handleChange(e, singlePostData[0]?.keyword)}
                />
              </label>
            </div>
          ))}
          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link
                //   to={`/post-service-request/${path}`}
                to={`/post-service-request/${preStepName}/${optionsBox}`}
              >
                {" "}
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link to={`/post-service-request/${stepName}/${optionsBox}`}>
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

export default RadioSErviceOption;
