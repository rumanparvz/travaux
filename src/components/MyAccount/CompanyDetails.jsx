import React, { useState } from 'react';
import Modifier from './Modifier.jsx';
import {MdOutlineEdit} from 'react-icons/md'
const CompanyDetails = ({companyInfo, setTab, setCompanyInfo}) => {
  const {companyName, address, postalCode} = companyInfo;
  const [isHide, setIsHide] = useState("details"); 
const [ setIsClose]= useState(true)
   const toggler = () => {
     setIsHide("modifier");
     setIsClose(false);
    }
  return (
    <div>
      <div>
        <h1 className='mb-4'>Coordonnées de l'entreprise</h1>
        <h4>Nom de votre entreprise ou SIRET</h4>
      </div>
      <hr className='my-4' />
      {isHide === "modifier" && <Modifier companyInfo={companyInfo} setIsHide={setIsHide} setTab={setTab} setCompanyInfo={setCompanyInfo} />}
      {isHide === "details" && (
        <div>
          <div className="d-flex justify-content-between">
            <div>
            <h6>Nom </h6><span>{companyName}</span>
            </div>
            <h6 className='modifier' onClick={toggler}><span><MdOutlineEdit/></span> Modifier</h6>
          </div>
          <div>
            <h6>Adresse</h6>
            <p>{address} </p>
            <p>{postalCode} {' '} {address}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;