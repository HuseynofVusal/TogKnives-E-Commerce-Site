import React from 'react';

export default function ErrorPage() {
  const handleContinueShopping = () => {
    window.location.href = '/main';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="text-[20rem] md:text-[25rem] lg:text-[30rem] font-bold text-gray-200 select-none leading-none">
          404
        </div>
      </div>
      
      <div className="text-center relative z-10">
        <h1 className="text-2xl md:text-3xl font-medium text-gray-600 mb-8 tracking-wide">
          PAGE NOT FOUND
        </h1>
        
        <button 
          onClick={handleContinueShopping}
          className="px-8 py-3 border-2 cursor-pointer border-[#e97625] text-gray-700 font-medium tracking-wide hover:bg-[#e97625] hover:text-white transition-colors duration-300"
        >
          Continue shopping
        </button>
      </div>
    </div>
  );
}