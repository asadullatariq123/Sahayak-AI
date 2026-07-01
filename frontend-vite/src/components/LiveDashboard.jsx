function LiveDashboard({ response }) {
  if (!response) return null;

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        background: "#111827",
        padding: "30px",
        borderRadius: "20px",
        color: "white",
        border: "1px solid #334155",
      }}
    >
      <h2>🚨 Live Emergency Dashboard</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>👤 User Message</h3>

          <p>{response.user_message}</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>🤖 Planning Agent</h3>

          <p>{response.planning_agent.status}</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>🚑 System Status</h3>

          <p>{response.system_status}</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>🧠 Citizen Agent</h3>

          <p>{response.citizen_agent.status}</p>
        </div>
      </div>
    </div>
  );
}

export default LiveDashboard;