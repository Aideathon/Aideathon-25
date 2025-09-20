import React, { useState } from "react"
import { motion } from "framer-motion"
import Card from "../components/Card"
import API from "../services/api"
import { Mail, AlertTriangle, XCircle, Send, Building2, Users, MapPin } from "lucide-react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [err, setErr] = useState(null)

  async function submit(e) {
    e.preventDefault()
    setErr(null)

    if (!name || !email || !subject || !message) {
      setErr(
        <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#b91c1c" }}>
          <AlertTriangle size={18} /> All fields required
        </span>
      )
      return
    }

    try {
      await API.post("/contacts/", { name, email, subject, message })
      alert("Message sent successfully ✅")
      setName(""); setEmail(""); setSubject(""); setMessage("")
    } catch (err) {
      console.error(err)
      setErr(
        <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#b91c1c" }}>
          <XCircle size={18} /> Failed to send message. Please try again later.
        </span>
      )
    }
  }

  return (
    <motion.div
      style={{ padding: "40px 16px" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 32, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <Mail size={24} /> Contact Organizers
      </h2>

      <div className="contact-grid">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <form onSubmit={submit} style={{ display: "grid", gap: 16 }}>
              <input className="input" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="input" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="input" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
              <textarea className="input" placeholder="Write your message..." value={message} onChange={(e) => setMessage(e.target.value)} rows={6} />
              {err && <div style={{ fontSize: 14 }}>{err}</div>}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-btn"
                type="submit"
                style={{ alignSelf: "end", display: "flex", alignItems: "center", gap: 6 }}
              >
                <Send size={18} /> Send Message
              </motion.button>
            </form>
          </Card>
        </motion.div>

        {/* Organizer Info */}
        <motion.div
          className="contact-card"
          style={{
            background: "var(--card)",
            borderRadius: 12,
            padding: 20,
            boxShadow: "var(--shadow)",
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 style={{ display: "flex", alignItems: "center", gap: 6 }}><Building2 size={20} /> Department Details</h3>
          <p className="small">AI & Data Science Department <br /> C. Abdul Hakeem College of Engineering and Technology</p>

          <h4 style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 6 }}><Users size={20} /> Organizer Contacts</h4>
          <p><strong>Faculty Incharge:</strong> Mrs.Olga Rajee - 9952380056 - olgarajee@gmail.com</p>
          <p><strong>Student Incharge:</strong> Suresh Krishnan — 6381599207 — suresh@gmail.com</p>
          <p><strong>Student Incharge:</strong> Kishor — 8807426719 — kishor@gmail.com</p>

          <h4 style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 6 }}><MapPin size={20} /> Office</h4>
          <p>C. Abdul Hakeem College of Engineering and Technology <br /> Melvisharam, Vellore District</p>
        </motion.div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        /* Mobile view */
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-card {
            margin-top: 16px;
          }
        }
        .input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 0.95rem;
          outline: none;
          transition: border 0.2s;
        }
        .input:focus {
          border-color: var(--accent, #4f46e5);
        }
      `}</style>
    </motion.div>
  )
}
