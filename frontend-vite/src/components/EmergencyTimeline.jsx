import { motion } from "framer-motion";
import {
  FaBell,
  FaRobot,
  FaHospital,
  FaCloudSun,
  FaCheckCircle,
} from "react-icons/fa";

function EmergencyTimeline({ response }) {
  if (!response) {
    return (
      <p style={{ color: "#94a3b8" }}>
        Submit an emergency to view the timeline.
      </p>
    );
  }

  const timeline = [
    {
      icon: <FaBell />,
      title: "Emergency Received",
      color: "#ef4444",
    },
    {
      icon: <FaRobot />,
      title: "AI Analysis Completed",
      color: "#8b5cf6",
    },
    {
      icon: <FaHospital />,
      title: "Hospitals Located",
      color: "#2563eb",
    },
    {
      icon: <FaCloudSun />,
      title: "Weather Retrieved",
      color: "#f59e0b",
    },
    {
      icon: <FaCheckCircle />,
      title: "Response Ready",
      color: "#22c55e",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {timeline.map((step, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.15,
          }}
          whileHover={{
            scale: 1.02,
          }}
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              background: step.color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "22px",
            }}
          >
            {step.icon}
          </div>

          <div
            style={{
              flex: 1,
              background: "#1e293b",
              borderRadius: "15px",
              padding: "15px",
            }}
          >
            <h3>{step.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default EmergencyTimeline;