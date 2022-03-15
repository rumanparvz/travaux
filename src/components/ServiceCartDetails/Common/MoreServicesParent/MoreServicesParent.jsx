import React from 'react';
import MoreServices from '../MoreServices/MoreServices';

const MoreServicesParent = ({ data}) => {
    return (
        <div>
            <ul>
            { 
                data.services.map(data => <MoreServices data={data} />)
            }
            </ul>
        </div>
    );
};

export default MoreServicesParent;