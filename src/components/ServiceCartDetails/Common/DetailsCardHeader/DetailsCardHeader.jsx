import React from 'react';

const DetailsCardHeader = ({content :{title,description}}) => {
    console.log(title);
    return (
        <div className=' w-75 m-auto py-5 '>
            <h1 style={{fontSize:'50px'}}>{title}</h1>
            <p className='w-50 py-2'>{description}</p>
        </div>
    );
};

export default DetailsCardHeader;