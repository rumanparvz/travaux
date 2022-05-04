import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Modifier = ({companyInfo, setTab, setIsHide, setCompanyInfo}) => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }
  const handleSubmit = async (siretNo) => {
    const {firstName, name, address, postalCode} = formData;
    const companyName = `${firstName || ''} ${name || ''}`;
    const updateCompany =await axios.patch(`https://ancient-gorge-88070.herokuapp.com/auth/updateSiret/${siretNo}`, {companyName, address, postalCode});
    if(updateCompany){
      navigate('/myAccount');
      setIsHide('details');
      setTab('CompanyDetails');
      setCompanyInfo({
        companyName,
        address,
        postalCode,
        siretNo: formData.siretNo
      });
    }
  }

  const handleCancel = () => {
    setTab('CompanyDetails');
    setIsHide('details')
  }

  useEffect(() => {
    if(companyInfo){
      setFormData({
        firstName: companyInfo?.companyName?.split(' ')[0],
        name: companyInfo?.companyName?.split(' ')[1],
        address: companyInfo?.address,
        postalCode: companyInfo?.postalCode,
        siretNo: companyInfo?.siretNo
      });
    }
  },[companyInfo]);
    return (
      <div>
        <div>
          <div>
            <h6>Nom</h6>
            <div className="mt-3">
              <label htmlFor="">
                Prénom<span className="text-danger">*</span>
              </label>
              <br />
              <input
                className="modifier_input w-50 "
                value={formData?.firstName}
                type="text"
                name="firstName"
                id=""
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="">
                Nom<span className="text-danger">*</span>
              </label>
              <br />
              <input
                className="modifier_input w-50"
                type="text"
                name="name"
                id=""
                value={formData?.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <h6 className="mt-4">Adresse</h6>
            <div className="mt-3">
              <label htmlFor="">
                Adresse<span className="text-danger">*</span>
              </label>
              <br />
              <input
                className="modifier_input w-50 "
                type="text"
                name="address"
                value={formData?.address}
                placeholder="PARIS 01"
                id=""
                onChange={handleChange}
              />
            </div>

            <div className="mt-3">
              <label htmlFor="">
                Code postal<span className="text-danger">*</span>
              </label>
              <br />
              <div className="modifier_input-postal w-50">
                <input
                  className=" modifier_input-code w-50 "
                  type="text"
                  name="postalCode"
                  value={formData?.postalCode}
                  placeholder="75001 Paris 01"
                  id=""
                  onChange={handleChange}
                />
                <span>{companyInfo?.address}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button className="modifier_btn me-3" onClick={handleCancel}>Annuler</button>
          <button className="modifier_btn" onClick={()=>handleSubmit(companyInfo?.siretNo)}>Enregistrer</button>
        </div>
      </div>
    );
};

export default Modifier;