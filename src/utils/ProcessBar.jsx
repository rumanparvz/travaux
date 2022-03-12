import React from 'react';

const ProcessBar = ({processStep,length}) => {
    const width = processStep/length* 100
 console.log("width",processStep/length* 100);
    return (
        <div className="process" style={{background:'#dfddeb'}}>
        <p className="percent" style={{width:`${width}%`,height:'4px',background:'#3f27ba'}}></p>
        
        </div>
    );
};

export default ProcessBar;