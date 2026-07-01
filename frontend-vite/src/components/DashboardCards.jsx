import {
  FaBrain,
  FaHospital,
  FaHouseUser,
  FaTruckMedical,
} from "react-icons/fa6";

function DashboardCards() {
  const cards = [
    {
      title: "Planning Agent",
      icon: <FaBrain size={35} />,
      color: "#2563eb",
    },
    {
      title: "Medical Agent",
      icon: <FaHospital size={35} />,
      color: "#ef4444",
    },
    {
  title: "Shelter Agent",
  icon: <FaHouseUser size={35} />,
  color: "#22c55e",
},
    {
      title: "Resource Agent",
      icon: <FaTruckMedical size={35} />,
      color: "#f59e0b",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "50px auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "25px",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: "#111827",
            borderRadius: "20px",
            padding: "30px",
            color: "white",
            boxShadow: "0 0 20px rgba(37,99,235,.25)",
            transition: ".3s",
          }}
        >
          <div style={{ color: card.color }}>
            {card.icon}
          </div>

          <h3>{card.title}</h3>

          <p
            style={{
              color: "#22c55e",
              fontWeight: "bold",
            }}
          >
            ● Online
          </p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;