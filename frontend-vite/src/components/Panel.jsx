import { motion } from "framer-motion";

function Panel({ title, children }) {
  return (
    <motion.div
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
        duration: 0.5,
      }}
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      style={{
        background: "rgba(15,23,42,0.85)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        height: "100%",
      }}
    >
      <h2
        style={{
          color: "#60a5fa",
          marginBottom: "18px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          paddingBottom: "10px",
          fontSize: "22px",
        }}
      >
        {title}
      </h2>

      {children}
    </motion.div>
  );
}

export default Panel;