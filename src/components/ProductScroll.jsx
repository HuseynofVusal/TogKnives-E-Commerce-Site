import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, ShoppingBasket } from "lucide-react";

const ProductScroll = ({ scrollContainerRef }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateScrollInfo = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const maxScrollValue = scrollWidth - clientWidth;

      setScrollPosition(scrollLeft);
      setMaxScroll(maxScrollValue);
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < maxScrollValue - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScrollInfo);
      updateScrollInfo();

      return () =>
        scrollContainer.removeEventListener("scroll", updateScrollInfo);
    }
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  // Calculate progress percentage
  const progressPercentage =
    maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

  return (
    <div className="relative py-10">
      {/* Navigation Arrows */}
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-[55%] -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
      )}

      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute right-4 top-[55%] -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      )}

      {/*Bar */}
      <div className="mt-6 px-4">
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-[#e97625] h-1 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={scrollLeft}
            disabled={!showLeftArrow}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              showLeftArrow
                ? "bg-[#e97625] text-white hover:bg-orange-600 "
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            ← Previous
          </button>
          <button
            onClick={scrollRight}
            disabled={!showRightArrow}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all  ${
              showRightArrow
                ? "bg-[#e97625] text-white hover:bg-orange-600"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Next →
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default ProductScroll;
