import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function CountdownTimer() {
  const targetDate = new Date('2026-11-14T09:30:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds }
  ];

  return (
    <div className="inline-flex items-center space-x-2 sm:space-x-4 bg-[#111118]/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 shadow-glass">
      <div className="flex items-center space-x-1.5 text-tedx-red pr-2 border-r border-white/10">
        <Clock className="w-4 h-4 animate-pulse" />
        <span className="text-[11px] font-bold uppercase tracking-wider hidden sm:inline">Event Starts In</span>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-3">
        {units.map((unit, idx) => (
          <div key={idx} className="flex items-baseline space-x-1">
            <span className="font-mono text-base sm:text-lg font-black text-white tracking-tight">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] text-tedx-muted uppercase font-medium">
              {unit.label}
            </span>
            {idx < units.length - 1 && (
              <span className="text-tedx-red/50 text-xs font-mono ml-1">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
