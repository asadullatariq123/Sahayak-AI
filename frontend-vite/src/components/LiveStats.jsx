import { motion } from "framer-motion";
import {
  FaHospital,
  FaMapMarkerAlt,
  FaCloudSun,
  FaExclamationTriangle,
  FaRobot,
  FaHeartbeat,
} from "react-icons/fa";

function LiveStats({ response }) {
  if (!response) return null;

  const stats = [
    {
      title: "Emergency",
      value: response.location || "Unknown",
      icon: <FaMapMarkerAlt />,
      color: "#ef4444",
    },
    {
      title: "Hospitals",
      value: response.hospitals?.length || 0,
      icon: <FaHospital />,
      color: "#2563eb",
    },
    {
      title: "Temperature",
      value:
        response.weather?.temperature !== undefined
          ? `${response.weather.temperature} °C`
          : "N/A",
      icon: <FaCloudSun />,
      color: "#f59e0b",
    },
    {
      title: "Risk Level",
      value: response.risk?.level || "Unknown",
      icon: <FaExclamationTriangle />,
      color: "#dc2626",
    },
    {
      title: "AI Agents",
      value: response.planning_agent?.tasks?.length || 0,
      icon: <FaRobot />,
      color: "#8b5cf6",
    },
    {
      title: "System",
      value: "Healthy",
      icon: <FaHeartbeat />,
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
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
          }}
          whileHover={{
            scale: 1.05,
            y: -8,
          }}
          style={{
            background: "rgba(15,23,42,.85)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: "20px",
            padding: "22px",
            boxShadow: "0 10px 25px rgba(0,0,0,.3)",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: stat.color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "28px",
              marginBottom: "18px",
            }}
          >
            {stat.icon}
          </div>

          <h4
            style={{
              color: "#94a3b8",
              marginBottom: "10px",
            }}
          >
            {stat.title}
          </h4>

          <h2
            style={{
              color: "white",
              fontSize: "28px",
            }}
          >
            {stat.value}
          </h2>
        </motion.div>
      ))}
    </div>
  );
}

export default LiveStats;