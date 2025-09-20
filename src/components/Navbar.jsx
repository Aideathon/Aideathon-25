import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = [
    { name: "About", to: "/#about" },
    { name: "Problem Statements", to: "/problems" },
    { name: "Register", to: "/register" },
    { name: "Contact Us", to: "/contact" },
  ];

  const handlePatronClick = (e) => {
    e.preventDefault();
    navigate("/patron");
    setTimeout(() => {
      const section = document.getElementById("patron-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <motion.header
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
        {/* Logo */}
        <div className="brand" style={{ fontWeight: 700, fontSize: 18 }}>
          Aideathon <span className="accent">2025</span>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: 24 }}>
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

            {/* Patron */}
            <a
              href="/patron"
              onClick={handlePatronClick}
              style={{
                position: "relative",
                padding: "6px 0",
                fontWeight: 500,
                textDecoration: "none",
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

          {/* Theme Switch */}
          <label className="switch">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            />
            <span className="slider" />
          </label>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu"
          onClick={() => setDrawerOpen(true)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
          }}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(4px)",
                zIndex: 1500,
              }}
              onClick={() => setDrawerOpen(false)}
            />

            <motion.div
              className="drawer"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                height: "100%",
                width: "80%",
                maxWidth: 320,
                background: "var(--bg)",
                borderRadius: "16px 0 0 16px",
                boxShadow: "-2px 4px 24px rgba(0,0,0,0.25)",
                padding: "24px",
                zIndex: 2000,
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
              }}
            >
              <button
                onClick={() => setDrawerOpen(false)}
                style={{
                  alignSelf: "flex-end",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <X size={28} />
              </button>

              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 10 }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setDrawerOpen(false)}
                    style={{
                      position: "relative",
                      padding: "12px 16px",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    {link.name}
                    <motion.span
                      className="underline"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: 2,
                        background: "var(--accent)",
                      }}
                    />
                  </Link>
                ))}

                {/* Patron in drawer like other links */}
                <a
                  href="/patron"
                  onClick={() => { handlePatronClick(); setDrawerOpen(false); }}
                  style={{
                    position: "relative",
                    padding: "12px 16px",
                    fontWeight: 500,
                    textDecoration: "none",
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
                      bottom: 0,
                      left: 0,
                      height: 2,
                      background: "var(--accent)",
                    }}
                  />
                </a>

                {/* Theme Switch inside drawer */}
                <label className="switch" style={{ marginTop: 24 }}>
                  <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                  />
                  <span className="slider" />
                </label>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CSS */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu { display: block !important; }
        }

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

        [data-theme="dark"] {
          --bg: #1f1f1f;
          --accent: #4f46e5;
        }
      `}</style>
    </motion.header>
  );
}
