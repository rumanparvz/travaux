import React from "react";
import { Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BiMessageAltCheck } from "react-icons/bi";
const Reviews = ({ findData }) => {
  console.log("reviews", findData.reviews.allReviews);
  return (
    <div className="container" >
      <h4>Certains de nos plombier</h4>
      <div className="row">
        {findData.reviews.allReviews.map(({ img, name, content, rating }) => (
          <div className="col-md-6 ">
            <Card className="p-3 mb-3">
              <div className="card_header d-flex  align-items-center p-2 gap-1">
                <div className="image">
                  <img
                    src={img}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "100%",
                    }}
                  />
                </div>
                <div className="content">
                  <h6 className="text-primary ">{name}</h6>
                  <p>
                    <AiFillStar style={{ color: "green" }} /> {rating}/5
                  </p>
                  <br />
                </div>
              </div>
              <p>{content}</p>
              <p>
                <BiMessageAltCheck /> Avis le plus recent:
                <h6>Installation wc - 22mars 2022</h6>
              </p>
              <Card.Body style={{borderTop:'1px solid #ddd'}}>
               <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dolorum!</p>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
