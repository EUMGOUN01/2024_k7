import Mydiv2 from "./Mydiv2";
//1. use 임포트
import { useState } from "react";

export default function MyDiv() { 
  //선언
  const [n, setN] = useState(0);
  
  const div1Name = "div1";
  const div2Name = "div2";
  const div3Name = "div3";

  let cnt = 0;

  const handleCount = () => {
    cnt = cnt + 1;
    setN(n + 1);
    console.log("handleCount", cnt)
  }

  return (
      <div className="flex flex-col justify-center items-center
                      w-2/3 h-2/3
                      text-white bg-sky-900
                      rounded-sm m-10 p-10"> {}
        <p className="flex w-full justify-end items-center">
          <span className="inline-flex p-2 mx-2" onClick={handleCount}>
            💙
          </span>
          <span>{n}</span>
        </p>
        <p className="flex w-full font-bold justify-start">{div1Name}</p>
        <Mydiv2 dname1 = {div1Name} dname2 = {div2Name} dname3 = {div3Name} />
      </div>
  );
}