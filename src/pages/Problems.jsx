import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const problemStatements = [
  { id: 1, title: "AI-Powered Student Query Chatbot", category: "Software", theme: "Student Support", description: "Develop an intelligent chatbot to assist students in real-time query resolution using AI/NLP techniques. The bot should provide answers, recommend resources, and escalate complex issues to faculty.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 2, title: "Research Paper Recommender System", category: "Software", theme: "Research Support", description: "Create a system that recommends research papers based on students' interests and previous reads using AI/Information Retrieval methods. Supports academic growth and project research.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 3, title: "IoT Temperature and Humidity Reader", category: "Hardware", theme: "Environmental Monitoring", description: "Build an IoT-enabled sensor device to continuously monitor temperature and humidity in classrooms or labs. Data is sent to a dashboard for analysis and alerts for abnormal conditions.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 4, title: "Automatic Fan Speed Controller", category: "Hardware", theme: "Home Automation", description: "Design a hardware controller for ceiling or table fans that adjusts speed automatically based on room temperature, using microcontrollers and IoT sensors.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 5, title: "College Event Management Portal", category: "Software", theme: "Event Management", description: "Develop a web portal to manage college events, including registrations, schedules, notifications, and attendance. Admin dashboard should allow tracking of participants and event analytics.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 6, title: "Department Knowledge Hub", category: "Software", theme: "Knowledge Sharing", description: "Create a central hub where students and faculty can upload, share, and search documents, tutorials, and project references securely in the cloud.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 7, title: "IoT Smart Parking System", category: "Hardware", theme: "Smart City", description: "Design an IoT-enabled parking management system for campus or public areas. Includes sensors to detect available spaces and provide real-time updates to a mobile app.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 8, title: "Crop Monitoring System", category: "Hardware", theme: "Agriculture", description: "Build an IoT solution to monitor soil moisture, temperature, and crop health. Alerts farmers with recommended actions for optimized growth and yield.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 9, title: "AI Career Guidance System", category: "Software", theme: "Career Guidance", description: "Create an AI-based system to guide students in choosing courses, skills, and projects based on aptitude, interests, and market trends.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 10, title: "Automated Project Report Writer", category: "Software", theme: "Documentation", description: "Develop a software tool that generates structured project reports from student inputs and project logs, reducing manual work.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 11, title: "Motion / Movement Detection System", category: "Hardware", theme: "Security / Automation", description: "Design a hardware solution to detect unauthorized movement in labs or classrooms using motion sensors, sending alerts to a mobile dashboard.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 12, title: "IoT Smart Doorbell", category: "Hardware", theme: "Home Automation", description: "Create a smart doorbell system that alerts users via an app, records visitor video, and integrates with IoT security devices.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 13, title: "Resume Analyzer & Optimizer", category: "Software", theme: "Career Development", description: "Develop a software that analyzes resumes, suggests improvements, and optimizes content for job applications and internships using NLP.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 14, title: "Department Project Repository", category: "Software", theme: "Project Archive", description: "Build a repository for storing past projects, source codes, and documentation with search and download options for students.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 15, title: "IoT Gas Alert System", category: "Hardware", theme: "Safety", description: "Develop an IoT device to detect hazardous gas leaks in labs or kitchens and send immediate alerts to mobile devices.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 16, title: "IoT Smart Switch Control System", category: "Hardware", theme: "Home Automation", description: "Build a hardware/software solution to remotely control switches, lights, and appliances via an app, enabling smart home automation.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 17, title: "IoT Rain Detector Sensor", category: "Hardware", theme: "Environmental Monitoring", description: "Create an IoT sensor system to detect rainfall and trigger notifications for irrigation, water harvesting, or alerts.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 18, title: "College Feedback Analytics", category: "Software", theme: "Analytics", description: "Develop a system that collects and analyzes feedback from students and faculty, providing insights for quality improvement.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 19, title: "IoT Sound Level Monitoring System", category: "Hardware", theme: "Environmental Monitoring", description: "Design an IoT system to measure sound levels in classrooms or labs and send alerts when decibel limits are exceeded.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
  { id: 20, title: "Student Innovation – Own Idea", category: "Software", theme: "Innovation / Open Theme", description: "Allow students to submit innovative project ideas of their choice, providing mentorship and guidance throughout the development process.", organization: "Final Year AI & DS – CAHCET", department: "AI & DS (AODS)" },
];

export default function Problems() {
  const [expanded, setExpanded] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = (id) => setExpanded(expanded === id ? null : id);

  if (isMobile) {
    // Mobile stacked card view
    return (
      <div style={{ padding: 16 }}>
        <h2 style={{ textAlign: "center", marginBottom: 24 }}>Problem Statements</h2>
        {problemStatements.map((ps) => (
          <motion.div
            key={ps.id}
            style={{ marginBottom: 16, borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", background: "#fff", overflow: "hidden" }}
          >
            <div
              onClick={() => toggleExpand(ps.id)}
              style={{ padding: 16, display: "flex", justifyContent: "space-between", cursor: "pointer", alignItems: "center" }}
            >
              <div>
                <strong>{ps.id}. {ps.title}</strong>
                <div style={{ fontSize: 14, color: "#555" }}>{ps.category} — {ps.theme}</div>
              </div>
              <div style={{ fontWeight: 700 }}>{expanded === ps.id ? "-" : "+"}</div>
            </div>
            <AnimatePresence>
              {expanded === ps.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ padding: 16, background: "#f3f4f6", display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <div><strong>Organization:</strong> {ps.organization}</div>
                  <div><strong>Department:</strong> {ps.department}</div>
                  <div><strong>Description:</strong> {ps.description}</div>
                  <button
                    style={{
                      marginTop: 12,
                      padding: "10px 18px",
                      backgroundColor: "#4f46e5",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      cursor: "pointer",
                      width: "fit-content",
                    }}
                  >
                    Register
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    );
  }

  // Desktop table view
  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Problem Statements</h2>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", borderRadius: 12 }}>
          <thead style={{ backgroundColor: "#4f46e5", color: "#fff" }}>
            <tr>
              <th style={{ padding: "12px" }}>S.No</th>
              <th style={{ padding: "12px" }}>Title</th>
              <th style={{ padding: "12px" }}>Category</th>
              <th style={{ padding: "12px" }}>Theme</th>
            </tr>
          </thead>
          <tbody>
            {problemStatements.map((ps, index) => (
              <React.Fragment key={ps.id}>
                <tr
                  onClick={() => toggleExpand(ps.id)}
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      ps.category === "Software"
                        ? index % 2 === 0 ? "#e0f2fe" : "#bae6fd"
                        : index % 2 === 0 ? "#d1fae5" : "#a7f3d0",
                  }}
                >
                  <td style={{ padding: "12px", textAlign: "center" }}>{ps.id}</td>
                  <td style={{ padding: "12px" }}>{ps.title}</td>
                  <td style={{ padding: "12px", textAlign: "center" }}>{ps.category}</td>
                  <td style={{ padding: "12px", textAlign: "center" }}>{ps.theme}</td>
                </tr>
                <AnimatePresence>
                  {expanded === ps.id && (
                    <motion.tr
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      style={{ backgroundColor: "#f3f4f6" }}
                    >
                      <td colSpan={4} style={{ padding: 16 }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                          <div><strong>Organization:</strong> {ps.organization}</div>
                          <div><strong>Department:</strong> {ps.department}</div>
                          <div><strong>Description:</strong> {ps.description}</div>
                          <button
                            style={{
                              marginTop: 12,
                              padding: "10px 18px",
                              backgroundColor: "#4f46e5",
                              color: "#fff",
                              border: "none",
                              borderRadius: 8,
                              cursor: "pointer",
                              width: "fit-content",
                            }}
                          >
                            Register
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
