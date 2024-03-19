import React from 'react';

const Card = ({ imageSrc, title, content }) => {
    return (
        <div className="max-w-xs bg-white shadow-md rounded-md overflow-hidden m-5 sm:max-w-md">
        <img className="w-full h-50 object-cover" src={imageSrc} alt="Card Image" />
        <div className="px-4 py-2">
          <h3 className="text-lg font-semibold mt-20">{title}</h3>
          <p className="text-gray-600 mt-1">{content}</p>
        </div>
        <div className="px-4 py-2 bg-gray-500 border-t border-gray-200">
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">Action Button</button>
        </div>
      </div>
    );
  };

export default Card;
