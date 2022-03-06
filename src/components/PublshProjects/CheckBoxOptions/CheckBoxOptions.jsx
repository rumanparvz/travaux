import React from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { serviceData } from "../../../data/ServiceData";
import NavBar from "../../Common/NavBar/NavBar";

const CheckBoxOptions = () => {
  const { checkBokOption } = useParams();
  const postData = serviceData.filter((sd) => sd.path === checkBokOption);
  const singlePostData = postData[0].steps.filter(  (post) => post.type === "checkBoxOptions" );

  console.log(serviceData);
  return (
    <div className="checkBoxOption">
      <NavBar />
      <div className="container">
        <h6 className="pt-2">Étape 2 sur 10</h6>
        <h5 className="pt-4">{singlePostData[0].title}</h5>
        <div className="check_Box row ">
          {singlePostData[0].options.map(({ svg, name }) => (
            <div className="col-md-4 pt-3 mb-5">
              <Card className="pt-4 ">
                <input
                  type="radio"
                  name="checkBok"
                  id=""
                  style={{ position: "absolute", left: "92%", top: "7%" }}
                />
                <label htmlFor="">
                  <div className="text-center">
                    <Card.Img
                      variant="top"
                      src={svg}
                      style={{ width: "50px" }}
                      className="text-center"
                    />
                  </div>
                  <Card.Body>
                    <p className="text-center">{name}</p>
                  </Card.Body>
                </label>
              </Card>
            </div>
          ))}
          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link to={`/post-service-request/${checkBokOption}`}>
                {" "}
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link
                // to={`/post-service-request/${checkBokOption}/${singlePostData[0].routeNumber+1}`}
                to={`/post-service-requests/${checkBokOption}/${singlePostData[0].routeNumber +1}`}
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

export default CheckBoxOptions;
