import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import ServiceDetails from "../../../data/ServiceDetails";
const CraftsmenJobs = () => {
  return (
    <div
      style={{ backgroundColor: "#f9f8f6" }}
      className="_carftsmen_bob py-5 "
    >
      <div className="container">
        <h1 className="py-5">Trouvez des artisans pour tous les travaux</h1>
        <div className="row">
          <div className="job_section">
            <div className="section_header row">
              {ServiceDetails.map(
                ({
                  serviceTitle,
                  id,
                  icon,
                  linkTitle,
                  path,
                  subDescription,
                }) => (
                  <div
                    className="d-flex justify-content-center  col-md-4 gap-3 "
                    key={id}
                  >
                    <div className="icon">
                      <img
                        src={icon}
                        alt=""
                        className="img-fluid mt-3 "
                        style={{ width: "30px" }}
                      />
                    </div>
                    <div className="header">
                      <h5 className="py-4">{serviceTitle}</h5>
                      <div></div>
                      <p className="linkTab">
                        <Link to={`/${path}`} className="text-primary">
                          <AiOutlineArrowRight /> {linkTitle}
                        </Link>
                      </p>
                      <p className="linkTab">
                        <Link
                          to={`/${path}/${subDescription.path}`}
                          className="text-primary"
                        >
                          <AiOutlineArrowRight /> {subDescription.linkTitle}
                        </Link>
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftsmenJobs;
