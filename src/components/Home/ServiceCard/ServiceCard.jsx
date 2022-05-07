import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from "react-router-dom";
import useAsync from "../../../hooks/useAsync";
import { category } from "../../../services/ServiceCategory/ServiceCategory";
const ServiceCard = () => {
// const first3 = serviceDetails.slice(0,3)

const {data}=useAsync(category.getAllCategory)
console.log(' datata',data?.slice(0,3));

  
  return (
    <div className="container my-5">
      <h1>Soyez prêt pour l'hiver</h1>
      <div className="service_card row">
        {/* {first3.map(({img,serviceTitle,icon,description,linkTitle,path,subDescription,id}) => ( */}
          {
            data?.slice(0,100)?.map(({image,_id,icon,description,title})=> <>
                <div className="col-md-4 py-3 " key={_id}>
            <div className='card-item'>
              <Card.Img variant="top" src={image} className='img-fluid' style={{height:'200px',maxWidth:'100%'}} />
              <Card.Body>
                <Card.Title> <img src={icon} alt="" style={{width:'30px'}}/> {title}</Card.Title>
                <Card.Text className="text-secondary">{description}</Card.Text>
                <p className="linkTab" ><Link to={`/${_id}`} className="text-primary"><AiOutlineArrowRight /> Toutes les informations sur <span className="text-lowercase">{title} </span></Link></p>
              </Card.Body>
            </div>
            <div className="card_footer d-flex justify-content-center align-items-center gap-3">
              <div className="images pt-3">
                <div className="first-image" style={{marginBottom:'-40%'}}>
                  <img src="" alt="" />
                </div>
                <div className="second-image">
                  <img src="" alt="" />
                </div>
              </div>
              <div className="content">
                <p className="text-secondary">Trouvez les bons artisans :</p>
                <p><span style={{fontWidth:'600'}}>""</span> en France</p>
                <p className="linkTab" ><Link to={``}className="text-primary"><AiOutlineArrowRight /> </Link></p>
              </div>
            </div>
          </div>
            </>)
          }
        {/* ))} */}
      </div>
    </div>
  );
};

export default ServiceCard;
