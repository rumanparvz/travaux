import React from "react";
import { Route, Routes } from "react-router-dom";
import DoubleCheckBox from "../components/PublshProjects/DoubleCheckBox/DoubleCheckBox";
import DoubleTitleCheckBox from "../components/PublshProjects/DoubleTitleCheckbox/DoubleTitleCheckBox";
import InputAndRadioBox from "../components/PublshProjects/InputAndRadioBox/InputAndRadioBox";
import MultiPulCheckBox from "../components/PublshProjects/MultiPulCheckBok/MultiPulCheckBox";
import RadioSErviceOption from "../components/PublshProjects/RadioServiceOption/RadioSErviceOption";
import { serviceData } from "../data/ServiceData";
import HomePage from "../pages/Home/HomePage";
import LoginPages from "../pages/LoginPages/LoginPages";
import CheckBoxOptionPage from "../pages/PublishServices/CheckBoxOptionPage";
import CombinedTitleCheckBokPage from "../pages/PublishServices/CombinedTitleCheckBokPage";
import CommentTextPage from "../pages/PublishServices/CommentTextPage";
import CompletePages from "../pages/PublishServices/CompletePages";
import EmailPage from "../pages/PublishServices/EmailPage";
import OptionalMultiCheckBox from "../pages/PublishServices/OptionalMultiCheckBox";
import RootTextPostPage from "../pages/PublishServices/RootTextPostPage";
import UploadImagePage from "../pages/PublishServices/UploadImagePage";
<<<<<<< HEAD
<<<<<<< HEAD
import RegisterPages from "../pages/Register/RegisterPages";
=======
>>>>>>> rajuahmmad
=======
>>>>>>> rajuahmmad
import FenetrePortePage from "../pages/ServiceCartDetails/FenetrePortePage";
import PlomberiePage from "../pages/ServiceCartDetails/PlomberiePage";
const Routers = () => {
  console.log(serviceData);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/post-service-request/:postText" element={<RootTextPostPage  />}></Route>
        <Route path="/post-service-request/checkBox/:checkBox" element={<CheckBoxOptionPage />}></Route>
        <Route path="/post-service-request/doubleCheckBox/:doubleCheckBox" element={<DoubleCheckBox />}></Route>
        <Route path="/post-service-request/multipleCheckBox/:multipleCheckBox" element={<MultiPulCheckBox />}></Route>
        <Route path="/post-service-request/moreMultipleCheckBox/:moreMultipleCheckBox" element={<OptionalMultiCheckBox />}></Route>
        <Route path="/post-service-request/optionsBox/:optionsBox" element={<RadioSErviceOption/>}></Route>
        <Route path="/post-service-request/inputAndRadio/:inputAndRadio" element={<InputAndRadioBox/>}></Route>
        <Route path="/post-service-request/titleCheckBox/:titleCheckBox" element={<CombinedTitleCheckBokPage />}></Route>
        <Route path="/post-service-request/uploadImage/:uploadImage" element={<UploadImagePage />}></Route>
        <Route path="/post-service-request/comment/:comment" element={<CommentTextPage />}></Route>
        <Route path="/post-service-request/email/:email" element={<EmailPage />}></Route>
        <Route path="/post-service-request/complete/:complete" element={<CompletePages />}></Route>
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/post-service-request/doubleTitleRadio/:doubleTitleRadio" element={<DoubleTitleCheckBox />}></Route>


        <Route path="/plomberie" element={<PlomberiePage />}></Route>
        <Route path="/fenetre-porte" element={<FenetrePortePage />}></Route>
             {/* Login  */}
             <Route path="/connexion" element={<LoginPages />}></Route>
             <Route path="/professionnel/inscription/nouvelle" element={<RegisterPages />}></Route>
=======
        <Route path="/plomberie" element={<PlomberiePage />}></Route>
        <Route path="/fenetre-porte" element={<FenetrePortePage />}></Route>
>>>>>>> rajuahmmad
=======
        <Route path="/plomberie" element={<PlomberiePage />}></Route>
        <Route path="/fenetre-porte" element={<FenetrePortePage />}></Route>
>>>>>>> rajuahmmad
      </Routes>

    </div>
  );
};

export default Routers;
