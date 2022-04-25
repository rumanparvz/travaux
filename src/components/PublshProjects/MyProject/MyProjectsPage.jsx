import React from 'react';
import Footer from "../../Common/Footer/Footer.jsx";
import NavBar from "../../Common/NavBar/NavBar.jsx";
import { Card, Col, Container, Row } from "react-bootstrap";
const MyProjectsPage = () => {
    return (
      <div>
        <NavBar />
        <div>
          <Container>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                  <Card>
                    <div>
                      <h4>Petits travaux de maçonnerie: Rénovation; Salon</h4>
                      <button>options ...</button>
                    </div>
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
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