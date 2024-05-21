import { useState } from 'react';
import TailButton from '../UI/TailButton';

export default function TrafficMains() {
    const title = '대분류';
    const c = ['차대사람', '차대차', '차량단독', '철길골목길'];

    const [clickedIndex, setClickedIndex] = useState(null);

    const cTag = c.map((item, index) => (
        <TailButton 
            key={index}
            caption={item}
            color={clickedIndex === index ? "red" : "blue"} // 클릭되었을 때 빨간색, 아닐 때 파란색
            handleClick={() => handleButtonClick(index)}
        />
    ));

    const handleButtonClick = (index) => {
        setClickedIndex(index);
        console.log(c[index]);
    };

    return (
        <div className="w-full flex justify-start items-start my-5">
          <div className="w-1/5 flex justify-start items-center">
            교통사고 {title}
          </div>
          <div className="w-4/5 grid grid-cols-1 
                          md:grid-cols-2 lg:grid-cols-4 gap-2">
            {cTag}
          </div>
        </div>
      )
}