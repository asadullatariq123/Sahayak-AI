import { motion } from "framer-motion";
import {
  FaHospital,
  FaDirections,
  FaMapMarkerAlt,
} from "react-icons/fa";

function NearbyServices({ response }) {
  if (!response) {
    return (
      <p style={{ color: "#94a3b8" }}>
        Submit an emergency to view nearby hospitals.
      </p>
    );
  }

  const hospitals = response.hospitals || [];

  if (hospitals.length === 0) {
    return (
      <p style={{ color: "#94a3b8" }}>
        No nearby hospitals found.
      </p>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {hospitals.map((hospital, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          whileHover={{
            scale: 1.02,
            y: -5,
          }}
          style={{
            background: "#1e293b",
            borderRadius: "18px",
            padding: "20px",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#2563eb",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "28px",
              }}
            >
              <FaHospital />
            </div>

            <div>
              <h3>{hospital.name}</h3>

              <p style={{ color: "#94a3b8" }}>
                <FaMapMarkerAlt />{" "}
                {hospital.latitude.toFixed(4)},{" "}
                {hospital.longitude.toFixed(4)}
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={() =>
              window.open(
                `https://www.google.com/maps/dir/?api=1&destination=${hospital.latitude},${hospital.longitude}`,
                "_blank"
              )
            }
            style={{
              width: "100%",
              padding: "12px",
              background: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            <FaDirections /> Navigate with Google Maps
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}

export default NearbyServices;