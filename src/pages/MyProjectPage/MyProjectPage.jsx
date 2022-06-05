import React from 'react';
import NavBar from '../../components/Common/NavBar/NavBar';
 import { Button, Card, Dropdown, Menu, Row, Space } from "antd";
import { Col } from 'react-bootstrap';
import { Link, Router, useNavigate } from 'react-router-dom';
import Footer from '../../components/Common/Footer/Footer';
const { Meta } = Card;


const data = [
  {
    title: "Couverture/Toiture: Remplacement; 55; Pas urgent (date de fin)",
    intéressésNumer: 3,
    intéressés: "Intéressés",
    intéressésContent: "En attente de votre sélection",
    sélectionnéNumber: 0,
    sélectionné: "Sélectionné",
    sélectionnéContent: "Coordonnées échangées",
    route:''
  },
  {
    title: "Couverture/Toiture: Remplacement; 55; Pas urgent (date de fin)",
    intéressésNumer: 0,
    intéressés: "Intéressés",
    intéressésContent: "En attente de votre sélection",
    sélectionnéNumber: 0,
    sélectionné: "Sélectionné",
    sélectionnéContent: "Coordonnées échangées",
    route:''
  }
];

const MyProjectPage = () => {

   

    return (
      <div>
        <NavBar />
        <div className="container">
          <h1 style={{ fontSize: "45px" }} className="py-4">
            Mes projets
          </h1>
          {data.map(
            ({
              title,
              intéressésNumer,
              intéressés,
              intéressésContent,
              sélectionnéNumber,
              sélectionné
            }) => (
              <div
                className="card_content  m-auto mb-5"
                style={{ width: "100%" }}
              >
                <Card className="shadow-sm rounded">
                  <div className="space-align-block">
                    <Space align="center" size="large">
                      <h4>{title}</h4>
                      <Menu mode="horizontal">
                        <Menu.SubMenu
                          style={{ border: "none" }}
                          key="SubMenu"
                          title={
                            <span>
                              <Button>Options :</Button>
                            </span>
                          }
                        >
                          <Menu.Item key="one">
                            <Link to={`/my-project/4`}>Voir mon projet</Link>{" "}
                          </Menu.Item>
                          <Menu.Item key="two">
                            <Link to={`/my-project/5/edit`}>
                              Modifier le projet
                            </Link>
                          </Menu.Item>
                          <Menu.Item key="three">Clôturer le projet</Menu.Item>
                        </Menu.SubMenu>
                      </Menu>
                    </Space>
                  </div>
                  <div className="card_content pt-4">
                    <Row gutter={[24, 16]}>
                      <Col md={6} xs={12}>
                        <div className="me-md-4">
                          <Card>
                            <Space align="center">
                              <h4
                                className="info"
                                style={{ fontWeight: 700, fontSize: "30px" }}
                              >
                                {intéressésNumer}
                              </h4>
                              <div>
                                <h5 className="info">{intéressés}</h5>
                                <p>{intéressés}</p>
                              </div>
                            </Space>
                          </Card>
                        </div>
                      </Col>
                      <Col md={6} xs={12}>
                        <div>
                          <Card>
                            <Space align="center">
                              <h4
                                className="info-"
                                style={{ fontWeight: 700, fontSize: "30px" }}
                              >
                                {intéressésNumer}
                              </h4>
                              <div>
                                <h5 className="info-">{intéressés}</h5>
                                <p>{intéressésContent}</p>
                              </div>
                            </Space>
                          </Card>
                        </div>
                      </Col>
                    </Row>
                    <button className="main_button">
                      3 professionnels ont répondu
                    </button>
                    <h5 className="pt-4">
                      <Link to="#">
                        Le projet a été réalisé{" "}
                        <span className="info ">? Laisser un avis</span>
                      </Link>
                    </h5>
                    <div
                      className="py-3  p-3 mt-4"
                      style={{ background: "#F0F5FE" }}
                    >
                      <h5>
                        {" "}
                        Envoyer une demande à 5 artisans pour obtenir plus de
                        réponses
                      </h5>
                    </div>
                  </div>
                </Card>
              </div>
            )
          )}
        </div>
        <Footer />
      </div>
    );
};

export default MyProjectPage;