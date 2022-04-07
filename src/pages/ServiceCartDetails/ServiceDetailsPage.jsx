import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Common/Footer/Footer';
import NavBar from '../../components/Common/NavBar/NavBar';
import ParentDetailsCard from '../../components/ServiceCartDetails/Common/DetailsCard/ParentDetailsCard';
import ServiceDetailsTItle from '../../components/ServiceCartDetails/Services/Details/ServiceDetailsTItle';
import useAsync from '../../hooks/useAsync';
import { category } from '../../services/ServiceCategory/ServiceCategory';
const ServiceDetailsPage = () => {
    const {servicesId}=useParams()
    // const {data}=useAsync(category.getAllProductCategoryWise(servicesId))

    const getProduct = useCallback(() => {
        return category.getAllProductCategoryWise(servicesId);
      }, [servicesId]);
    
      useAsync (getProduct);
      const { data } = useAsync(getProduct);
    console.log("data is",data);
//  console.log(serviceDetails);
//  const findService = serviceDetails?.find((ser)=>ser?.path === service)
//  console.log("ser",findService);

    return (
        <div>
            <NavBar />
            {
                data && <ServiceDetailsTItle content={data} />
            }
           
             {/* <ServiceDetailsCategory cateGoryLink={findService.cateGoryLink} /> */}
            <ParentDetailsCard data={data} />
            {/* <DetailsServiceLink services={findService.serviceLinks} />   */}
            <Footer />
        </div>
    );
};

export default ServiceDetailsPage;