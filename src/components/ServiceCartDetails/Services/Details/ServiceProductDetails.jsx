import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceProductDetails = () => {
    const {id}=useParams()
    return (
        <div>
            <h1>ServiceProduct Details</h1>
            {id}
        </div>
    );
};

export default ServiceProductDetails;