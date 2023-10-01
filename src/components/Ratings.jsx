import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
const Ratings = ({ rating, setRating }) => {
  const handleRatingClick = (index) => {
    if (rating === index + 1 && rating === 1) {
      setRating(0);
    } else {
      setRating(index + 1);
    }
  };
  return (
    <div className="bg-white p-5 rounded-md">
      <p className="text-sm text-gray-600">Give us your valuable feedback</p>
      <div className=" mt-1 space-x-2">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <button
            onClick={() => {
              handleRatingClick(index);
            }}
            key={index}
            className="focus:outline-none"
          >
            <StarIcon
              className={`h-6 w-6 ${
                index + 1 <= rating ? "text-yellow-400" : "text-gray-400"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
