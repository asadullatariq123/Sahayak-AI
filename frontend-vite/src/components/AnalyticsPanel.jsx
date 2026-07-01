import {
  FaRobot,
  FaClock,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

function AnalyticsPanel({ response }) {
  if (!response) return null;

  const cards = [
    {
      icon: <FaRobot size={35} />,
      title: "AI Agents",
      value: "4",
      color: "#3b82f6",
    },
    {
      icon: <FaClock size={35} />,
      title: "Response Time",
      value: "2.3 sec",
      color: "#22c55e",
    },
    {
      icon: <FaChartLine size={35} />,
      title: "Confidence",
      value: "96%",
      color: "#f59e0b",
    },
    {
      icon: <FaCheckCircle size={35} />,
      title: "Status",
      value: "ACTIVE",
      color: "#10b981",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
      }}
    >
      <h2 style={{ color: "white" }}>
        📊 AI Analytics Dashboard
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: "#111827",
              padding: "30px",
              borderRadius: "20px",
              color: "white",
              border: "1px solid #334155",
            }}
          >
            <div
              style={{
                color: card.color,
              }}
            >
              {card.icon}
            </div>

            <h3>{card.value}</h3>

            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnalyticsPanel;