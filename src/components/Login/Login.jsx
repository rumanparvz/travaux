import React from "react";
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
import NavBar from "../Common/NavBar/NavBar";
const Login = () => {
  return (
    <div className="login">
      <NavBar />
      <div className="container  m-auto login-item">
        <h1 style={{ fontSize: "50px" }} className="mb-5">
          Connexion
        </h1>
        <form action="">
          <p>
            E-mail <span className="text-danger">*</span>
          </p>
          <input
            type="email"
            className="form-control py-2 w-75 w-sm-100"
            name=""
            id=""
          />{" "}
          <br />
          <p>
            Mot de passe <span className="text-danger mt-4">*</span>
          </p>
          <label
            for="checkbox"
            className="login_pass w-100 d-flex  align-items-center"
          >
            <input
              type="password"
              className="form-control py-2 w-75 w-sm-100 "
              name=""
              id=""
            />

            <div className="show_pass d-flex align-items-center justify-content-center gap-2">
              <input type="checkbox" name="" id="" />
              <span>Afficher</span>
            </div>
          </label>
          <p className="pt-5 ">
            <Link className="text-primary" to="/forgetPassword">
              Mot de passe oublié ?
            </Link>
          </p>
          <input type="submit" value="Connexion" className="main_button" />
        </form>
        <p>Ou continuez simplement avec</p>
        <button className="socialButton">
          
            <span className="google_icon">
              <FcGoogle />
            </span>
            Google / Email
          
        </button>
        <p>Your personal data will not be shared with our site.</p>
      </div>
    </div>
  );
};

export default Login;
