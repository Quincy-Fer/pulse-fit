import React from 'react';

const HoverImageCard = () => {
  return (
    <div className="relative group w-64 h-64 overflow-hidden rounded-lg shadow-lg">
      {/* Background Image */}
      <img 
        src="https://via.placeholder.com/300" 
        alt="Sample" 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-blue-600 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xl font-bold">Your Text Here</p>
      </div>
    </div>
  );
};

export default HoverImageCard;
