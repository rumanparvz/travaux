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
        <Route path="/post-service-request/:checkBokOption/:id" element={<CheckBoxOptionPage />}></Route>
        <Route path="/post-service-requests/:multiCheckBox/:id" element={<MultiPulCheckBox />}></Route>
        <Route path="/post-service-request/items/:optionalMultiCheckBok/:id" element={<OptionalMultiCheckBox />}></Route>
        <Route path="/post-service-request/itemss/:radioCheckBox/:id" element={<RadioSErvicesOptions />}></Route>
        <Route path="/post-service-request/title/:combinedTitleChickBox/:id" element={<CombinedTitleCheckBokPage />}></Route>
        <Route path="/post-service-request/titles/:uploadImage/:id" element={<UploadImagePage />}></Route>
        <Route path="/post-service-request/comment/:comment/:id" element={<CommentTextPage />}></Route>
        <Route path="/post-service-request/email/:email/:id" element={<EmailPage />}></Route>
        <Route path="/post-service-request/complete/:complete/:id" element={<CompletePages />}></Route>
      </Routes>
    </div>
  );
};

export default Routers;
