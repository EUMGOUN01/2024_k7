import TailInput from "../UI/TailInput";
import TailButton from "../UI/TailButton";
import { useState, useRef } from "react";

export default function RefInput() {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const value1 = parseFloat(inputRef1.current.value);
    const value2 = parseFloat(inputRef2.current.value);
    
    if (isNaN(value1) || isNaN(value2)) {
      alert('숫자를 입력하세요.');
      return;
    }
    
    const sum = value1 + value2;
    setResult(sum);
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-96 flex flex-col justify-center items-center border p-4 rounded-lg shadow-md">
        <div className="w-full flex justify-center items-center mb-4">
          <TailInput type="number" inputRef={inputRef1} ph="첫 번째 값" />
          <span className="mx-2">+</span>
          <TailInput type="number" inputRef={inputRef2} ph="두 번째 값" />
          <TailButton caption="=" color="blue" handleClick={handleCalculate} />
        </div>
        <div className="w-full border p-3 bg-gray-100 rounded-md">
          <p>결과: {result}</p>
        </div>
      </div>
    </div>
  )
}