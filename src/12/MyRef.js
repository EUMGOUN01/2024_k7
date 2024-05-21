import React, { useState, useEffect, useRef } from "react";
import TailButton from '../UI/TailButton';

export default function RefVal() {
    let cnt = 0; // 컴포넌트 변수
    const [stCnt, setStCnt] = useState(0); // state 변수
    const refCnt = useRef(0); // ref 변수

    const handleLocal = () => {
        cnt = cnt + 1;
        console.log('cnt = ', cnt);
    }

    const handleState = () => {
        setStCnt(stCnt + 1);
    }

    const handleRef = () => {
        refCnt.current = refCnt.current + 1;
        console.log("refCnt = ", refCnt.current);
    }

    useEffect(() => {
        console.log("stCnt = ", stCnt);
    }, [stCnt]);

    return (
        <div className="w-full grid grid-cols-3 gap-4 text-center">
            <div className="border p-4">
                <span className="block mb-4 font-bold">컴포넌트 변수(지역 변수): {cnt}</span>
                <TailButton
                    caption="증가"
                    color="blue"
                    handleClick={handleLocal}
                />
            </div>
            <div className="border p-4">
                <span className="block mb-4 font-bold">State 변수: {stCnt}</span>
                <TailButton
                    caption="증가"
                    color="blue"
                    handleClick={handleState}
                />
            </div>
            <div className="border p-4">
                <span className="block mb-4 font-bold">Ref 변수: {refCnt.current}</span>
                <TailButton
                    caption="증가"
                    color="blue"
                    handleClick={handleRef}
                />
            </div>
        </div>
    );
}