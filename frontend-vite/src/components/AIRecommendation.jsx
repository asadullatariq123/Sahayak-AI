function AIRecommendation({ response }) {
  if (!response) return null;

  const tasks = response.planning_agent?.tasks || [];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        background: "#111827",
        borderRadius: "20px",
        padding: "30px",
        color: "white",
        border: "1px solid #334155",
      }}
    >
      <h2 style={{ marginBottom: "25px" }}>
        🤖 AI Emergency Recommendation
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>🚨 Emergency Type</h3>
          <p>Detected from citizen report</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>🎯 Priority</h3>
          <p style={{ color: "#ef4444", fontWeight: "bold" }}>
            HIGH
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>🤖 Selected Agents</h3>

          {tasks.map((task, index) => (
            <p key={index}>✅ {task}</p>
          ))}
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>💬 Citizen Response</h3>

          <p>{response.citizen_agent?.response}</p>
        </div>
      </div>
    </div>
  );
}

export default AIRecommendation;