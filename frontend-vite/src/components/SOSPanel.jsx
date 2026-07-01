import {
  FaAmbulance,
  FaFireExtinguisher,
  FaHospital,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";

function SOSPanel() {
  const cardStyle = {
    background: "#1e293b",
    padding: "18px",
    borderRadius: "15px",
    textAlign: "center",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <div>
      <h2
        style={{
          color: "#ef4444",
          marginBottom: "20px",
        }}
      >
        🆘 Emergency SOS
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <FaAmbulance size={40} color="#ef4444" />
          <h3>Ambulance</h3>
          <p>108</p>
        </div>

        <div style={cardStyle}>
          <FaShieldAlt size={40} color="#2563eb" />
          <h3>Police</h3>
          <p>112</p>
        </div>

        <div style={cardStyle}>
          <FaFireExtinguisher size={40} color="#f97316" />
          <h3>Fire</h3>
          <p>101</p>
        </div>

        <div style={cardStyle}>
          <FaHospital size={40} color="#16a34a" />
          <h3>Hospital</h3>
          <p>Nearest Hospital</p>
        </div>

        <div style={cardStyle}>
          <FaMapMarkerAlt size={40} color="#22c55e" />
          <h3>Location</h3>
          <p>Share GPS</p>
        </div>

        <div style={cardStyle}>
          <FaPhoneAlt size={40} color="#a855f7" />
          <h3>Emergency</h3>
          <p>112</p>
        </div>
      </div>
    </div>
  );
}

export default SOSPanel;