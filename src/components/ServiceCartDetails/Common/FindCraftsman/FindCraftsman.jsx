import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
const FindCraftsman = ({data}) => {
    return (
        <div className="find_crafts_man container mt-100">
            <h4>{data.title}</h4>
            <p>{data.des}</p>
            <Link className="pe-5" to="" ><span><BsArrowRight/></span><span>{data.link}</span></Link>
            <Link className="pe-5" to="" ><span><BsArrowRight/></span><span>{data.link1}</span></Link>
            <Link className="pe-5" to="" ><span><BsArrowRight/></span><span>{data.link2}</span></Link>
            {/* {
                data.link1 &&  <Link to="" ><span><BsArrowRight/></span><span>{data.link1}</span></Link>
            } */}
        </div>
    );
};

export default FindCraftsman;