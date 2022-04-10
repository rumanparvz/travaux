import React from "react";
import { Route, Routes } from "react-router-dom";
import Currenct from "../components/Admin/Currenct";
import DoubleCheckBox from "../components/PublshProjects/DoubleCheckBox/DoubleCheckBox";
import DoubleTitleCheckBox from "../components/PublshProjects/DoubleTitleCheckbox/DoubleTitleCheckBox";
import InputAndRadioBox from "../components/PublshProjects/InputAndRadioBox/InputAndRadioBox";
import MultiPulCheckBox from "../components/PublshProjects/MultiPulCheckBok/MultiPulCheckBox";
import RadioSErviceOption from "../components/PublshProjects/RadioServiceOption/RadioSErviceOption";
import AllResults from "../components/Register/AllResults";
import ContractInfo from "../components/Register/ContactInfo";
import FreeRegistration from "../components/Register/FreeRegistration";
import GoogleMapLocation from "../components/Register/GoogleMapLocation";
import OfferServices from "../components/Register/OfferServices";
import Serit from "../components/Register/Serit";
import ServiceProductDetails from "../components/ServiceCartDetails/Services/Details/ServiceProductDetails";
import { serviceData } from "../data/ServiceData";
import AdminDashboardPage from "../pages/AdminDahsboardPage/AdminDashboardPage";
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
import RegisterPages from "../pages/Register/RegisterPages";
import ServiceDetailsPage from "../pages/ServiceCartDetails/ServiceDetailsPage";
import ServiceDetailsReview from "../pages/ServiceCartDetails/ServiceDetailsReview";

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
        <Route path="/post-service-request/doubleTitleRadio/:doubleTitleRadio" element={<DoubleTitleCheckBox />}></Route>

             {/* Login  */}
        <Route path="/connexion" element={<LoginPages />}></Route>
        <Route path="/professionnel/inscription/nouvelle" element={<RegisterPages />}></Route>
        <Route path="/post-service-request/doubleTitleRadio/:doubleTitleRadio" element={<DoubleTitleCheckBox />}></Route>
    
      {/* add  */}
      <Route path="/:servicesId" element={<ServiceDetailsPage    /> }/>
      <Route path="/:service/:review" element={<ServiceDetailsReview    /> }/>
      <Route path="/admin/:panel" element={<AdminDashboardPage    /> }/>
      <Route path="/currency" element={<Currenct    /> }/> 
      <Route path="/serviceCardDetails/:id" element={<ServiceProductDetails    /> }/>
      <Route path="/job/registration" element={<FreeRegistration    /> }/>
      <Route path="/register/contract" element={< ContractInfo   /> }/>
      <Route path="/register/googleMap" element={< GoogleMapLocation   /> }/>
      <Route path="/register/serit" element={< Serit   /> }/>
      <Route path="/register/results" element={< AllResults   /> }/>
      <Route path="/register/offerSErvice" element={< OfferServices   /> }/>

      </Routes>

    </div>
  );
};

export default Routers;
