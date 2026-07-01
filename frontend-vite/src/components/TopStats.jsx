import { motion } from "framer-motion";
import {
  FaRobot,
  FaHospital,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

function TopStats() {
  const stats = [
    {
      title: "AI Agents",
      value: "5",
      icon: <FaRobot />,
      color: "#8b5cf6",
    },
    {
      title: "Active Incidents",
      value: "1",
      icon: <FaExclamationTriangle />,
      color: "#ef4444",
    },
    {
      title: "Hospitals",
      value: "24+",
      icon: <FaHospital />,
      color: "#2563eb",
    },
    {
      title: "System Status",
      value: "ONLINE",
      icon: <FaCheckCircle />,
      color: "#22c55e",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.15,
            duration: 0.5,
          }}
          whileHover={{
            scale: 1.05,
            rotate: 1,
          }}
          style={{
            background: "rgba(15,23,42,.85)",
            borderRadius: "20px",
            padding: "25px",
            border: "1px solid rgba(255,255,255,.08)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 25px rgba(0,0,0,.3)",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: item.color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "28px",
              marginBottom: "18px",
            }}
          >
            {item.icon}
          </div>

          <h4
            style={{
              color: "#94a3b8",
            }}
          >
            {item.title}
          </h4>

          <h2
            style={{
              color: "white",
              marginTop: "10px",
            }}
          >
            {item.value}
          </h2>
        </motion.div>
      ))}
    </div>
  );
}

export default TopStats;