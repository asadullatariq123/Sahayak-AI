import { FaBrain, FaHospital, FaHome, FaAmbulance } from "react-icons/fa";

function AgentTimeline() {
  const agents = [
    {
      name: "Planning Agent",
      icon: <FaBrain />,
      color: "#2563eb",
      status: "Completed",
    },
    {
      name: "Medical Agent",
      icon: <FaHospital />,
      color: "#ef4444",
      status: "Completed",
    },
    {
      name: "Shelter Agent",
      icon: <FaHome />,
      color: "#22c55e",
      status: "Completed",
    },
    {
      name: "Resource Agent",
      icon: <FaAmbulance />,
      color: "#f59e0b",
      status: "Completed",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "60px auto",
        padding: "30px",
        background: "#111827",
        borderRadius: "20px",
        color: "white",
        boxShadow: "0 0 20px rgba(37,99,235,.15)",
      }}
    >
      <h2>🤖 AI Agent Processing Timeline</h2>

      <p style={{ color: "#94a3b8" }}>
        Shows how multiple AI agents collaborate to process emergencies.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {agents.map((agent, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              minWidth: "220px",
              background: "#1e293b",
              padding: "20px",
              borderRadius: "15px",
              textAlign: "center",
              border: "1px solid #334155",
            }}
          >
            <div
              style={{
                fontSize: "40px",
                color: agent.color,
                marginBottom: "15px",
              }}
            >
              {agent.icon}
            </div>

            <h3>{agent.name}</h3>

            <p style={{ color: "#22c55e", fontWeight: "bold" }}>
              ✅ {agent.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentTimeline;