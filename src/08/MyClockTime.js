// MyClockTime.js
import React, { useState, useEffect } from 'react';
import './MyClock.css';
import style from './My.module.css';

function MyClockTime() {
    const [koreanTime, setKoreanTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            const koreanTimeNow = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"}));
            setKoreanTime(koreanTimeNow);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = koreanTime.getHours().toString().padStart(2, '0');
    const minutes = koreanTime.getMinutes().toString().padStart(2, '0');
    const seconds = koreanTime.getSeconds().toString().padStart(2, '0');
    const nowStr = `${hours}시 ${minutes}분 ${seconds}초`;

    return (
        <>
            <div className={style.c1}>
                {nowStr}
            </div>
        </>
    );
}

export default MyClockTime;