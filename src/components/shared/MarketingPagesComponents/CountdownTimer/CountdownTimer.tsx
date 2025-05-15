import { useState, useEffect } from "react";

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export default function CountdownTimer({
  initialHours = 1,
  initialMinutes = 0,
  initialSeconds = 0,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  const resetTimer = () => {
    setTimeLeft({
      hours: 1,
      minutes: 0,
      seconds: 0,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          // Reset timer to 1 hour when it reaches zero
          return {
            hours: 1,
            minutes: 0,
            seconds: 0,
          };
        }

        let newSeconds = seconds;
        let newMinutes = minutes;
        let newHours = hours;

        if (seconds === 0) {
          if (minutes === 0) {
            if (hours > 0) {
              newHours = hours - 1;
              newMinutes = 59;
              newSeconds = 59;
            }
          } else {
            newMinutes = minutes - 1;
            newSeconds = 59;
          }
        } else {
          newSeconds = seconds - 1;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <span className="bg-primaryFontColor text-white text-sm px-2 py-1 rounded ml-2 font-bricolage">
      {formatNumber(timeLeft.hours)}H : {formatNumber(timeLeft.minutes)}M :{" "}
      {formatNumber(timeLeft.seconds)}S
    </span>
  );
}
