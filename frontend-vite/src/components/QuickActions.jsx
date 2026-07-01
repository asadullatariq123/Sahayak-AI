import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaSyncAlt,
} from "react-icons/fa";

function QuickActions() {
  const actions = [
    {
      icon: <FaExclamationTriangle />,
      text: "Report Emergency",
      color: "#dc2626",
      action: () =>
        window.scrollTo({
          top: 300,
          behavior: "smooth",
        }),
    },
    {
      icon: <FaMapMarkedAlt />,
      text: "Open Google Maps",
      color: "#2563eb",
      action: () =>
        window.open(
          "https://maps.google.com",
          "_blank"
        ),
    },
    {
      icon: <FaPhoneAlt />,
      text: "Call Ambulance (108)",
      color: "#16a34a",
      action: () => (window.location.href = "tel:108"),
    },
    {
      icon: <FaSyncAlt />,
      text: "Refresh Dashboard",
      color: "#9333ea",
      action: () => window.location.reload(),
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gap: "15px",
      }}
    >
      {actions.map((item, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={item.action}
          style={{
            background: item.color,
            color: "white",
            border: "none",
            padding: "15px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            fontSize: "16px",
          }}
        >
          {item.icon}
          {item.text}
        </motion.button>
      ))}
    </div>
  );
}

export default QuickActions;