import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAsync from "../../../hooks/useAsync";
import { category } from "../../../services/ServiceCategory/ServiceCategory";
const CraftsmenJobs = () => {
  const {data}=useAsync(category.getAllCategory)

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
              {data?.map(
                ({
                  title,
                  _id,
                  icon,
               
                }) => (
                  <div
                    className="d-flex justify-content-center  col-md-4 gap-3 "
                    key={_id}
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
                      <h5 className="py-4">{title}</h5>
                      <div></div>
                      <p className="linkTab">
                        <Link to={`/`} className="text-primary">
                          <AiOutlineArrowRight /> linkTitle
                        </Link>
                      </p>
                      <p className="linkTab">
                        <Link
                          to=""
                          className="text-primary"
                        >
                          <AiOutlineArrowRight /> subDescription.linkTitle
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
