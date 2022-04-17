import React from 'react';
import Footer from '../Common/Footer/Footer.jsx';
import NavBar from '../Common/NavBar/NavBar.jsx';
// import RootTitlePost from '../PublshProjects/RootTextPost/RootTitlePost.jsx';
import SearchItem from '../ServiceCartDetails/Services/ReviewAndSearch/SearchItem.jsx';

const PublishProject = () => {
    return (
        <div>
            <NavBar />
            <SearchItem />
            {/* <RootTitlePost/> */}
            <Footer/>
        </div>
    );
};

export default PublishProject;