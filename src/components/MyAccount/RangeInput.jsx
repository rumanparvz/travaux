import React, { useState } from 'react';
import InputRange from "react-input-range";
const RangeInput = () => {
  const [isRang, setIsRange] = useState("5 km");
  const rangChange = () => {
    isRang &&  setIsRange()
  }
    return (
      <div>
        <InputRange
          maxValue={20}
          minValue={0}
          inputRange="km"
          value="5km"
          onChange={rangChange}
        />
      </div>
    );
};

export default RangeInput;