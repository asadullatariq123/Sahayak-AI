function EmergencyContacts() {
  const contacts = [
    {
      name: "Police",
      number: "100",
      icon: "🚓",
      color: "#2563eb",
    },
    {
      name: "Ambulance",
      number: "108",
      icon: "🚑",
      color: "#dc2626",
    },
    {
      name: "Fire",
      number: "101",
      icon: "🔥",
      color: "#ea580c",
    },
    {
      name: "Disaster Management",
      number: "1070",
      icon: "🛟",
      color: "#16a34a",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
      }}
    >
      {contacts.map((contact) => (
        <div
          key={contact.number}
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            border: "1px solid #334155",
          }}
        >
          <h2>{contact.icon}</h2>

          <h3>{contact.name}</h3>

          <h2>{contact.number}</h2>

          <a
            href={`tel:${contact.number}`}
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                marginTop: "15px",
                width: "100%",
                padding: "10px",
                background: contact.color,
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              📞 Call
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default EmergencyContacts;