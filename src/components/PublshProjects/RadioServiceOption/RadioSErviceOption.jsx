import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { serviceOptionsBox } from "../../../redux/actions/ProjectsActions";
import ProcessBar from "../../../utils/ProcessBar";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";

const RadioSErviceOption = () => {
  const { optionsBox } = useParams();
  const { stepName, singlePostData, length, preStepName,processStep } = ServiceSteps( optionsBox,"optionsBox");

  const dispatch = useDispatch()
  const handleChange = (e) => {
    console.log(e.target.value);
 
    dispatch(serviceOptionsBox({optionalTypeCheckBox:e.target.value}))
  };

  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">Étape {processStep} sur {length}</h6>
        <ProcessBar processStep={processStep} length={length} />

        <h5 className="py-3">{singlePostData[0].title}</h5>

        <div className="row">
          {singlePostData[0].options.map(({ check, id }) => (
            <div className="col-md-12 " key={id}>
              <label
                for={id}
                className="check_box_item d-flex justify-content-between align-items-center"
                style={{cursor:'pointer'}}
              >
                <label for={id}>
                  <p>{check}</p>
                </label>
                <input
                  type="radio"
                  value={check}
                  name="radio"
                  id={id}
                  onChange={handleChange}
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
