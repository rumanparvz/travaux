import React from "react";
import { Route, Routes } from "react-router-dom";
import Currenct from "../components/Admin/Currenct";
import ContactsFile from "../components/ContactsFile/ContactsFile.jsx";
import Interested from "../components/Interested/Interested.jsx";
import ForgotPassword from "../components/Login/ForgotPassword.jsx";
import LoginHappy from "../components/Login/LoginHappy.js";
import ResetPassword from "../components/Login/ResetPassword.jsx";
import PublishProject from "../components/PublishProject/PublishProject.jsx";
import DoubleCheckBox from "../components/PublshProjects/DoubleCheckBox/DoubleCheckBox";
import DoubleTitleCheckBox from "../components/PublshProjects/DoubleTitleCheckbox/DoubleTitleCheckBox";
import InputAndRadioBox from "../components/PublshProjects/InputAndRadioBox/InputAndRadioBox";
import MultiPulCheckBox from "../components/PublshProjects/MultiPulCheckBok/MultiPulCheckBox";
import MyProject from "../components/PublshProjects/MyProject/MyProject.jsx";
import MyProjectsPage from "../components/PublshProjects/MyProject/MyProjectsPage.jsx";
import RadioSErviceOption from "../components/PublshProjects/RadioServiceOption/RadioSErviceOption";
import Recommended from "../components/Recommended/Recommended.jsx";
import AllResults from "../components/Register/AllResults";
import ContractInfo from "../components/Register/ContactInfo";
import FreeRegistration from "../components/Register/FreeRegistration";
import GoogleMapLocation from "../components/Register/GoogleMapLocation";
import OfferServices from "../components/Register/OfferServices";
import PayPalPaymentGateway from "../components/Register/PayPalPaymentGateway";
import Serit from "../components/Register/Serit";
import SingleServiceInfo from "../components/ServiceCartDetails/Common/SingleServiceInfo";
import ServiceProductDetails from "../components/ServiceCartDetails/Services/Details/ServiceProductDetails";
import ServiceRequest from "../components/ServiceRequest/ServiceRequest";
import Sommes from "../components/Sommes/Sommes";
// import { serviceData } from "../data/ServiceData";
import AdminDashboardPage from "../pages/AdminDahsboardPage/AdminDashboardPage";
import FromComment from "../pages/FromComment/FromComment.jsx";
import HomePage from "../pages/Home/HomePage";
import LoginPages from "../pages/LoginPages/LoginPages";
import CheckBoxOptionPage from "../pages/PublishServices/CheckBoxOptionPage";
import CombinedTitleCheckBokPage from "../pages/PublishServices/CombinedTitleCheckBokPage";
import CommentTextPage from "../pages/PublishServices/CommentTextPage";
import CompletePages from "../pages/PublishServices/CompletePages";
import EmailPage from "../pages/PublishServices/EmailPage";
import OptionalMultiCheckBox from "../pages/PublishServices/OptionalMultiCheckBox";
import PrixDes from "../pages/PublishServices/PrixDes.jsx";
import RootTextPostPage from "../pages/PublishServices/RootTextPostPage";
import UploadImagePage from "../pages/PublishServices/UploadImagePage";
import RegisterPages from "../pages/Register/RegisterPages";
import ServiceDetailsPage from "../pages/ServiceCartDetails/ServiceDetailsPage";
import ServiceDetailsReview from "../pages/ServiceCartDetails/ServiceDetailsReview";

const Routers = () => {
  // console.log(serviceData);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/post-service-request/:postText"
          element={<RootTextPostPage />}
        ></Route>
        <Route
          path="/post-service-request/checkbox/:checkbox"
          element={<CheckBoxOptionPage />}
        ></Route>
        <Route
          path="/post-service-request/doubleCheckBox/:doubleCheckBox"
          element={<DoubleCheckBox />}
        ></Route>
        <Route
          path="/post-service-request/multipleCheckbox/:multipleCheckbox"
          element={<MultiPulCheckBox />}
        ></Route>
        <Route path="/prixDes" element={<PrixDes />}></Route>
        <Route path="/recommended" element={<Recommended />}></Route>
        <Route path="/myProjectPage" element={<MyProjectsPage />}></Route>
        <Route
          path="/singleServiceInfo/:id"
          element={<SingleServiceInfo />}
        ></Route>
        <Route
          path="/post-service-request/moreMultipleCheckBox/:moreMultipleCheckBox"
          element={<OptionalMultiCheckBox />}
        ></Route>
        <Route
          path="/post-service-request/optionsBox/:optionsBox"
          element={<RadioSErviceOption />}
        ></Route>
        <Route
          path="/post-service-request/radio/:radio"
          element={<InputAndRadioBox />}
        ></Route>
        <Route
          path="/post-service-request/titleCheckBox/:titleCheckBox"
          element={<CombinedTitleCheckBokPage />}
        ></Route>
        <Route
          path="/post-service-request/uploadImage/:uploadImage"
          element={<UploadImagePage />}
        ></Route>
        <Route
          path="/post-service-request/comment/:comment"
          element={<CommentTextPage />}
        ></Route>
        <Route path="/interested" element={<Interested />}></Route>
        <Route path="/contactsFile" element={<ContactsFile />}></Route>
        <Route
          path="/post-service-request/email/:email"
          element={<EmailPage />}
        ></Route>
        <Route
          path="/post-service-request/complete/:complete"
          element={<CompletePages />}
        ></Route>
        <Route
          path="/post-service-request/doubleTitleRadio/:doubleTitleRadio"
          element={<DoubleTitleCheckBox />}
        ></Route>
        {/* Login  */}

        <Route path="/connexion" element={<LoginPages />}></Route>
        <Route path="/forgetPassword" element={<ForgotPassword />}></Route>
        <Route path="/resetPassword" element={<ResetPassword />}></Route>

        <Route
          path="/professionnel/inscription/nouvelle"
          element={<RegisterPages />}
        ></Route>
        <Route
          path="/post-service-request/doubleTitleRadio/:doubleTitleRadio"
          element={<DoubleTitleCheckBox />}
        ></Route>

        {/* add  */}
        <Route path="/:servicesId" element={<ServiceDetailsPage />} />
        <Route path="/:service/:review" element={<ServiceDetailsReview />} />
        <Route path="/admin/:panel" element={<AdminDashboardPage />} />
        <Route path="/currency" element={<Currenct />} />
        <Route
          path="/serviceCardDetails/:id"
          element={<ServiceProductDetails />}
        />
        <Route path="/job/registration" element={<FreeRegistration />} />
        <Route path="/login" element={<LoginHappy />} />
        <Route path="/fromComment" element={<FromComment />} />
        <Route path="/searchItem" element={<PublishProject />} />
        <Route path="/myProject" element={<MyProject />} />
        <Route path="/register/contract" element={<ContractInfo />} />
        <Route path="/register/googleMap" element={<GoogleMapLocation />} />
        <Route path="/register/serit" element={<Serit />} />
        <Route path="/register/results" element={<AllResults />} />
        <Route path="/register/offerSErvice" element={<OfferServices />} />
        <Route
          path="/register/payPalPaymentGateway"
          element={<PayPalPaymentGateway />}
        />
        {/* Filter range  */}
        <Route
          path="/service-pro/new-service-requests"
          element={<ServiceRequest />}
        ></Route>
       <Route path="/qui-sommes-nous" element={<Sommes />} />

      </Routes>
    </div>
  );
};

export default Routers;
