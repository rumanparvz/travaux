import { Breadcrumb, Button, Divider, Space } from "antd";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Common/Footer/Footer";
import NavBar from "../../components/Common/NavBar/NavBar";
import { BiMessageRounded, BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import axios from "axios";

const data = [
  { title: "ID du projet", description: "1458974" },
  {
    title: "Type de projet", description: "Installation ou rénovation couverture/toiture"
  },
  { title: "Type de toiture", description: 55 },
  { title: "Matériau de la toiture ", description: "Ardoise" },
  { title: "Urgence", description: "Pas urgent" }
];

const MyProjectDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://ancient-gorge-88070.herokuapp.com/api/project/${id}`)
      .then(res => {
        console.log(res.data);
      })
  }, [id]);
  return (
    <div>
      <NavBar />
      <div className="container">
        <Breadcrumb className="py-5">
          <Breadcrumb.Item>
            <Link to="/" className="text-primary">
              Accueil
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/my-project" className="text-primary">
              Mes projets{" "}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-secondary">
            Détails du projet
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
          <div className="row">
            <div className="col-md-10">
              <h1 style={{ fontWeight: 700 }}>
                Couverture/Toiture: Remplacement; <br /> 55; Pas urgent (date de
                fin)
              </h1>
            </div>
            <div className="col-md-2">
              <div className="bt">
                <Space>
                  <Link to="/my-project/3/edit">
                    <Button>Modifier</Button>
                  </Link>
                  <Button>Fermer</Button>
                </Space>
              </div>
            </div>
          </div>
          <Space className="py-4">
            <p>
              {" "}
              <BiMessageRounded /> 3 réponses
            </p>{" "}
            <p>
              {" "}
              <BiTimeFive /> 17 avril 2022
            </p>{" "}
            <p>
              {" "}
              <GoLocation /> L'Estaque
            </p>
          </Space>
        </div>
        <h3>Description</h3>
        <div className="description">
          <div className="row">
            {data.map(({ title, description }) => (
              <>
                <div className="col-md-6">
                  <p style={{ color: "gray" }}>{title} :</p>
                </div>
                <div className="col-md-6">
                  <p>{description}</p>
                </div>
              </>
            ))}
          </div>
        </div>
        <Divider />
        <p>Informations supplémentaires:</p>
        <p>test</p>
        <p style={{ background: "#F0F5FE" }} className="px-2 py-3 my-5">
          <Link to="#" className="text-primary">
            Envoyez une demande{" "}
          </Link>{" "}
          à 5 plus d'artisans pour recevoir plus de réponses.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default MyProjectDetails;
