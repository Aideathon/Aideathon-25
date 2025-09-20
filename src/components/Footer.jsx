import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-brand">Aideathon 2025</div>
            <div className="footer-desc">
              Final Year AI & Data Science, C. Abdul Hakeem College of Engineering and Technology
            </div>
          </div>
          <div className="footer-right">
            <div>Contact: <strong>mavericsclubai@gmail.com</strong></div>
            <div>Suresh Krishnan - Phone: 6381599207</div>
            <div>Kishor - Phone: 8807426719</div>
          </div>
        </div>
        <div className="footer-bottom">© Aideathon 2025 — All rights reserved</div>
      </div>

      <style>{`
        .footer {
          background: var(--bg, #f9f9f9);
          padding: 24px 16px;
          font-family: sans-serif;
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          flex-wrap: wrap;
        }
        .footer-left {
          flex: 1;
          min-width: 200px;
        }
        .footer-brand {
          font-weight: 800;
          font-size: 1.2rem;
        }
        .footer-desc {
          color: #6b7280;
          margin-top: 6px;
          font-size: 0.9rem;
        }
        .footer-right {
          flex: 1;
          min-width: 200px;
          text-align: right;
          color: #6b7280;
          font-size: 0.9rem;
        }
        .footer-right div {
          margin-top: 6px;
        }
        .footer-bottom {
          text-align: center;
          color: #9ca3af;
          margin-top: 18px;
          font-size: 0.85rem;
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .footer-right {
            text-align: left;
          }
        }
      `}</style>
    </footer>
  );
}
