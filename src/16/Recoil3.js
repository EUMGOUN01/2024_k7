import TailButton from "../UI/TailButton";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { rcnt } from "./RecoilAtom";
// import { useState, useEffect } from "react";

export default function Recoil3() {
  // const cnt = useRecoilValue(rcnt) ;
  // const setCnt = useSetRecoilState(rcnt) ;
  const [cnt, setCnt] = useRecoilState(rcnt);

  const handleUp = () => {
    setCnt(cnt + 1);
  }

  const handleDown = () => {
    setCnt(cnt - 1);
  }

  const handleSave = () => {
    localStorage.setItem("ctn", cnt);
  }
  return (
    <div className="flex items-center justify-center w-1/5">
      <div className="flex space-x-4">
        <TailButton 
          caption='증가'
          color='blue' 
          handleClick={handleUp}
        />
        <TailButton 
          caption='감소'
          color='red'
          handleClick={handleDown}
        />
        <TailButton 
          caption='로컬 저장'
          color='blue'
          handleClick={handleSave}
        />
      </div>
    </div>
  );
}