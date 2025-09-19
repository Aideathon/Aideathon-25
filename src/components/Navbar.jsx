import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function Navbar() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")
  const navigate = useNavigate()

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const navLinks = [
    { name: "About", to: "/#about" },
    { name: "Problem Statements", to: "/problems" },
    { name: "Register", to: "/register" },
    { name: "Contact Us", to: "/contact" },
  ]

  // Smooth scroll for Patron
  const handlePatronClick = (e) => {
    e.preventDefault()
    navigate("/patron") // navigate to patron page
    setTimeout(() => {
      const section = document.getElementById("patron-section")
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }, 300)
  }

  return (
    <motion.header
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "var(--bg)",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <div
        className="container nav-inner"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
        }}
      >
        {/* Left: Brand */}
        <div className="brand" style={{ fontWeight: 700, fontSize: 18 }}>
          Aideathon <span className="accent">2025</span>
        </div>

        {/* Right: Nav + Theme */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <nav style={{ display: "flex", gap: 20, alignItems: "center" }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                style={{
                  position: "relative",
                  padding: "6px 0",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
                className="nav-link"
              >
                {link.name}
                <motion.span
                  className="underline"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    bottom: -3,
                    left: 0,
                    height: 2,
                    background: "var(--accent)",
                  }}
                />
              </Link>
            ))}

            {/* Patron Link with Animation */}
            <a
              href="/patron"
              onClick={handlePatronClick}
              style={{
                cursor: "pointer",
                fontWeight: 500,
                textDecoration: "none",
                position: "relative",
                padding: "6px 0",
              }}
            >
              Patron
              <motion.span
                className="underline"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  bottom: -3,
                  left: 0,
                  height: 2,
                  background: "var(--accent)",
                }}
              />
            </a>
          </nav>

          {/* Right-most: Modern Theme Switch */}
          <label className="switch">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            />
            <span className="slider" />
          </label>
        </div>
      </div>

      {/* CSS for switch */}
      <style>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 22px;
        }
        .switch input { display: none; }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: #ccc;
          transition: 0.3s;
          border-radius: 22px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          border-radius: 50%;
          transition: 0.3s;
        }
        input:checked + .slider {
          background-color: var(--accent);
        }
        input:checked + .slider:before {
          transform: translateX(22px);
        }
      `}</style>
    </motion.header>
  )
}
