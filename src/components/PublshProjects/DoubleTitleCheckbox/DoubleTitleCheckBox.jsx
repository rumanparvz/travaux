import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { serviceDoublTitleRadio } from "../../../redux/actions/ProjectsActions";
import ProcessBar from "../../../utils/ProcessBar";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";


const DoubleTitleCheckBox = () => {
  const { doubleTitleRadio } = useParams();
  const { stepName, singlePostData, length, preStepName,processStep } = ServiceSteps( doubleTitleRadio,"doubleTitleRadio" );
  const dispatch = useDispatch()
  

  const handleChange = (e) => {
    console.log(e.target.value);


    dispatch(serviceDoublTitleRadio({ doubleTItleRadioType: e.target.value }));
  };

  console.log("ssss", singlePostData);
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
          {singlePostData[0].options.map(({ name, id }) => (
            <div className="col-md-12 " key={id}>
              <label
                for={id}
                className="check_box_item d-flex justify-content-between align-items-center"
                style={{cursor:'pointer'}}
              >
                <label for="">
                  <p>{name}</p>
                </label>
                <input type="radio" value={name} onChange={handleChange} name="radio" id={id} />
              </label>
            </div>
          ))}
          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link
                //   to={`/post-service-request/${path}`}
                to={`/post-service-request/${preStepName}/${doubleTitleRadio}`}
              >
                {" "}
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link to={`/post-service-request/${stepName}/${doubleTitleRadio}`}>
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

export default DoubleTitleCheckBox;
