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
import RegisterPages from "../pages/Register/RegisterPages";
=======
import CouvertureToiturePage from "../pages/ServiceCartDetails/CouvertureToiturePage";
>>>>>>> rajuahmmad
import FenetrePortePage from "../pages/ServiceCartDetails/FenetrePortePage";
import PeinturePage from "../pages/ServiceCartDetails/PeinturePage";
import PlatrePage from "../pages/ServiceCartDetails/PlatrePage";
import PlomberiePage from "../pages/ServiceCartDetails/PlomberiePage";
<<<<<<< HEAD

=======
import SolsCarrelagePage from "../pages/ServiceCartDetails/SolsCarrelagePage";
>>>>>>> rajuahmmad
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

        <Route path="/post-service-request/doubleTitleRadio/:doubleTitleRadio" element={<DoubleTitleCheckBox />}></Route>


        <Route path="/plomberie" element={<PlomberiePage />}></Route>
        <Route path="/fenetre-porte" element={<FenetrePortePage />}></Route>
             {/* Login  */}
             <Route path="/connexion" element={<LoginPages />}></Route>
             <Route path="/professionnel/inscription/nouvelle" element={<RegisterPages />}></Route>

        <Route path="/plomberie" element={<PlomberiePage />}></Route>
        <Route path="/fenetre-porte" element={<FenetrePortePage />}></Route>

        <Route path="/plomberie" element={<PlomberiePage />}></Route>
        <Route path="/fenetre-porte" element={<FenetrePortePage />}></Route>
=======
        <Route path="/plomberie" element={<PlomberiePage />}></Route>
        <Route path="/fenetre-porte" element={<FenetrePortePage />}></Route>
        <Route path="/post-service-request/doubleTitleRadio/:doubleTitleRadio" element={<DoubleTitleCheckBox />}></Route>
        {/* Login  */}
        <Route path="/connexion" element={<LoginPages />}></Route>
        <Route path="/couverture-toiture" element={<CouvertureToiturePage />}></Route>
        <Route path="/peinture" element={<PeinturePage />}></Route>
        <Route path="/platre" element={<PlatrePage />}></Route>
        <Route path="/sols-carrelage" element={<SolsCarrelagePage />}></Route>
        

>>>>>>> rajuahmmad
      </Routes>

    </div>
  );
};

export default Routers;
