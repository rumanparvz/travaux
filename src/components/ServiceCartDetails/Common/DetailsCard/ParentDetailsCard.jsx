import React, { useState } from "react";
import { Link } from "react-router-dom";
import DetailsCard from "./DetailsCard";
const ParentDetailsCard = ({ data }) => {
  console.log(data);

  // { data, title }
  const [masonaryLangth, setMasonaryLangth] = useState(4);

  return (
    <>
      {data.map(({ title, allCards }) => (
        <div>
          <div
            className="mosonry py-3"
            style={{ boxShadow: "rgb(0 0 0 / 15%) 0px 0.0625rem 0.375rem" }}
          >
            <div className="container ">
              <div className="title d-flex justify-content-between align-items-center">
                <h1 className="w-50">{title} </h1>
                <Link to={`${`/post-service-request/${title}`}`}>
                  <button className="main_button">
                    Publiez votre projet gratuitement
                  </button>
                </Link>
              </div>
              <div className="row mt-4">
                {allCards.slice(0, masonaryLangth).map((mesonry) => (
                  <DetailsCard key={mesonry.id} mesonry={mesonry} />
                ))}
              </div>
              <div className="text-center mb-4">
                {allCards.length > 4 && (
                  <button
                    className="secondary_button"
                    onClick={() => setMasonaryLangth(data.length)}
                  >
                    En voir plus
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ParentDetailsCard;
