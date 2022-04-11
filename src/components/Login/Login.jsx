import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import NavBar from "../Common/NavBar/NavBar";
const Login = () => {
  const [loginInfo, setLoginInfo] = useState({})
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleShowPass = () => {
    setShowPass(!showPass);
  }
  const handleChange = (e) => {
    const newLoginInfo = {};
    if (e.target.name === "email") {
      const re = /\S+@\S+\.\S+/;
      const isValid = re.test(e.target.value);
      if (isValid) {
        newLoginInfo.email = e.target.value;
        setError({});
      } else {
        setError({ email: "Email is not valid" });
      }
    } else {
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      const isValid = re.test(e.target.value);
      newLoginInfo.password = e.target.value;
      setError({});
      // if(isValid){
      //   newLoginInfo.password = e.target.value;
      //   setError({});
      // } else{
      //   // setError({password: "Password must contain at least 8 characters, one letter and one number"});
      // }
    }

    setLoginInfo({ ...loginInfo, ...newLoginInfo });

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (loginInfo.email && loginInfo.password) {
        console.log(loginInfo);
        setIsLoading(true);
        const response = await axios.post('https://ancient-gorge-88070.herokuapp.com/auth/signIn', loginInfo);
        if (response?.data) {
          Cookies.set('accessToken', response?.data?.data?.accessToken);
          Cookies.set('refreshToken', response?.data?.data?.refreshToken);
          setIsLoading(false);
          setError({});
          navigate('/');
          console.log(response?.data);
        }
      } else {
        setError({ msg: "Please fill all the fields" });
      }
    } catch (err) {
      console.log(err);
      setError({ msg: "Invalid email or password" });
      setIsLoading(false);
    }
  }
  return (
    <div className="login">
      <NavBar />
      <div className="container  m-auto login-item">
        <h1 style={{ fontSize: "50px" }} className="mb-5">
          Connexion
        </h1>
        {
          error.msg && <div className="alert alert-danger">{error.msg}</div>
        }
        <form action="">
          <p>
            E-mail <span className="text-danger">*</span>
          </p>
          <input
            type="email"
            className="form-control py-2 w-75 w-sm-100"
            name="email"
            onChange={handleChange}
            id=""
          />{" "}
          <br />
          {
            error.email && <p className="text-danger">{error.email}</p>
          }
          <p>
            Mot de passe <span className="text-danger mt-4">*</span>
          </p>
          <label
            for="checkbox"
            className="login_pass w-100 d-flex  align-items-center"
          >
            <input
              type={showPass ? "text" : "password"}
              className="form-control py-2 w-75 w-sm-100 "
              onChange={handleChange}
              name="password"
              id=""
            />

            <div className="show_pass d-flex align-items-center justify-content-center gap-2">
              <input type="checkbox" onChange={handleShowPass} name="" id="" />
              <span>Afficher</span>
            </div>
          </label>
          {
            error.password && <p className="text-danger">{error.password}</p>
          }
          <p className="pt-5 ">
            <Link className="text-primary" to="/forgetPassword">
              Mot de passe oublié ?
            </Link>
          </p>
          <button type="submit" className={isLoading ? "main_button w-25" : "main_button"} onClick={handleSubmit}>
            {
              isLoading ? <div className="spinner-border text-light" role="status"></div> : "Connexion"
            }
          </button>
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
