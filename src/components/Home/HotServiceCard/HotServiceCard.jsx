import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from "react-router-dom";
import serviceDetails from "../../../data/ServiceDetails";
const HotServiceCard = () => {
  const arroy3 = serviceDetails.slice(3,6)
 
  return (
    <div className="container py-5 ">
      <h1>Toujours très demandé</h1>
      <div className="service_card row">
        {arroy3.map(
          ({
            img,
            serviceTitle,
            icon,
            description,
            linkTitle,
            path,
            subDescription,
            id,
          }) => (
            <div className="col-md-4 py-3 " key={id}>
              <div className="card-item">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <img src={icon} alt="" style={{ width: "30px" }} />{" "}
                    {serviceTitle}
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    {description}
                  </Card.Text>
                  <p className="linkTab">
                    <Link to={`/${path}`} className="text-primary">
                      <AiOutlineArrowRight /> {linkTitle}
                    </Link>
                  </p>
                  <Link to="/prixDes">PrixDes</Link>
                  <Link to="/fromComment">FromComment</Link>
                </Card.Body>
              </div>
              <div className="card_footer d-flex justify-content-center align-items-center gap-3">
                <div className="images pt-3">
                  <div className="first-image" style={{ marginBottom: "-40%" }}>
                    <img src={subDescription.firstImage} alt="" />
                  </div>
                  <div className="second-image">
                    <img src={subDescription.secondImage} alt="" />
                  </div>
                </div>
                <div className="content">
                  <p className="text-secondary">Trouvez les bons artisans :</p>

                  <p>
                    <span style={{ fontWidth: "600" }}>
                      {subDescription.title}
                    </span>{" "}
                    en France
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
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HotServiceCard;
