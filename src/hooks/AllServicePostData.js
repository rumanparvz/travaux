import { useEffect, useState } from "react";

const AllServicePostData = (servicePost) => {
    
    // const {email,comment}= servicePost

    const [state,setState]=useState(null)



    console.log(servicePost);
    useEffect(()=>{
        setState(servicePost)

    },[])


    return {
        state,

    }
        
};

export default AllServicePostData;