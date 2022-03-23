import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const CategoryLinkDetails = (props) => {
  console.log(props.link);
  const { name, title, links } = props?.link;
  return (
    <div>
      <h4>{name}</h4>
      <p className="py-2">{title}</p>
      <div className="row">
        {links.map(({ title }) => (
          <div className="col-md-6 py-2 ">
            <BsFillArrowRightCircleFill style={{color:'#e5cb4e',fontSize:'20px'}} className="d-inline" />{" "}
            <p className="d-inline " style={{fontSize:'17px'}}>
              <Link to="/" className="text-primary">
                {title}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryLinkDetails;
