import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
const MoreServiceCard = ({services}) => {
    console.log(services);
    const navigator = useNavigate()


  return (
    <div className="container py-5">
   
        <div>

          <h4>{services.title} </h4>
          <div className="row">
            {services.links.map((link) => (
              <div onClick={()=>navigator(`${link.id}`)} className="col-md-12 d-flex justify-content-between align-items-center py-4 " style={{borderBottom:'1px solid #ddd',cursor:'pointer'}}>
                <div className="title text-primary">
                  <h5>{link.title}</h5>
                </div>
                <div className="icon">
                  <AiOutlineArrowRight  className="text-primary" style={{fontSize:'25px'}}/>
                </div>
              </div>
            ))}
          </div>
        </div>
    
    </div>
  );
};

export default MoreServiceCard;
