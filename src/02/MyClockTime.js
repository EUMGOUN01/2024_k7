import React, { useState, useEffect } from 'react';
import './NewClockStyles.css';

function MyClockTime() {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [isAfternoon, setIsAfternoon] = useState(false); 

  useEffect(() => {
    const timerID = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setIsAfternoon(now.getHours() >= 12); // 오후인지 여부를 판단하여 상태 업데이트
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []); 

  const hours = currentTime.getHours();
  const amPm = hours >= 12 ? '지금 시간은 오후' : '지금 시간은 오전';
  const formattedHours = hours % 12 || 12; 

  const formattedTime = `${amPm} ${formattedHours}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

  return (
    <div className={`MyClockTime ${isAfternoon ? 'afternoon' : 'morning'}`}>
      <div className="image-container" />
      <p>{formattedTime}</p>
    </div>
  );
}

export default MyClockTime;