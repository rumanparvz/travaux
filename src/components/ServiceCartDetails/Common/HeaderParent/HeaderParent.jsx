import React from 'react';
import ServiceHeader from '../ServiceHeader/ServiceHeader'
const HeaderParent = ({data}) => {
    return (
        <div className="header_parent">
            <ServiceHeader data={data} />
        </div>
    );
};

export default HeaderParent;