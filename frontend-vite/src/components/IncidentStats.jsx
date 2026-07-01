import { FaExclamationTriangle, FaMapMarkerAlt, FaUsers, FaWater } from "react-icons/fa";

function IncidentStats() {
  const stats = [
    {
      title: "Priority",
      value: "HIGH",
      icon: <FaExclamationTriangle size={30} />,
      color: "#ef4444",
    },
    {
      title: "Location",
      value: "Awaiting",
      icon: <FaMapMarkerAlt size={30} />,
      color: "#3b82f6",
    },
    {
      title: "Victims",
      value: "--",
      icon: <FaUsers size={30} />,
      color: "#22c55e",
    },
    {
      title: "Disaster",
      value: "Flood",
      icon: <FaWater size={30} />,
      color: "#06b6d4",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "20px auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "25px",
      }}
    >
      {stats.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#111827",
            color: "white",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 0 15px rgba(59,130,246,.15)",
          }}
        >
          <div style={{ color: item.color }}>{item.icon}</div>

          <h3>{item.value}</h3>

          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default IncidentStats;