import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, QrCode } from "lucide-react";
import QRCode from "react-qr-code";

// Animated Icon Wrapper (same as Home.js)
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

export default function Register() {
  const formLink = "https://forms.gle/5ArhwSQKKC31JWB69";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-10 text-center w-full max-w-md"
      >
        <div className="flex justify-center mb-6">
          <QrCode size={48} className="text-indigo-600" />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Hackathon Registration
        </h2>
        <p className="text-gray-600 mb-6">
          Scan the QR code or click the button below to register your team.
        </p>

        {/* QR Code */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <QRCode value={formLink} size={160} />
        </motion.div>

        {/* Register Button styled like Home.js */}
        <motion.a
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn inline-flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatedIcon><ClipboardCheck size={18} /></AnimatedIcon>
          Register Team
        </motion.a>
      </motion.div>
    </div>
  );
}
