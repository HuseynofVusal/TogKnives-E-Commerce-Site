import React from "react";

const PriceRange = ({ value, onChange, min = 0, max = 1000 }) => {
  const [minVal, maxVal] = value;

  const handleMinChange = (e) => {
    const newMin = Number(e.target.value);
    if (newMin <= maxVal) {
      onChange([newMin, maxVal]);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = Number(e.target.value);
    if (newMax >= minVal) {
      onChange([minVal, newMax]);
    }
  };

  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex gap-2 text-sm text-[#776c65]">
        <span>{minVal} AZN</span>
        <span>-</span>
        <span>{maxVal} AZN</span>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="range"
          min={min}
          max={max/2}
          step={200} 
          value={minVal}
          onChange={handleMinChange}
          className="w-32 accent-[#776c65] cursor-pointer"
        />

        <input
          type="range"
          min={max/2+200}
          max={max}
          step={200} 
          value={maxVal}
          onChange={handleMaxChange}
          className="w-32 accent-[#776c65] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PriceRange;
