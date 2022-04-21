import React from 'react';
import Footer from '../Common/Footer/Footer.jsx';
import NavBar from '../Common/NavBar/NavBar.jsx';
import { FiMessageCircle, FiArchive } from "react-icons/fi";
const Interested = () => {
    return (
      <div>
        <NavBar />
        <div className="container my-5">
          <h1>Intéressé</h1>
         
            <span className="me-5">
              <FiMessageCircle /> <bold className="ms-1">Messages</bold>
            </span>
        
            <span>
              <FiArchive /> <bold className="ms-1">Archives</bold>
            </span>
        </div>
        <Footer />
      </div>
    );
};

export default Interested;