import { useEffect, useState } from "react";

const Timer = ({ hackathonEndTime }) => {
  const getTimeRemaining = () => {
    const now = new Date();
    const endTime = new Date(hackathonEndTime);
    const timeDiff = endTime - now;
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);
    return { hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  // Update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="counter mx-auto md:mx-0 flex items-center justify-between w-[280px]">
      <div className="hour flex items-end space-x-0 text-primary">
        <p className="font-normal font-Unica text-[64px] -mb-6 ">
          {timeRemaining.hours < 10
            ? "0" + timeRemaining.hours
            : timeRemaining.hours}
        </p>
        <span className="font-normal text-[14px] leading-[18px] p-0 -ml-4 uppercase">
          h
        </span>
      </div>
      <div className="hour flex items-end space-x-0 text-primary">
        <p className="font-normal font-Unica text-[64px] -mb-6 ">
          {timeRemaining.minutes < 10
            ? "0" + timeRemaining.minutes
            : timeRemaining.minutes}
        </p>
        <span className="font-normal text-[14px] leading-[18px] p-0 -ml-4 uppercase">
          m
        </span>
      </div>
      <div className="hour flex items-end space-x-0 text-primary">
        <p className="font-normal font-Unica text-[64px] -mb-6 ">
          {timeRemaining.seconds < 10
            ? "0" + timeRemaining.seconds
            : timeRemaining.seconds}
        </p>
        <span className="font-normal text-[14px] leading-[18px] p-0 -ml-4 uppercase">
          s
        </span>
      </div>
    </div>
  );
};

export default Timer;
