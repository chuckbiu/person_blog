import React, { useEffect, useState } from 'react';
import s from './index.module.less';
const WeathertimeCard: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);
  
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();
  
    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  
    const formatTime = (num: number): string => num.toString().padStart(2, '0');
  
    return (
      <div className={s.clockContainer}>
        <div className={s.clock}>
          <div className={`${s.hand} ${s.hour}`} style={{ transform: `rotate(${hourDeg}deg)` }} />
          <div className={`${s.hand} ${s.minute}`} style={{ transform: `rotate(${minuteDeg}deg)` }} />
          <div className={`${s.hand} ${s.second}`} style={{ transform: `rotate(${secondDeg}deg)` }} />
          <div className={s.centerDot} />
        </div>
        <div className={s.digitalTime}>
          {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
        </div>
      </div>
    );
}

export default WeathertimeCard;