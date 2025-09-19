import React from "react"
import { motion } from "framer-motion"
import Countdown from "../components/Countdown"
import { Calendar, MapPin, GraduationCap, Sparkles, Award, Users, ClipboardCheck, FileText } from "lucide-react"

export default function Home() {
  // Variants for stagger animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  }

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  }

  // Animated icon wrapper
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
  )

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
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="hero-title">
              Aideathon <span style={{ color: "var(--accent)" }}>2025</span>
            </h1>
            <p className="hero-desc">
              Hosted by <strong>Final Year AI & Data Science</strong>, C. Abdul
              Hakeem College of Engineering and Technology.
            </p>

            <motion.div style={{ marginTop: 12 }}>
              <Countdown />
            </motion.div>

            <motion.div
              className="center-cta"
              style={{ marginTop: 20, display: "flex", gap: 12 }}
            >
              <a href="/register" className="cta-btn">
                <AnimatedIcon><ClipboardCheck size={18} /></AnimatedIcon> Register Team
              </a>
              <a href="/problems" className="btn-classic">
                <AnimatedIcon><FileText size={18} /></AnimatedIcon> Problem Statements
              </a>
            </motion.div>
          </motion.div>

          {/* Right card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="hero-card"
            style={{
              padding: 24,
              borderRadius: 16,
              background: "var(--card)",
              boxShadow: "var(--shadow)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>
                Hackathon Highlights
              </div>
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>
                • Exciting prizes & certificates <br />
                • Internship opportunities <br />
                • Industry networking <br />
                • Learn, build, and innovate
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Full About Section */}
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

        {/* Animated cards */}
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
    </div>
  )
}
