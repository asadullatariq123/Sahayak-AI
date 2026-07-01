import { motion } from "framer-motion";
import { FaShieldAlt, FaRobot, FaMapMarkedAlt } from "react-icons/fa";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
      }}
      style={{
        width: "95%",
        maxWidth: "1450px",
        margin: "30px auto",
        background:
          "linear-gradient(135deg,#1e3a8a,#1d4ed8,#2563eb)",
        borderRadius: "25px",
        padding: "50px",
        color: "white",
        boxShadow: "0 20px 45px rgba(37,99,235,.35)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
          alignItems: "center",
        }}
      >
        {/* Left */}

        <div style={{ flex: 1 }}>
          <motion.h1
            initial={{ x: -80 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: "52px",
              marginBottom: "15px",
            }}
          >
            🚑 SAHAYAK AI
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
            }}
            style={{
              color: "#bfdbfe",
              marginBottom: "20px",
            }}
          >
            AI Powered Disaster Intelligence Platform
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.9,
            }}
            style={{
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            Protecting lives using Artificial Intelligence,
            Live GPS, Weather Intelligence, Hospital
            Navigation and Emergency Response.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            style={{
              marginTop: "35px",
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "15px 28px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            🚨 Report Emergency
          </motion.button>
        </div>

        {/* Right */}

        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,170px)",
            gap: "20px",
          }}
        >
          {[
            {
              icon: <FaRobot size={38} />,
              text: "AI Agents",
            },
            {
              icon: <FaShieldAlt size={38} />,
              text: "Emergency",
            },
            {
              icon: <FaMapMarkedAlt size={38} />,
              text: "GPS Tracking",
            },
            {
              icon: "24×7",
              text: "Monitoring",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                rotate: 1,
              }}
              style={{
                background:
                  "rgba(255,255,255,.15)",
                padding: "25px",
                borderRadius: "18px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "30px",
                  marginBottom: "12px",
                }}
              >
                {card.icon}
              </div>

              <h3>{card.text}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;