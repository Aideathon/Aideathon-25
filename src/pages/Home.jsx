import React from "react";
import { motion } from "framer-motion";
import Countdown from "../components/Countdown";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Sparkles,
  Award,
  ClipboardCheck,
  FileText,
} from "lucide-react";

export default function Home() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  const AnimatedIcon = ({ children }) => (
    <motion.div
      initial={{ scale: 0, rotate: -45, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      whileHover={{ scale: 1.2, rotate: 5 }}
      style={{ display: "inline-flex", alignItems: "center" }}
    >
      {children}
    </motion.div>
  );

  return (
    <div style={{ paddingTop: 18 }}>
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container hero-grid">
          {/* Left content */}
          <motion.div className="hero-left">
            <h1 className="hero-title">
              Aideathon <span style={{ color: "var(--accent)" }}>2025</span>
            </h1>
            <p className="hero-desc">
              Hosted by <strong>Final Year AI & Data Science</strong>, C. Abdul
              Hakeem College of Engineering and Technology.
            </p>

            <div className="hero-countdown">
              <Countdown />
            </div>

            <div className="center-cta">
              <a href="/register" className="cta-btn">
                <AnimatedIcon><ClipboardCheck size={18} /></AnimatedIcon> Register Team
              </a>
              <a href="/problems" className="btn-classic">
                <AnimatedIcon><FileText size={18} /></AnimatedIcon> Problem Statements
              </a>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            className="hero-card"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>
                Hackathon Highlights
              </div>
              <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.6 }}>
                • Exciting prizes & certificates <br />
                • Internship opportunities <br />
                • Industry networking <br />
                • Learn, build, and innovate
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="section container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ marginTop: 60 }}
      >
        <h2>
          About <span className="accent">Aideathon ’25</span>
        </h2>
        <p>
          Aideathon ’25 is a hackathon hosted by{" "}
          <strong>C. Abdul Hakeem College of Engineering & Technology</strong>,
          and organized by the Final Year AI & Data Science students.
          <br />
          The event is open to all departments, encouraging students from diverse
          domains to collaborate, innovate, and solve real-world problems through
          technology.
        </p>

        <div className="about-cards">
          {[
            { icon: <Calendar size={18} />, title: "Date", text: "26 October 2025" },
            { icon: <MapPin size={18} />, title: "Venue", text: "C. Abdul Hakeem College of Engineering & Technology" },
            { icon: <GraduationCap size={18} />, title: "Organized By", text: "Final Year AI & Data Science Department Students" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.15)" }}
            >
              <h4 style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <AnimatedIcon>{item.icon}</AnimatedIcon> {item.title}
              </h4>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        <h3><AnimatedIcon><Sparkles size={18} /></AnimatedIcon> Why Participate?</h3>
        <ul className="checklist">
          {[
            "Solve real-world challenges with creativity.",
            "Compete for exciting prizes, certificates & internships.",
            "Network with peers, mentors & industry professionals.",
            "Showcase your skills, teamwork & innovation.",
          ].map((point, i) => (
            <motion.li
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={listVariants}
            >
              {point}
            </motion.li>
          ))}
        </ul>

        <h3><AnimatedIcon><GraduationCap size={18} /></AnimatedIcon> Eligibility</h3>
        <p>Open for all departments & all years (team size: 2–4).</p>
        <p>Beginners & experienced coders are equally welcome.</p>

        <h3><AnimatedIcon><Award size={18} /></AnimatedIcon> What Awaits You</h3>
        <p>
          This is not just a hackathon – it’s a celebration of innovation across
          disciplines. From <strong>AI</strong> to <strong>Mechanical</strong>,
          from <strong>IT</strong> to <strong>ECE</strong>, every idea has a
          chance to shine.
          <br />
          Organized with passion by the Final Year AI & Data Science students,
          Aideathon is your chance to learn, build, and make an impact!
        </p>
      </motion.section>

      {/* Desktop-focused styles */}
      <style>{`
        .hero-grid {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }
        .hero-left {
          flex: 1;
          min-width: 300px;
        }
        .hero-card {
          flex: 1;
          min-width: 280px;
          padding: 32px;
          background: var(--card);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
        }
        .hero-desc {
          font-size: 1.2rem;
          margin-top: 8px;
        }
        .hero-countdown {
          margin-top: 20px;
        }
        .center-cta {
          margin-top: 24px;
          display: flex;
          gap: 16px;
        }
        .center-cta a {
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 600;
        }
        .about-cards {
          display: flex;
          gap: 20px;
          margin-top: 24px;
        }
        .about-cards .card {
          flex: 1 1 200px;
          padding: 20px;
          border-radius: 16px;
          background: var(--card);
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .hero-grid {
            flex-direction: column;
          }
          .hero-card {
            margin-top: 20px;
            padding: 24px;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-desc {
            font-size: 1rem;
          }
          .center-cta {
            flex-direction: column;
            gap: 12px;
          }
          .about-cards {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
