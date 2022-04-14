import React from "react";
import NavBar from "../../components/Common/NavBar/NavBar.jsx";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import fakeData from "../../data/FakeData.js";
import { BiRightArrowAlt } from "react-icons/bi";

const PrixDes = () => {
  
  const {
    priceDescription,
    bannerImg,
    title,
    description,
    updateAt,
    readingTime,
    images,
    subCategory,
    additionalInfo,
  } = fakeData;

 
const info1 = additionalInfo[0];
const info2 = additionalInfo[1];
const info3 = additionalInfo[2];
const info4 = additionalInfo[3];
  console.log(info1);
  return (
    <div>
      <NavBar />
      <div>
        <div className="prixDes">
          <img src={bannerImg} alt="" />
        </div>
        <div className="text_image container">
          <div>
            <span>
              <Link className="me-2 prix_text-blue" to="/">
                Accueil
              </Link>
              /
            </span>

            <span>
              <Link className="mx-2 prix_text-blue" to="/">
                Fenêtre et porte
              </Link>
              /
            </span>
            <span className="ms-2">Prix des portes blindées</span>
          </div>
          <h3 className="my-3">{title}</h3>
          <p className="date">{updateAt}</p>
          <div className="mt-5 description_prix row ">
            <div className="col-md-6 col-lg-6">
              <p>{description}</p>
            </div>
            <div></div>
          </div>
        </div>
        <div className="prix_input-body py-4 mt-5">
          <div className="container text-white">
            <p>Trouvez un artisan près de chez vous !</p>
            <p className="m-0">
              Code postal <span className="text-danger">*</span>
            </p>
            <input className="prix_input" type="number" name="" id="" />
            <button className="prix_btn" type="submit">
              Trouver des artisans
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col col-md-6 col-lg-6">
            <h5>Résumé :</h5>
            <p>
              Installation d'une porte blindée classique ou d'un bloc porte,
              nombre de points de la serrure, esthétisme de la porte d'entrée
              blindée déterminent le coût de la menuiserie et de son
              installation (de 600 à plus de 5000 €). Et dans le cadre d'une
              rénovation, le blindage de la porte est une alternative parfois
              moins onéreuse.
            </p>
            <p>
              La <span className="prix_text-bold">porte blindée</span> est dotée
              d'un certain nombre de systèmes de sécurité de façon à retarder,
              voire{" "}
              <span className="prix_text-bold">
                éliminer les risques d'effraction.{" "}
              </span>
              Renforcée, la porte d'entrée devient une
              <span className="prix_text-bold"> porte de sécurité.</span>
            </p>
            <h6 className="prix_text-bold">
              Temps de lecture : {readingTime} Minutes
            </h6>
            <div>
              <a href="#one" rel="noopener noreferrer">
                <p className="m-0">
                  1.<span className="prix_text-blue ms-3">{info1.title}</span>
                </p>
              </a>
              <a href="#two" rel="noopener noreferrer">
                <p className="m-0">
                  2.<span className="prix_text-blue ms-3">{info2.title}</span>
                </p>
              </a>
              <a href="#three">
                <p className="m-0">
                  3.<span className="prix_text-blue ms-3">{info3.title}</span>
                </p>
              </a>
              <a href="#four">
                <p className="m-0">
                  4.<span className="prix_text-blue ms-3">{info4.title}</span>
                </p>
              </a>
            </div>
          </div>
          <div></div>
        </div>
        <div className="mt-4">
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th></th>
                <th>Prix minimum</th>
                <th>Prix moyen</th>
                <th>Prix maximum</th>
              </tr>
            </thead>
            <tbody>
              {priceDescription?.map((pb, index) => (
                <tr key={index}>
                  <td>{pb?.type}</td>
                  <td>{pb?.minPrice} €</td>
                  <td>{pb?.averagePrice} €</td>
                  <td>{pb?.maxPrice} €</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p className="mt-2">
            These prices are expressed in Euros, all taxes included (TTC). They
            are taken from price averages of various construction websites.
          </p>
        </div>
        <div className="row mt-5" id="one">
          <div className="col col-md-6 col-lg-6">
            <div>
              <h4>{info1.title}</h4>
              <p>{info1.options}</p>
            </div>

            <Link to="/">
              <button className="prix_btn text-white" type="submit">
                Demandez un devis gratuit pour une porte blindée{" "}
                <BiRightArrowAlt />
              </button>
            </Link>
            <div id="two">
              <div>
                <h4>{info2.title}</h4>
                <p>{info2.options}</p>
              </div>
            </div>

            <Link to="/">
              <button className="prix_btn text-white" type="submit">
                Demandez un devis gratuit pour une porte blindée{" "}
                <BiRightArrowAlt />
              </button>
            </Link>
            <div className="mt-4">
              {images.map((pd, index) => (
                <span key={index}>
                  <img className="map_img" src={pd} alt="" />
                  <p>{subCategory}</p>
                </span>
              ))}
            </div>
            <div id="three">
              <div>
                <h4>{info3.title}</h4>
                <p>{info3.options}</p>
              </div>
            </div>
            <Link to="/">
              <button className="prix_btn text-white" type="submit">
                Demandez un devis gratuit pour une porte blindée{" "}
                <BiRightArrowAlt />
              </button>
            </Link>
            <div className="mt-5" id="four">
              <div>
                <h4>{info4.title}</h4>
                <p>{info4.options}</p>
              </div>
            </div>
            <Link to="/">
              <button className="prix_btn text-white" type="submit">
                Demandez un devis gratuit pour une porte blindée{" "}
                <BiRightArrowAlt />
              </button>
            </Link>
            <div className="mt-5">
              <h3>
                Les prix des porte d'entrée / blindage porte chantiers récemment
                complétés
              </h3>
              <p>
                Afin de vous aider à vous projeter avec votre projet, nous vous
                avons compilé des chantiers récemment réalisés et les prix
                correspondant.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="prix_input-body  py-4">
        <div className="container text-white">
          <p className="m-0">
            Code postal <span className="text-danger">*</span>
          </p>
          <input className="prix_input" type="number" name="" id="" />
          <button className="prix_btn" type="submit">
            Trouver des artisans
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrixDes;
