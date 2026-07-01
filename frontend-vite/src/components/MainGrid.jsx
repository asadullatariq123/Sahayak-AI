import { useEffect, useState } from "react";

function MainGrid({ left, center, right }) {
  const [columns, setColumns] = useState(
    window.innerWidth < 992 ? "1fr" : "1fr 2fr 1fr"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setColumns("1fr");
      } else {
        setColumns("1fr 2fr 1fr");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: columns,
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <div>{left}</div>

      <div>{center}</div>

      <div>{right}</div>
    </div>
  );
}

export default MainGrid;