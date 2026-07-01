function IncidentHistory({ history }) {
  if (!history || history.length === 0) {
    return (
      <p style={{ color: "#94a3b8" }}>
        No incidents reported yet.
      </p>
    );
  }

  return (
    <div>
      {history.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#1e293b",
            padding: "15px",
            borderRadius: "12px",
            marginBottom: "12px",
          }}
        >
          <h4>🚨 {item.message}</h4>

          <p style={{ color: "#94a3b8" }}>
            📍 {item.location || "Unknown Location"}
          </p>

          <p style={{ color: "#94a3b8" }}>
            ⚠ {item.risk?.level || "LOW"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default IncidentHistory;