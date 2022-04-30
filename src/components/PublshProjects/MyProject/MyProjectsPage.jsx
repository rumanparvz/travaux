import React from 'react';
import Footer from "../../Common/Footer/Footer.jsx";
import NavBar from "../../Common/NavBar/NavBar.jsx";
import { Card, Col, Container, Row } from "react-bootstrap";
import MyProjectData from "../../../data/MyProjectsPage.js"
const MyProjectsPage = () => {
    return (
      <div>
        <NavBar />
        <div>
          <Container>
            <h1 className="my-5">Mes projets</h1>
            <Row xs={1} md={1} sm={1} className="g-4 my-4">
              {MyProjectData.map((pd, idx) => (
                <Col key={idx}>
                  <Card>
                    <div className="d-flex justify-content-between px-3 pt-3">
                      <h4>{pd.title}</h4>
                      <div>
                        <button className="project_btn">voire</button>
                        <button className="project_btn mx-3">modifier</button>
                        <button className="project_btn">fermer</button>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Text>{pd.name}</Card.Text>
                    </Card.Body>
                    <div className="px-3 projects_footer">
                      <p className='m-0'>
                        <span className="envoyer_tex">Envoyer une demande</span>
                        <span>à 10 artisans pour obtenir plus de réponses</span>
                      </p>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
};

export default MyProjectsPage;