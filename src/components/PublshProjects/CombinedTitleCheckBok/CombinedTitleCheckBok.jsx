import React from "react";
import { Link, useParams } from "react-router-dom";
import { serviceData } from "../../../data/ServiceData";
import NavBar from "../../Common/NavBar/NavBar";


const CombinedTitleCheckBok = () => {
  const { combinedTitleChickBox } = useParams();
  const postData = serviceData.filter((sd) => sd.path === combinedTitleChickBox);
  const singlePostData = postData[0].steps.filter(
    (post) => post.type === "checkBoxOptions"
  );
  
  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">Étape 6 sur 10</h6>
        <h5 className="py-3">{singlePostData[0].title}</h5>

        <div className="row">
          {singlePostData[0].options.map(({ name, id }) => (
            <div className="col-md-12 " key={id}>
              <div className="check_box_item d-flex justify-content-between align-items-center">
                <label htmlFor="">
                  <p>{name}</p>
                </label>
                <input type="radio" name="radio" id="   " />
              </div>
            </div>
          ))}
          <div className="checkBox_button d-flex justify-content-between align-items-center">
            <div>
              <Link
                //   to={`/post-service-request/${path}`}
                to={`/post-service-request/itemss/${combinedTitleChickBox}/${
                  singlePostData[0].routeNumber - 1
                }`}
              >
                {" "}
                <button className="secondary_button">Précédent</button>{" "}
             
              </Link>
            </div>
            <div>
              <Link
                to={`/post-service-request/titles/${combinedTitleChickBox}/${ singlePostData[0].routeNumber + 1}`}   >
           
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

export default CombinedTitleCheckBok;
