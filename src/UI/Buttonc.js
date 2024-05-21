import React from 'react';

export default function Buttonc({caption, bcolor, handleClick}) {
  const colorB = {
    'blue' : 'bg-blue-600' ,
    'orange' : 'bg-orange-600'
  }

  const colorBHover = {
    'blue' : 'hover:bg-blue-800' ,
    'orange' : 'hover:bg-orange-800'
  }
 
  return (
    <button className={`inline-flex px-4 py-2 
                        rounded-md
                        justify-center items-center
                        text-white font-bold
                        text-sm  
                        ${colorB[bcolor]}
                        ${colorBHover[bcolor]}
                      `}
            onClick={handleClick}>
      {caption}
    </button>
  )
}