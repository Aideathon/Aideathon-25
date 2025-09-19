import React, { useState } from "react"
import { motion } from "framer-motion"

export default function Patron() {
  const patrons = [
    { role: "Chairman", name: "DR.S.ZIAUDDEEN AHMED", detail: "Founder & Chairman" },
    { role: "Correspondent", name: "JANAB.V.MD.RIZWANULLAM", detail: "Correspondent" },
    { role: "Principal", name: "DR.M.SASIKUMAR", detail: "Principal" },
    { role: "Vice Principal", name: "DR.MD.MUZAFFAR HUSSAIN", detail: "Vice Principal" },
    { role: "HOD", name: "MR.T.S.KARTICK", detail: "HOD, AI & DS" },
    { role: "Staff Coordinator", name: "Mrs.Olga Rajee", detail: "Staff Coordinator" },
  ]

  const coordinators = [
    
    { role: "Student Coordinator", name: "SURESH KRISHAN", detail: "Student Coordinator - Contact" },
    { role: "Student Coordinator", name: "KISHOR", detail: "Student Coordinator - Web & Registration" },
  ]

  const studentCoordinators = [
    "ABDUL RAHIM J","AFREEN FATHIMA S","CHARUKESH B","DHANUSH B","JAYANT TN","KEERTHIKA P",
    "KISHOR A","K R HARINI","KRISHNA M","LINGESWARAN B","MADEEHA ARSHEEN J","MOHAMMAD SAIF G",
    "MOHAMMED AAMIR IQBAL PA","MOHAMMED SHAHID S","MUKESH D","PATHMANABAN M","RUQYYA NAZEENE N",
    "SAMREEN HUMERA R","SANDHIYA M","SHARMILAA K","SURESH KRISHNAN S","SYED MUSTHAK ALI J",
    "SYED NAVEETH SN","UDHAYA KUMAR S","VENKATESH S","YUVASHREE M"
  ]

  const [activeTab, setActiveTab] = useState("Patrons")

  const renderCards = (data, isStudentList = false) => {
    return (
      <div className="patron-grid">
        {isStudentList
          ? data.map((name, i) => (
              <motion.div
                key={i}
                className="person-card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                }}
                style={{
                  background: "var(--card)",
                  borderRadius: 12,
                  padding: 14,
                  textAlign: "center",
                }}
              >
                <p style={{ fontWeight: 600 }}>{name}</p>
              </motion.div>
            ))
          : data.map((person, i) => (
              <motion.div
                key={i}
                className="person-card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                }}
                style={{
                  background: "var(--card)",
                  borderRadius: 16,
                  padding: 18,
                  textAlign: "center",
                }}
              >
                <h3 style={{ color: "var(--accent)", marginBottom: 6 }}>
                  {person.role}
                </h3>
                <p style={{ fontWeight: 700, fontSize: 16 }}>{person.name}</p>
                <p className="small">{person.detail}</p>
              </motion.div>
            ))}
      </div>
    )
  }

  return (
    <div style={{ paddingTop: 18 }}>
      <div className="section container">
        <h2>Patrons & Coordinators</h2>
        <p className="small" style={{ marginBottom: 24 }}>
          Select a category below to view details.
        </p>

        {/* Tabs */}
        <div className="tab-buttons" style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          {["Patrons", "Coordinators", "Student Coordinators"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: activeTab === tab ? "var(--accent)" : "var(--muted-bg)",
                color: activeTab === tab ? "#fff" : "var(--text)",
                fontWeight: 600,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Render Section */}
        {activeTab === "Patrons" && renderCards(patrons)}
        {activeTab === "Coordinators" && renderCards(coordinators)}
        {activeTab === "Student Coordinators" && renderCards(studentCoordinators, true)}
      </div>
    </div>
  )
}
