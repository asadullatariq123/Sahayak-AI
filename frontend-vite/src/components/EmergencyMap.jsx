import { motion } from "framer-motion";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function EmergencyMap({ response, userLocation }) {
  if (!response?.latitude || !response?.longitude) {
    return (
      <p style={{ color: "#94a3b8" }}>
        Submit an emergency to display the live map.
      </p>
    );
  }

  const center = [
    response.latitude,
    response.longitude,
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
    >
      <MapContainer
        center={center}
        zoom={13}
        style={{
          height: "520px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={center}>
          <Popup>
            🚨 <strong>{response.location}</strong>
          </Popup>
        </Marker>

        {userLocation && (
          <Marker
            position={[
              userLocation.latitude,
              userLocation.longitude,
            ]}
          >
            <Popup>
              📍 Your Current Location
            </Popup>
          </Marker>
        )}

        {response.hospitals?.map(
          (hospital, index) => (
            <Marker
              key={index}
              position={[
                hospital.latitude,
                hospital.longitude,
              ]}
            >
              <Popup>
                <strong>{hospital.name}</strong>

                <br />
                <br />

                <button
                  style={{
                    padding: "8px 12px",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=${hospital.latitude},${hospital.longitude}`,
                      "_blank"
                    )
                  }
                >
                  Navigate
                </button>
              </Popup>
            </Marker>
          )
        )}
      </MapContainer>
    </motion.div>
  );
}

export default EmergencyMap;