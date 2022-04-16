import React from "react";
import { AiOutlineInfoCircle, AiOutlineSearch } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import Footer from "../Common/Footer/Footer";
import NavBar from "../Common/NavBar/NavBar";
import ModalPage from "./ModalPage";
const ServiceRequest = () => {


  const data = [
    {
      id: 1,
      img: "https://www.bugatti.com/fileadmin/_processed_/9/5/csm_HEADER_22de7ed3a8.jpg",
      title: "Projet de rénovation / construction: Maison individuelle ",
      address: "Boisemont, Boisemont (32 km)",
      response: 0,
      time: " il y a 3 hours",
    },
    {
      id: 2,
      img: "https://cdn.motor1.com/images/mgl/QjNn7/s3/lotus-emira-gt4-race-car-front-view.webp",
      title: "Projet de rénovation / construction: Maison individuelle ",
      address: "Boisemont, Boisemont (32 km)",
      response: 0,
      time: " il y a 3 hours",
    },
    {
      id: 3,
      img: "https://www.bugatti.com/fileadmin/_processed_/9/5/csm_HEADER_22de7ed3a8.jpg",
      title: "Projet de rénovation / construction: Maison individuelle ",
      address: "Boisemont, Boisemont (32 km)",
      response: 0,
      time: " il y a 3 hours",
    },
  ];

  return (
    <section
      className="mb-5"
      style={{
        background: "#f9f8f6",
        minHeight: "100vh",
        marginBottom: "100px",
      }}
    >
      <NavBar />
      <div className="container mb-5   w-75  m-auto">
        <div className="row">
          <div
            className="text d-flex  py-1 mt-5 gap-4  algin-items-center"
            style={{ backgroundColor: "#e4f4ff" }}
          >
            <p style={{ background: "#94d3ff " }} className=" py-2 px-2 mt-1">
              <AiOutlineInfoCircle />
            </p>
            <p className="pt-3">
              Finalisez votre inscription pour pouvoir répondre au particulier.
              Terminer maintenant
            </p>
          </div>
          <h1 className="py-3" style={{ fontSize: "40px" }}>
            Nouveaux projets
          </h1>
          <div className="input_filter d-flex justify-content-between align-items-center ">
            <div>
              <div className="input_item d-flex justify-content-between align-items-center ">
                <div>
                  <AiOutlineSearch />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Rechercher par mot-clé, ville, matériau..."
                  />
                </div>
                <div>
                  <button>Recherche</button>
                </div>
              </div>
            </div>
            <div className="filter">
                <ModalPage />
            
            </div>
          </div>
        </div>
        {data.map(({ img, title, address, response, time, id }) => (
          <div
            className="project_card  col-md-align-items-center gap-4 mt-3   "
            key={id}
          >
            <img
              className="img-fluid rounded project-img "
              // style={{ width: "100px ", height: "100px" }}
              src={img}
              alt=""
            />
            <div className="content">
              <h5>
                {title}
                <span style={{ fontSize: "16px" }}>
                  <BsDot /> {time}
                </span>
              </h5>
              <p className="pt-4">
                <GrLocation /> {address}
                <BiMessageRoundedDots /> {response}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default ServiceRequest;
