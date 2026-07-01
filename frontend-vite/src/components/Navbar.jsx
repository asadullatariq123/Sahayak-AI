import { motion } from "framer-motion";
import { FaAmbulance } from "react-icons/fa";
import { MdOutlineOnlinePrediction } from "react-icons/md";

function Navbar() {
  return (
    <motion.nav
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      style={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(15,23,42,.92)",
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1450px",
          margin: "0 auto",
          padding: "18px 25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <div
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              background: "#2563eb",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
            }}
          >
            <FaAmbulance />
          </div>

          <div>
            <h2>SAHAYAK AI</h2>

            <small
              style={{
                color: "#94a3b8",
              }}
            >
              Disaster Intelligence Platform
            </small>
          </div>
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#22c55e",
            fontWeight: "bold",
          }}
        >
          <MdOutlineOnlinePrediction size={22} />
          System Online
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;