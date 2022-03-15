import React from 'react';
import Header from '../../Common/Header/Header'
const HeaderParent = ({data}) => {
    return (
        <div className="header_parent">
            <Header data={data} />
        </div>
    );
};

export default HeaderParent;