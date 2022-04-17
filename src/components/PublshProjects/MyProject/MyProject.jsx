import React from "react";
import {  Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../../Common/Footer/Footer.jsx";
import NavBar from "../../Common/NavBar/NavBar.jsx";

const MyProject = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <h1 className="my-4">Mes projets</h1>
        {Array.from({ length: 6 }).map((_, index) => (
          <Row className="mt-3" key={index}>
            <Card className="p-0">
              <Card.Body className="p-0">
                <div className="px-4">
                  <Row className="mt-3">
                    <Col>
                      <h4>Portail: Installation neuve</h4>
                    </Col>
                    <Col className="text-end">
                      <button className="myProject_btn">voir</button>
                      <button className="myProject_btn mx-3">modifier</button>
                      <button className="myProject_btn">fermer</button>
                    </Col>
                  </Row>
                  <p className="mt-4">Vous n'avez pas encore de réponse</p>
                </div>
                <div className="project_description px-4 py-3">
                  <p className="m-0">
                    <span className="text_blue me-1">Envoyer une demande</span>{" "}
                    à 10 artisans pour obtenir plus de réponses
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Row>
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default MyProject;
