import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CurrencyInput from './CurrencyInput';

const Currenct = () => {
    const [amount1,setAmount1]=useState(1)
    const [amount2,setAmount2]=useState(1)
    const [currenct1,setCurrency1]=useState('USD')
    const [currenct2,setCurrency2]=useState('USD')
    const [rates, setRates] = useState([])

    useEffect(()=>{
        axios.get('http://data.fixer.io/api/latest?access_key=c26bd95871c198b9024577b7cceee100')
        .then((res)=>setRates(res.data.rates))

    },[])
    return (
        <div>
            <CurrencyInput currencies={Object.keys(rates)} amount={amount1} currency={currenct1}/>
            <CurrencyInput currencies={Object.keys(rates)} amount={amount2} currency={currenct2} />
        </div>
    );
};

export default Currenct;