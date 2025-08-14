import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = () => {
  const rating = (Math.random() * (5 - 4) + 4).toFixed(1);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-1 text-[#e97625]">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <FaStar key={i} />;
        } else if (i === fullStars && hasHalfStar) {
          return <FaStarHalfAlt key={i} />;
        } else {
          return <FaRegStar key={i} />;
        }
      })}
      <span className="text-[#e97625] font-medium ml-2">{rating}</span>
    </div>
  );
};

export default Rating;
