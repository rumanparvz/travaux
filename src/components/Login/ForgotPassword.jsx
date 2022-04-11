import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Common/NavBar/NavBar.jsx";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError({});
    try {
      if (email) {
        const re = /\S+@\S+\.\S+/;
        const isValid = re.test(email);
        if (isValid) {
          const response = await axios.post("http://localhost:5000/auth/sendForgotPasswordEmail", { email });
          console.log(response);
          if (response.status === 200) {
            navigate("/resetPassword");
            setError({});
            setIsLoading(false);
          }
        } else {
          setError({ msg: "Email is not valid" });
          setIsLoading(false);
        }
      } else {
        setError({ msg: "Email is required" });
        setIsLoading(false);
      }
    } catch (err) {
      setError({ msg: "Something wrong......." });
      setIsLoading(false);
    }
  }
  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center mt-5">
        <div>
          {
            error.msg && <div className="alert alert-danger">{error.msg}</div>
          }
          <div>
            <h2>Demander un nouveau mot de passe</h2>
            <p className="m-0">
              Entrez votre adresse e-mail. Nous vous enverrons un lien pour
              créer un nouveau mot de passe.
            </p>
            <div className="my-5">
              <label htmlFor="">
                Adresse e-mail <span className="text-danger">*</span>
              </label>
              <br />
              <input className="forget_input" type="email" name="" id="" onChange={e => { setEmail(e.target.value); setError({}) }} />
            </div>
            <Link to="/resetPassword">
              <button className= {`btn btn-primary rounded-pill px-3 py-2 ${isLoading ? "w-25" : ""}`} onClick={handleResetPassword}>
                {isLoading ? <div className="spinner-border text-light" role="status"></div> : "Envoyer"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
