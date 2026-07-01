import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaShieldAlt,
} from "react-icons/fa";

function RiskCard({ response }) {
  if (!response?.risk) {
    return <p>No risk assessment available.</p>;
  }

  const risk = response.risk;

  const colors = {
    LOW: "#22c55e",
    MODERATE: "#eab308",
    HIGH: "#f97316",
    CRITICAL: "#dc2626",
  };

  const color =
    colors[(risk.level || "").toUpperCase()] ||
    "#22c55e";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        style={{
          background: "#1e293b",
          borderRadius: "18px",
          padding: "25px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            margin: "0 auto 20px",
            borderRadius: "50%",
            background: color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "34px",
          }}
        >
          <FaExclamationTriangle />
        </div>

        <h2>Risk Level</h2>

        <h1 style={{ color }}>
          {risk.level || "UNKNOWN"}
        </h1>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        style={{
          background: "#1e293b",
          borderRadius: "18px",
          padding: "20px",
        }}
      >
        <h3>
          <FaShieldAlt color="#3b82f6" /> AI Recommendation
        </h3>

        <p>
          {risk.message ||
            "Follow emergency guidelines and remain safe."}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default RiskCard;