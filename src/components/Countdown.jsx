import React, { useEffect, useState } from 'react';

export default function Countdown({ targetDate = '2025-09-29T00:00:00' }) {
  const calc = () => {
    const now = new Date().getTime();
    const t = new Date(targetDate).getTime();
    const diff = Math.max(0, t - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds, done: diff === 0 };
  };

  const [time, setTime] = useState(calc());

  useEffect(() => {
    const iv = setInterval(() => setTime(calc()), 500);
    return () => clearInterval(iv);
  }, [targetDate]);

  const NumberBlock = ({ value, label }) => {
    const [pulse, setPulse] = useState(false);
    useEffect(() => {
      setPulse(true);
      const t = setTimeout(() => setPulse(false), 300);
      return () => clearTimeout(t);
    }, [value]);

    return (
      <div className={`count-item${pulse ? ' pulse' : ''}`}>
        <div className="count-number">{String(value).padStart(2, '0')}</div>
        <div className="count-label">{label}</div>
      </div>
    );
  };

  return (
    <>
      <div className="countdown">
        <NumberBlock value={time.days} label="Days" />
        <NumberBlock value={time.hours} label="Hours" />
        <NumberBlock value={time.minutes} label="Minutes" />
        <NumberBlock value={time.seconds} label="Seconds" />
      </div>

      <style>{`
        .countdown {
          display: flex;
          justify-content: flex-start; /* left align for desktop */
          align-items: center;
          gap: 16px;
          flex-wrap: nowrap;
          padding: 16px;
        }

        .count-item {
          background: var(--bg, #f5f5f5);
          border-radius: 12px;
          padding: 16px 20px;
          text-align: center;
          min-width: 80px;
          max-width: 80px;
          transition: transform 0.3s;
          box-sizing: border-box;
        }

        .count-item.pulse {
          transform: scale(1.1);
        }

        .count-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text, #333);
        }

        .count-label {
          font-size: 0.85rem;
          margin-top: 4px;
          color: var(--text, #666);
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .countdown {
            justify-content: center; /* center on mobile */
            gap: 12px;
            padding: 12px;
          }
          .count-item {
            min-width: 60px;
            max-width: 60px;
            padding: 10px 12px;
          }
          .count-number {
            font-size: 1.5rem;
          }
          .count-label {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </>
  );
}
