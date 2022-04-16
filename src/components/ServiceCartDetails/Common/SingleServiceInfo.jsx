import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import fakeData from "../../../data/FakeData.js";
import { BiRightArrowAlt } from "react-icons/bi";
import NavBar from "../../Common/NavBar/NavBar";
import axios from "axios";
import moment from "moment";

const SingleServiceInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const handleGetData = async () => {
    const res = await axios.get(`https://ancient-gorge-88070.herokuapp.com/api/product/${id}`)
    console.log({ res })
    setProduct(res?.data?.data)
  }

  useEffect(() => {
    handleGetData();
  }, [id])

  const {
    priceDescription,
    bannerImg,
    title,
    description,
    updateAt,
    readingTime,
    images,
    subCategory,
    resume,
    additionalInfo,
    resumeDescription,
  } = fakeData;


  const info1 = additionalInfo[0];
  const info2 = additionalInfo[1];
  const info3 = additionalInfo[2];
  const info4 = additionalInfo[3];
  const info5 = additionalInfo[4];

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
                {product?.category}
              </Link>
              /
            </span>
            <span className="ms-2">{product?.subCategoryName}</span>
          </div>
          <h3 className="my-3">{product?.title}</h3>
          <p className="date">{product?.updatedAt && moment(product?.updatedAt).format('DD/MM/YYYY')}</p>
          <div className="mt-5 description_prix row ">
            <div className="col-md-6 col-lg-6">
              <p>{product?.description}</p>
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
            <h5>{resume} :</h5>
            <p>{resumeDescription}</p>

            <h6 className="prix_text-bold">
              Temps de lecture : {product?.additionalInfo?.length} Minutes
            </h6>
            <div>
              {
                product?.additionalInfo?.map((info, index) =>
                  <a href={`#${index}`} rel="noopener noreferrer">
                    <p className="m-0">
                      {index + 1}.<span className="prix_text-blue ms-3 text-primary">{info?.title}</span>
                    </p>
                  </a>
                )
              }
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
              {product?.tableData?.map((pb, index) => (
                <tr key={index}>
                  <td>{pb?.type}</td>
                  <td>{pb?.minPrice} €</td>
                  <td>{Math.round((parseInt(pb?.minPrice) + parseInt(pb?.maxPrice)) / 2)} €</td>
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
            {
              product?.additionalInfo?.map((info, index) => <div id={index}>
                <h4>{info?.title}</h4>
                <p>{info?.description}</p>
                {
                  info?.image && <div className="mt-4">
                    <img className="map_img" src={info?.image} alt="" />
                  </div>
                }
                <Link to="/">
                  <button className="prix_btn text-white mt-3 mb-3" type="submit">
                    Demandez un devis gratuit pour une porte blindée{" "}
                    <BiRightArrowAlt />
                  </button>
                </Link>
              </div>)
            }
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

export default SingleServiceInfo;
