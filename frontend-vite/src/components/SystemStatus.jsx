import {
  FaRobot,
  FaCloudSun,
  FaMapMarkedAlt,
} from "react-icons/fa";

import {
  MdGpsFixed,
  MdHealthAndSafety,
} from "react-icons/md";

function SystemStatus() {
  const services = [
    {
      icon: <FaRobot />,
      name: "AI Agents",
      status: "ACTIVE",
      color: "#22c55e",
    },
    {
      icon: <MdHealthAndSafety />,
      name: "Backend",
      status: "ONLINE",
      color: "#3b82f6",
    },
    {
      icon: <FaCloudSun />,
      name: "Weather API",
      status: "CONNECTED",
      color: "#f59e0b",
    },
    {
      icon: <MdGpsFixed />,
      name: "GPS",
      status: "READY",
      color: "#10b981",
    },
    {
      icon: <FaMapMarkedAlt />,
      name: "Maps",
      status: "ACTIVE",
      color: "#8b5cf6",
    },
    {
      icon: <FaRobot />,
      name: "Gemini AI",
      status: "CONNECTED",
      color: "#ec4899",
    },
  ];

  return (
    <div
      style={{
        width: "95%",
        maxWidth: "1450px",
        margin: "25px auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: "rgba(15,23,42,0.85)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "18px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "18px",
              boxShadow:
                "0 8px 25px rgba(0,0,0,.25)",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                background: service.color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "24px",
              }}
            >
              {service.icon}
            </div>

            <div>
              <h3
                style={{
                  margin: 0,
                  color: "white",
                }}
              >
                {service.name}
              </h3>

              <p
                style={{
                  marginTop: "6px",
                  color: service.color,
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                ● {service.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SystemStatus;