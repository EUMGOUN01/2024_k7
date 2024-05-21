import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TailButton from "../UI/TailButton";

export default function RouteNav() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4">
      <ul className="w-full flex justify-between items-center px-4">
        <li className="w-1/3 py-2 m-3 rounded-md text-center bg-slate-200">
          <Link to="/" className="block mb-4">홈</Link>
        </li>
        <li className="w-1/3 py-2  m-3 rounded-md text-center bg-slate-200">
          <Link to="/p1/오렌지는 비타민 팡팡" className="block mb-4">오렌지</Link>
        </li>
        <li className="w-1/3 py-2  m-3 rounded-md text-center bg-slate-200">
          <Link to="/p1/바나나는 노란색 입니다." className="block mb-4">바나나</Link>
        </li>
      </ul>

      <div className="w-full flex justify-center items-center space-x-4">
        <TailButton 
          caption="홈"
          color="blue"
          handleClick={() => navigate("/")}
        />
        <TailButton 
          caption="당근"
          color="blue"
          handleClick={() => navigate("/p2?i1=당근은 과일이 아닙니다.")}
        />
        <TailButton 
          caption="사과와 바나나"
          color="blue"
          handleClick={() => navigate("/p2?i1=사과&i2=바나나는 맛있습니다.")}
        />      
      </div>                  
    </div>
  );
}