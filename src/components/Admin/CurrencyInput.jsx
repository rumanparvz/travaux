import React from 'react';

const CurrencyInput = ({amount,currency,currencies}) => {
    return (
        <div>
            <input type="text" name="" value={amount} id=""  />
            <select name="" id="" value={currency}>
                {
                    currencies.map((currency)=>
                    <option>{currency}</option>)
                }
            </select>
        </div>
    );
};

export default CurrencyInput;