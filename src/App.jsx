import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostData } from "./redux/actions/ProjectsActions";
import Routers from "./Routers/Routers";
const App = () => {
  const dispatch = useDispatch()
  const postData = useSelector(state=> state.service)
  console.log(postData);

const fetchServiceData=async ()=>{
  const response = await  axios.get('https://ancient-gorge-88070.herokuapp.com/api/subCategory')
   dispatch(addPostData(response.data.data))

 }
 useEffect(()=>{
  fetchServiceData()
 },[])
  return (
    <>
      <Routers />
    </>
  );
};

export default App;
