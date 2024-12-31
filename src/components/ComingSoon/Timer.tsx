"use client";

import { useEffect, useState } from "react";

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const getTimeLeft = (expiry: string): TimeCount => {
  let days = "00";
  let hours = "00";
  let minutes = "00";
  let seconds = "00";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const snd = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
  seconds = snd < 10 ? `0${snd}` : snd.toString();

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const Timer = ({ launchDate }: { launchDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeCount | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(launchDate)); // Initialize timeLeft
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate)); // Update timeLeft every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [launchDate]);

  if (!timeLeft) {
    return <div>Loading timer...</div>; // Fallback for initial render
  }

  return (
    <div className="grid md:grid-cols-4 w-max grid-cols-2 justify-center lg:justify-start my-14 gap-3">
      <span className="shrink-0 flex flex-col justify-center items-center bg-yellow-500 text-yellow  text-5xl w-36 py-3 shadow-lg rounded-lg">
        {timeLeft.days}
        <small className="text-xs lg:text-sm uppercase font-semibold text-white">
          Days
        </small>
      </span>
      <span className="shrink-0 flex flex-col justify-center items-center bg-yellow-500 text-yellow  text-5xl w-36 py-3 shadow-lg rounded-lg">
        {timeLeft.hours}
        <small className="text-xs lg:text-sm uppercase font-semibold text-white">
          Hours
        </small>
      </span>
      <span className="shrink-0 flex flex-col justify-center items-center bg-yellow-500 text-yellow text-5xl w-36 py-3 shadow-lg rounded-lg">
        {timeLeft.minutes}
        <small className="text-xs lg:text-sm uppercase font-semibold text-white">
          Minutes
        </small>
      </span>
      <span className="shrink-0 flex flex-col justify-center items-center bg-yellow-500 text-yellow  text-5xl w-36 py-3 shadow-lg rounded-lg">
        {timeLeft.seconds}
        <small className="text-xs lg:text-sm uppercase font-semibold text-white">
          Seconds
        </small>
      </span>
    </div>
  );
};

export default Timer;
