import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SortDropdown = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Relevance");

  const options = ["Relevance", "Price, low to high", "Price, high to low"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSortChange(option); 
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-[#776c65] uppercase"
      >
        Sort by: <span className="font-semibold">{selected}</span>
        {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-200 shadow-md z-50">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-sm text-[#776c65] hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
