import React from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";

const OptionalMulticheCheckBox = () => {
  const {optionalMultiCheckBok}=useParams()
  const {stepNumbers,singlePostData,length,preStepNumbers}=ServiceSteps(optionalMultiCheckBok,'optionalMultiCheckBok')


  // const {optionalMultiCheckBok,id}=useParams()
  // const postData = serviceData.filter((sd) => sd.path === optionalMultiCheckBok);
  // const singlePostData = postData[0].steps.filter(  (post) => post.type === "optionalMultiCheckBok" );

  // const routeNumber =postData[0].steps.slice(4,5)[0].routeNumber

  return (
    <div>
      <NavBar />
      <div className="container mb-5">
      <h6 className="pt-2 pt-4">Étape {stepNumbers-1} sur {length}</h6>
      <h5 className="py-3">{singlePostData[0].title}</h5>

        <div className="row">
          {singlePostData[0].options.map(({ svg, name, id }) => (
            <div className="col-lg-2 col-lg-3 col-sm-4 mb-2 col-xs-6" key={id}>
              <Card className="pt-4 pb-3" style={{height:'150px'}}>
                <input
                  type="checkbox"
                  name="checkBok"
                  id=""
                  style={{ position: "absolute", left: "92%", top: "7%" }}
                />
                <label htmlFor="">
                  <div className="text-center">
                    <Card.Img
                      variant="top"
                      src={svg}
                      style={{ width: "40px" }}
                      className="text-center"
                    />
                  </div>
                  <Card.Body>
                    <p className="text-center pb-2">{name}</p>
                  </Card.Body>
                </label>
              </Card>
            </div>
          ))}
          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link 
              
            //   to={`/post-service-request/${path}`}
            to={`/post-service-request/${preStepNumbers}/${optionalMultiCheckBok}`}
              // /post-service-requests/:multiCheckBox/:id
              >
                {" "}
                <button className="secondary_button">Précédent</button>{" "}
              </Link>
            </div>
            <div>
              <Link
                to={`/post-service-request/${stepNumbers}/${optionalMultiCheckBok}`}
              
              
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

export default OptionalMulticheCheckBox;
