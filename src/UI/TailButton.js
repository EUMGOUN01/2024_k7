import React from 'react';

const TailButton = ({ caption, color, handleClick }) => {
  // 버튼의 색상과 해당 색상에 대한 클래스 매핑
  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-600',
    red: 'bg-red-500 hover:bg-red-600 focus:ring-red-600',
    lime: 'bg-lime-500 hover:bg-lime-600 focus:ring-lime-600',
    orange: 'bg-orange-500 hover:bg-orange-600 focus:ring-orange-600',
  };

  return (
    <button
      className={`px-4 py-2 mx-2 my-2 w-1/3 rounded-md text-lg font-semibold text-white ${colorClasses[color]} focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-300`}
      onClick={handleClick}
    >
      {caption}
    </button>
  );
};

export default TailButton;