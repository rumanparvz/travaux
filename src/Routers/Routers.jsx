import React from "react";
import { Route, Routes } from "react-router-dom";
import MultiPulCheckBox from "../components/PublshProjects/MultiPulCheckBok/MultiPulCheckBox";
import { serviceData } from "../data/ServiceData";
import HomePage from "../pages/Home/HomePage";
import CheckBoxOptionPage from "../pages/PublishServices/CheckBoxOptionPage";
import CombinedTitleCheckBokPage from "../pages/PublishServices/CombinedTitleCheckBokPage";
import CommentTextPage from "../pages/PublishServices/CommentTextPage";
import CompletePages from "../pages/PublishServices/CompletePages";
import EmailPage from "../pages/PublishServices/EmailPage";
import OptionalMultiCheckBox from "../pages/PublishServices/OptionalMultiCheckBox";
import RadioSErvicesOptions from "../pages/PublishServices/RadioSErvicesOptions";
import RootTextPostPage from "../pages/PublishServices/RootTextPostPage";
import UploadImagePage from "../pages/PublishServices/UploadImagePage";
const Routers = () => {
  console.log(serviceData);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/post-service-request/:postText" element={<RootTextPostPage  />}></Route>
        <Route path="/post-service-request/2/:checkBokOption" element={<CheckBoxOptionPage />}></Route>
        <Route path="/post-service-request/3/:multiCheckBox" element={<MultiPulCheckBox />}></Route>
        <Route path="/post-service-request/4/:optionalMultiCheckBok" element={<OptionalMultiCheckBox />}></Route>
        <Route path="/post-service-request/5/:radioCheckBox" element={<RadioSErvicesOptions />}></Route>
        <Route path="/post-service-request/6/:combinedTitleChickBox" element={<CombinedTitleCheckBokPage />}></Route>
        <Route path="/post-service-request/7/:uploadImage" element={<UploadImagePage />}></Route>
        <Route path="/post-service-request/8/:comment" element={<CommentTextPage />}></Route>
        <Route path="/post-service-request/9/:email" element={<EmailPage />}></Route>
        <Route path="/post-service-request/10/:complete" element={<CompletePages />}></Route>
      </Routes>
    </div>
  );
};

export default Routers;
