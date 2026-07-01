import { motion } from "framer-motion";
import {
  FaCloudSun,
  FaTemperatureHigh,
  FaWind,
  FaTint,
} from "react-icons/fa";

function WeatherCard({ response }) {
  if (!response?.weather)
    return <p>Weather information unavailable.</p>;

  const weather = response.weather;

  const cards = [
    {
      icon: <FaTemperatureHigh />,
      title: "Temperature",
      value:
        weather.temperature !== undefined
          ? `${weather.temperature}°C`
          : "N/A",
      color: "#ef4444",
    },
    {
      icon: <FaWind />,
      title: "Wind Speed",
      value:
        weather.wind_speed !== undefined
          ? `${weather.wind_speed} km/h`
          : "N/A",
      color: "#3b82f6",
    },
    {
      icon: <FaTint />,
      title: "Humidity",
      value:
        weather.humidity !== undefined
          ? `${weather.humidity}%`
          : "N/A",
      color: "#06b6d4",
    },
    {
      icon: <FaCloudSun />,
      title: "Condition",
      value:
        weather.condition ||
        weather.weather ||
        "Unknown",
      color: "#f59e0b",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gap: "15px",
      }}
    >
      {cards.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
          }}
          whileHover={{
            scale: 1.03,
          }}
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            background: "#1e293b",
            borderRadius: "15px",
            padding: "18px",
          }}
        >
          <div
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              background: item.color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "22px",
            }}
          >
            {item.icon}
          </div>

          <div>
            <h4>{item.title}</h4>
            <h3>{item.value}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default WeatherCard;