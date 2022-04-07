import React from 'react';
import DetailsCardHeader from '../../Common/DetailsCardHeader/DetailsCardHeader';

const ServiceDetailsTItle = ({content}) => {
 
    console.log('content',content);
    return (
        <div>
           <DetailsCardHeader content={content[0]} />
        </div>
    );
};

export default ServiceDetailsTItle;