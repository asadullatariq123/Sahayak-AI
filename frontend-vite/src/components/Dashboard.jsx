function Dashboard({ children }) {
  return (
    <div
      style={{
        width: "95%",
        maxWidth: "1500px",
        margin: "30px auto",
      }}
    >
      {children}
    </div>
  );
}

export default Dashboard;