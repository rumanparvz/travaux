import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Common/Footer/Footer';
import NavBar from '../../components/Common/NavBar/NavBar';
import Accordions from '../../components/ServiceCartDetails/Services/ReviewAndSearch/Accordions';
import Banner from '../../components/ServiceCartDetails/Services/ReviewAndSearch/Banner';
import Reviews from '../../components/ServiceCartDetails/Services/ReviewAndSearch/Reviews';
import ReviewTitle from '../../components/ServiceCartDetails/Services/ReviewAndSearch/ReviewTitle';
import SearchItem from '../../components/ServiceCartDetails/Services/ReviewAndSearch/SearchItem';
import data from '../../data/ServiceDetails';
const ServiceDetailsReview = () => {
    const {service,review}=useParams()
    const findData = data.find((ser)=> ser.path === service)
    console.log("find",findData);
    return (
        <div>
            <NavBar />
            <ReviewTitle findData={findData} />
            <SearchItem />
            <Banner findData={findData} />
            <Reviews findData={findData.subDescription} />
            <Accordions findData={findData.subDescription} />
            <Footer />
        </div>
    );
};

export default ServiceDetailsReview;