import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Common/Footer/Footer';
import NavBar from '../../components/Common/NavBar/NavBar';
import ParentDetailsCard from '../../components/ServiceCartDetails/Common/DetailsCard/ParentDetailsCard';
import DetailsServiceLink from '../../components/ServiceCartDetails/Services/Details/DetailsServiceLink';
import ServiceDetailsCategory from '../../components/ServiceCartDetails/Services/Details/ServiceDetailsCategory';
import ServiceDetailsTItle from '../../components/ServiceCartDetails/Services/Details/ServiceDetailsTItle';
import serviceDetails from '../../data/ServiceDetails';
const ServiceDetailsPage = () => {
    const {service}=useParams()
 console.log(serviceDetails);
 const findService = serviceDetails?.find((ser)=>ser?.path === service)
 console.log("ser",findService);
    return (
        <div>
            <NavBar />
            <ServiceDetailsTItle content={findService.serviceHeader} />
            <ServiceDetailsCategory cateGoryLink={findService.cateGoryLink} />
            <ParentDetailsCard data={findService.serviceDetailsCards} />
            <DetailsServiceLink services={findService.serviceLinks} />
            <Footer />
        </div>
    );
};

export default ServiceDetailsPage;