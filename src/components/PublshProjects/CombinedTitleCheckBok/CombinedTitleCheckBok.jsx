import React from "react";
import { Link, useParams } from "react-router-dom";
import ServiceSteps from "../../../utils/ServiceSteps";
import NavBar from "../../Common/NavBar/NavBar";


const CombinedTitleCheckBok = () => {
  const { combinedTitleChickBox } = useParams();
  const {stepNumbers,singlePostData,length,preStepNumbers}=ServiceSteps(combinedTitleChickBox,'combinedTitleCheckBok')

  // const postData = serviceData.filter((sd) => sd.path === combinedTitleChickBox);
  // const singlePostData = postData[0].steps.filter(   (post) => post.type === "checkBoxOptions"  );
  
  // const routeNumber =postData[0].steps.slice(6,7)[0].routeNumber
console.log("ssss",preStepNumbers);
  return (
    <div>
      <NavBar />
      <div className="container pt-5 mb-5">
        <h6 className="py-3">Étape {stepNumbers-1}  {length}</h6>
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
                to={`/post-service-request/${preStepNumbers}/${combinedTitleChickBox}`}   >
        
              
                {" "}
                <button className="secondary_button">Précédent</button>{" "}
             
              </Link>
            </div>
            <div>
              <Link
                to={`/post-service-request/${stepNumbers}/${combinedTitleChickBox}`}   >
           
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
