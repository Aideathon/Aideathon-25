import React from 'react';

export default function Card({ children }) {
  return (
    <div className="card">
      {children}
      <style>{`
        .card {
          background: var(--card, #fff);
          padding: 16px;
          border-radius: 12px;
          box-shadow: var(--shadow, 0 4px 12px rgba(0,0,0,0.08));
          border: 1px solid rgba(0,0,0,0.05);
          max-width: 400px;
          margin: 12px auto;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }

        /* Mobile view */
        @media (max-width: 768px) {
          .card {
            width: 90%;
            padding: 14px;
            margin: 12px auto;
          }
        }
      `}</style>
    </div>
  );
}
