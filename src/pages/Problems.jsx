import React from "react"
import { motion } from "framer-motion"
import { ClipboardList } from "lucide-react"

// Column component
const TableColumn = ({ children, style }) => (
  <td style={{ padding: "12px 15px", textAlign: "center", ...style }}>{children}</td>
)

// Row component
const TableRow = ({ rowData, index }) => {
  // Determine background based on software/hardware and stripe
  let bgColor = rowData.category.toLowerCase().includes("software")
    ? index % 2 === 0
      ? "#e0f2fe" // light blue
      : "#bae6fd" // slightly darker blue
    : index % 2 === 0
    ? "#d1fae5" // light green
    : "#a7f3d0" // slightly darker green

  return (
    <motion.tr
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, backgroundColor: "#fef3c7" }} // hover color
      transition={{ delay: index * 0.05, type: "spring", stiffness: 120 }}
      style={{ borderBottom: "1px solid #ddd", backgroundColor: bgColor, cursor: "pointer" }}
    >
      <TableColumn>{rowData.sno}</TableColumn>
      <TableColumn style={{ textAlign: "left" }}>{rowData.title}</TableColumn>
      <TableColumn>{rowData.category}</TableColumn>
      <TableColumn>{rowData.psno}</TableColumn>
      <TableColumn>{rowData.theme}</TableColumn>
    </motion.tr>
  )
}

export default function Problems() {
  const problemStatements = [
    // Software Projects
    { sno: 1, title: "AI-Powered Student Query Chatbot", category: "Software (AI / NLP)", psno: "PS101", theme: "Student Support" },
    { sno: 2, title: "Research Paper Recommender", category: "Software (AI / Information Retrieval)", psno: "PS102", theme: "Research Support" },
    { sno: 3, title: "College Event Management Portal", category: "Software (Web Development)", psno: "PS103", theme: "Event Management" },
    { sno: 4, title: "Department Knowledge Hub", category: "Software (Web / Cloud Storage)", psno: "PS104", theme: "Knowledge Sharing" },
    { sno: 5, title: "AI Career Guidance System", category: "Software (AI / ML)", psno: "PS105", theme: "Career Guidance" },
    { sno: 6, title: "Automated Project Report Writer", category: "Software (Automation)", psno: "PS106", theme: "Documentation" },
    { sno: 7, title: "Resume Analyzer & Optimizer", category: "Software (AI / NLP)", psno: "PS107", theme: "Career Development" },
    { sno: 8, title: "Department Project Repository", category: "Software (Web Development)", psno: "PS108", theme: "Project Archive" },
    { sno: 9, title: "Student Innovation – Own Idea", category: "Software", psno: "PS109", theme: "Innovation / Open Theme" },

    // Hardware / IoT Projects
    { sno: 10, title: "IoT Temperature and Humidity Reader", category: "Hardware (IoT / Sensors)", psno: "PS201", theme: "Environmental Monitoring" },
    { sno: 11, title: "Automatic Fan Speed Controller", category: "Hardware (IoT / Automation)", psno: "PS202", theme: "Home Automation" },
    { sno: 12, title: "IoT Smart Parking System", category: "Hardware (IoT / Smart City)", psno: "PS203", theme: "Smart City" },
    { sno: 13, title: "Crop Monitoring System", category: "Hardware (IoT / Agriculture)", psno: "PS204", theme: "Agriculture" },
    { sno: 14, title: "Motion / Movement Detection System", category: "Hardware (IoT / Security)", psno: "PS205", theme: "Security / Automation" },
    { sno: 15, title: "IoT Smart Doorbell", category: "Hardware (IoT / Home Automation)", psno: "PS206", theme: "Home Automation" },
    { sno: 16, title: "IoT Gas Alert System", category: "Hardware (IoT / Safety)", psno: "PS207", theme: "Safety" },
    { sno: 17, title: "IoT Smart Switch Control System", category: "Hardware (IoT / Home Automation)", psno: "PS208", theme: "Home Automation" },
    { sno: 18, title: "IoT Rain Detector Sensor", category: "Hardware (IoT / Environmental)", psno: "PS209", theme: "Environmental Monitoring" },
    { sno: 19, title: "IoT Sound Level Monitoring System", category: "Hardware (IoT / Environmental)", psno: "PS210", theme: "Environmental Monitoring" },
  ]

  return (
    <motion.div
      className="problems-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ padding: "40px 20px" }}
    >
      <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 25, gap: "12px", fontSize: 24 }}>
        <ClipboardList size={28} /> Problem Statements
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ overflowX: "auto", borderRadius: "12px" }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          }}
        >
          <thead style={{ backgroundColor: "#4f46e5", color: "#fff" }}>
            <tr>
              <th style={{ padding: "14px 10px" }}>S.No</th>
              <th style={{ padding: "14px 10px" }}>Problem Statement</th>
              <th style={{ padding: "14px 10px" }}>Category</th>
              <th style={{ padding: "14px 10px" }}>PS No</th>
              <th style={{ padding: "14px 10px" }}>Theme</th>
            </tr>
          </thead>
          <tbody>
            {problemStatements.map((ps, index) => (
              <TableRow key={ps.psno} rowData={ps} index={index} />
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  )
}
