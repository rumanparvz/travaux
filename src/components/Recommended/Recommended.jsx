import React from "react";
import NavBar from "../Common/NavBar/NavBar.jsx";
import { AiOutlineCheck } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { Button, Card, Col, Row } from "react-bootstrap";
const Recommended = () => {

  
  const sendHandle = (event) => {
    
    
    console.log(event);
    if (event) {
      document.getElementById("btnText").style.display = "block";
      document.getElementById("sendBtn").style.display = "none";
    }
   
 }
  return (
    <div>
      <NavBar />
      <div className="container">
        <div>
          <h2 className="my-5">
            Trouvez les meilleurs artisans près de chez vous
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
            <div className="col">
              <div className="recommended-top-card ">
                <p className="m-0">
                  Envoyez une demande à 10 artisans recommandés pour obtenir
                  plus de réponses
                </p>
              </div>
              <div className="d-flex justify-content-evenly mt-4">
                <div className="recommended_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="32"
                    aria-hidden="true"
                    width="32"
                  >
                    <path d="M325.8 272.2C308.5 292.4 283.1 304 256 304s-52.5-11.6-69.8-31.8c-8.6-10.1-23.8-11.2-33.8-2.7-10.1 8.6-11.2 23.8-2.7 33.8 26.5 31 65.2 48.7 106.3 48.7s79.8-17.8 106.2-48.7c8.6-10.1 7.4-25.2-2.7-33.8-10-8.6-25.1-7.4-33.7 2.7zM192 224c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path>
                  </svg>
                  <bold>Envoyez des demandes</bold>
                </div>
                <div className="recommended_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="32"
                    aria-hidden="true"
                    width="32"
                  >
                    <path d="M494.59 164.52c-1.52-1.26-13.86-11.2-30.59-24.66V96c0-26.51-21.49-48-48-48h-66.13C327.24 28.85 293.77 0 256 0c-37.65 0-70.9 28.63-93.85 48H96c-26.51 0-48 21.49-48 48v43.85c-16.81 13.52-29.15 23.46-30.48 24.56A48.002 48.002 0 0 0 0 201.48V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.51c0-14.31-6.38-27.88-17.41-36.99zM96 96h320v156.66c-36.26 29.32-78.69 63.67-86.59 69.95C311.25 337.12 279.6 368 256 368c-23.69 0-55.86-31.37-73.41-45.39-7.9-6.28-50.33-40.64-86.59-69.97V96zm368 362c0 3.31-2.69 6-6 6H54c-3.31 0-6-2.69-6-6V275.56c38.96 31.48 95.95 77.65 104.66 84.58C174.71 377.76 212.55 416 256 416c43.21 0 80.64-37.72 103.34-55.86 9-7.15 65.84-53.19 104.66-84.56V458zM176 192h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm176 64v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16z"></path>
                  </svg>

                  <bold>Obtenez des réponses</bold>
                </div>
                <div className="recommended_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    height="32"
                    aria-hidden="true"
                    width="40"
                  >
                    <path d="M512 224a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm64 144a5.33 5.33 0 0 1-5.33 5.33h-37.34v37.34A5.33 5.33 0 0 1 528 416h-32a5.33 5.33 0 0 1-5.33-5.33v-37.34h-37.34A5.33 5.33 0 0 1 448 368v-32a5.33 5.33 0 0 1 5.33-5.33h37.34v-37.34A5.33 5.33 0 0 1 496 288h32a5.33 5.33 0 0 1 5.33 5.33v37.34h37.34A5.33 5.33 0 0 1 576 336zM320 256a112 112 0 1 0-112-112 111.94 111.94 0 0 0 112 112zm0-176a64 64 0 1 1-64 64 64.06 64.06 0 0 1 64-64zM96 224a80 80 0 1 0-80-80 80 80 0 0 0 80 80zm0-112a32 32 0 1 1-32 32 32.09 32.09 0 0 1 32-32zm278.26 320H176v-44.8a67.38 67.38 0 0 1 65.4-67.2 203.8 203.8 0 0 0 78.6 16 198.4 198.4 0 0 0 33.94-3.14 157.56 157.56 0 0 1 16-52.84c-1.76.45-3.56.65-5.3 1.18a152.46 152.46 0 0 1-89.4 0c-47.1-14.3-100.3.8-127.8 41.7a114.59 114.59 0 0 0-19.6 64.3V432a48 48 0 0 0 48 48H417a160.27 160.27 0 0 1-42.74-48zM154.8 270.3A83.7 83.7 0 0 0 108 256H84a84.12 84.12 0 0 0-84 84 24 24 0 0 0 48 0 36.11 36.11 0 0 1 36-36h24a35.48 35.48 0 0 1 12.3 2.5 148.37 148.37 0 0 1 34.5-36.2z"></path>
                  </svg>

                  <bold>Faites votre sélection</bold>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
        <div>
          <h5 className="mt-5 mb-4">Artisans recommandés</h5>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Col key={index}>
                <Card>
                  <div className="d-flex justify-content-left pt-3 ps-3">
                    <Card.Img
                      className="card_img"
                      variant="top"
                      src="https://img.a.transfermarkt.technology/portrait/big/200512-1559901727.jpg?lm=1"
                    />
                    <div className="ms-2 mt-2">
                      <h6>LUX LOCK SECURITY</h6>
                      <p>4.6 5 37 (reviews)</p>
                    </div>
                  </div>
                  <Card.Body>
                    <div>
                      <span>Active</span> <strong>1 km from Paris 01</strong>
                    </div>
                    <div>
                      <span>Responded to</span>
                      <strong>184 similar construction projects</strong>
                    </div>
                    <Button
                      id="sendBtn"
                      onClick={() => sendHandle(index+1)}
                      className="recommended_card-btn py-2 mt-3"
                      type="submit"
                    >
                      Envoyer une demande
                    </Button>

                    <div id="btnText" className="text-center mt-3">
                      <h6 className="text-success">
                        <AiOutlineCheck /> Demande envoyée
                      </h6>
                      <p className="m-0">
                        <span className="text-warning">
                          <RiErrorWarningLine />
                        </span>
                        Choisissez 9 artisans
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-center align-items-center my-5">
            <button className="show_more-btn">Show more artisans</button>
          </div>
          <div>
            <h4>Have you sent all your requests?</h4>
            <p>Yes, show me the next steps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
