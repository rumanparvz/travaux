import React from "react";
import { Link, useParams } from "react-router-dom";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";

const RadioSErviceOption = () => {
  const { radioCheckBox } = useParams();
  const {stepNumbers,singlePostData,length,preStepNumbers}=ServiceSteps(radioCheckBox,'combinedCheckBok')

  // const postData = serviceData.filter((sd) => sd.path === radioCheckBox);
  // const singlePostData = postData[0].steps.filter(   (post) => post.type === "combinedCheckBok");

    // const routeNumber =postData[0].steps.slice(5,6)[0].routeNumber

  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">Étape {stepNumbers-1} sur {length}</h6>
        <h5 className="py-3">{singlePostData[0].title}</h5>

        <div className="row">
          {singlePostData[0].options.map(({ check, id }) => (
            <div className="col-md-12 " key={id}>
              <div className="check_box_item d-flex justify-content-between align-items-center">
                <label htmlFor="">
                  <p>{check}</p>
                </label>
                <input type="radio" name="radio" id="   " />
              </div>
            </div>
          ))}
          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link
                //   to={`/post-service-request/${path}`}
                to={`/post-service-request/${preStepNumbers}/${radioCheckBox}`}
              >
                {" "}
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link
                to={`/post-service-request/${stepNumbers}/${radioCheckBox}`}
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

export default RadioSErviceOption;
