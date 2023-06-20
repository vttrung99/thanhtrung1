import React, { useEffect, useState } from 'react';
import './footer1.css';

export default function Footer1() {
  const [countdownTime, setCountdownTime] = useState(3 * 60 * 60); // 3 giờ (180 phút)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdownTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0')
    };
  }

  const { hours, minutes, seconds } = formatTime(countdownTime);

  return (
    <div className='abc'>
       <div> <img src="./imgages/deal_ofthe_week.png" alt="" /></div>
      <div className='flex-container'>
        <div className='rounded-div'>
          <div className='rounded-value'>{hours}</div>
          <div className='rounded-label'>Hours</div>
        </div>
        <div className='rounded-div'>
          <div className='rounded-value'>{minutes}</div>
          <div className='rounded-label'>Minutes</div>
        </div>
        <div className='rounded-div'>
          <div className='rounded-value'>{seconds}</div>
          <div className='rounded-label'>Seconds</div>
        </div>
      </div>
    </div>
  );
}
