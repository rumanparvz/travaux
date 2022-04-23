import React, { useState } from "react";
import Footer from "../Common/Footer/Footer.jsx";
import NavBar from "../Common/NavBar/NavBar.jsx";
import { FiMessageCircle, FiArchive } from "react-icons/fi";
import InterestedArchives from "./InterestedArchives.jsx";
import InterestedMessages from "./InterestedMessages.jsx";
const Interested = () => {
  const [fileChange, setFileChange] = useState("messages");

  return (
    <div>
      <NavBar />
      <div className="container my-5">
        <h1>Intéressé</h1>
        <span
          className="me-5 select_css"
          onClick={() => setFileChange("messages")}
        >
          <span>
            <FiMessageCircle />
          </span>
          <bold className="ms-1">Messages</bold>
        </span>
        <span className=" select_css" onClick={() => setFileChange("archives")}>
          <span>
            <FiArchive />
          </span>
          <bold className="ms-1">Archives</bold>
        </span>
        {fileChange === "messages" && <InterestedMessages />}
        {fileChange === "archives" && <InterestedArchives />}
      </div>
      <Footer />
    </div>
  );
};

export default Interested;