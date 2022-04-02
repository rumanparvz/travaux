import React from "react";
import Footer from "../../components/Common/Footer/Footer";
import ChooseCraftsman from "../../components/Home/ChooseCraftsman/ChooseCraftsman";
import Craftsman from "../../components/Home/Craftsman/Craftsman";
import CraftsmenJobs from "../../components/Home/CraftsmenJob/CraftsmenJobs";
import HeaderMain from "../../components/Home/HeaderMain/HeaderMain";
import HotServiceCard from "../../components/Home/HotServiceCard/HotServiceCard";
import ProjectCount from "../../components/Home/ProjectCount/ProjectCount";
import ServiceCard from "../../components/Home/ServiceCard/ServiceCard";

const HomePage = () => {

  return (
    <  >
     <HeaderMain />
     <Craftsman />
     <ServiceCard />
     <HotServiceCard />
     <CraftsmenJobs />
     <ChooseCraftsman />
     <ProjectCount />
     <Footer />

    </>
  );
};

export default HomePage;
