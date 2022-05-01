import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogin } from '../redux/actions/ProjectsActions';

const PrivateRoute = ({ children, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.service.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookies.get("accessToken")) {
      dispatch(setIsLogin(true));
    }
  }, []);

  return (
    isLoggedIn ? children : <Navigate to="/login" />
  );
};

export default PrivateRoute;