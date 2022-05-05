import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer/Footer.jsx';
import NavBar from '../Common/NavBar/NavBar.jsx';
import Activities from './Activities.jsx';
import CompanyDetails from "./CompanyDetails.jsx";
import InterventionZone from './InterventionZone.jsx';
import MyBalance from './MyBalance.jsx';
import Notifications from './Notifications.jsx';
import PromoCode from './PromoCode.jsx';
import { FaIdCard } from 'react-icons/fa'
import { BiBriefcase } from "react-icons/bi";
import { FiTag } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiScales } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";
import Cookies from "js-cookie";
import axios from "axios";

const MyAccount = () => {
  const [tab, setTab] = useState("CompanyDetails");
  const [usersData, setUsersData] = useState({})
  const [companyInfo, setCompanyInfo] = useState({});

  const userId = Cookies.get('userId');

  const getUserInfo = async () => {
    const userInfo = await axios.get(`https://ancient-gorge-88070.herokuapp.com/auth/getUser/${userId}`);
    setUsersData(userInfo.data.data);
  }

  const getCompanyInfo = async (siretNo) => {
    const companyInfo = await axios.get(`https://ancient-gorge-88070.herokuapp.com/auth/getSiret/${siretNo}`);
    setCompanyInfo(companyInfo.data.data);
  }
  useEffect(() => {
    if (userId) {
      getUserInfo()
    }
  }, [])

  useEffect(() => {
    if (usersData.siretNo && tab === "CompanyDetails") {
      getCompanyInfo(usersData.siretNo)
    }
  }, [usersData, tab])
  console.log({ companyInfo, userId, usersData })
  return (
    <>
      <NavBar />
      <div className="container my-5">
        <div className="row ">
          <div className="col col-sm-12 col-md-3 col-lg-3 myAccount_left p-0">
            <p

              className="myAccount_btn"
              onClick={() => setTab("CompanyDetails")}
            >
              <FaIdCard /> Coordonnées de l'entreprise
            </p>
            <p className="myAccount_btn" onClick={() => setTab("Activities")}>
              <span>
                <BiBriefcase />
              </span>{" "}
              Activités
            </p>
            <p
              className="myAccount_btn"
              onClick={() => setTab("interventionZone")}
            >
              <span>
                <GoLocation />
              </span>{" "}
              Zone d'intervention
            </p>
            <p
              className="myAccount_btn"
              onClick={() => setTab("Notifications")}
            >
              <span>
                <IoMdNotificationsOutline />
              </span>{" "}
              Paramètres de notification
            </p>
            <p className="myAccount_btn" onClick={() => setTab("myBalance")}>
              <span>
                <GiScales />
              </span>{" "}
              Mon solde
            </p>
            <p
              className="myAccount_btn mb-2"
              onClick={() => setTab("promoCode")}
            >
              <span>
                <FiTag />
              </span>{" "}
              Utiliser un code promo
            </p>
            <Link to="/payments" className="text-black d-block myAccount_btn">
              <span>
                <CgFileDocument />
              </span>
              Paiements
            </Link>
          </div>
          <div className="col col-sm-12 col-md-9 col-lg-9">
            {tab === "CompanyDetails" && <CompanyDetails companyInfo={companyInfo} setTab={setTab} setCompanyInfo={setCompanyInfo} />}
            {tab === "Activities" && <Activities />}
            {tab === "interventionZone" && <InterventionZone />}
            {tab === "Notifications" && <Notifications />}
            {tab === "myBalance" && <MyBalance />}
            {tab === "promoCode" && <PromoCode />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyAccount;