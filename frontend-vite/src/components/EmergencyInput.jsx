import { useState } from "react";
import axios from "axios";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";
import translations from "../utils/translations";

const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

function EmergencyInput({
  setResponse,
  history,
  setHistory,
  language,
}) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  const t = translations[language];

  // ----------------------------
  // Browser Notification
  // ----------------------------
  const showNotification = (title, body) => {
    if (!("Notification" in window)) return;

    if (Notification.permission === "granted") {
      new Notification(title, {
    body,
});
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, {
            body,
            icon: "/vite.svg",
          });
        }
      });
    }
  };

  // ----------------------------
  // Voice Recognition
  // ----------------------------
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
      alert("Voice recognition failed.");
    };

    recognition.onresult = (event) => {
      setMessage(event.results[0][0].transcript);
    };

    recognition.start();
  };

  // ----------------------------
  // Send Emergency
  // ----------------------------
  const sendEmergency = async () => {
    if (!message.trim()) {
      alert("Please enter an emergency message.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.get(`${API_URL}/chat`, {
        params: {
          message,
        },
      });

      setResponse(res.data);

      setHistory((prevHistory) => [
        {
          id: Date.now(),
          message: res.data.user_message,
          location: res.data.location || "Unknown",
          risk: res.data.risk || {
            level: "LOW",
          },
          time: new Date().toLocaleString(),
        },
        ...prevHistory,
      ]);

      showNotification(
        "🚨 Sahayak AI",
        `Emergency processed successfully.\nLocation: ${
          res.data.location || "Unknown"
        }`
      );

      setMessage("");
    } catch (error) {
      console.error(error);

      alert(
        "Unable to connect to the backend.\n\nPlease make sure FastAPI is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "#0f172a",
        padding: "25px",
        margin: "30px",
        borderRadius: "20px",
        border: "1px solid #334155",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        {t.report}
      </h2>

      <textarea
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Example: There is a flood in Tirupati..."
        style={{
          width: "100%",
          padding: "15px",
          background: "#1e293b",
          color: "white",
          borderRadius: "12px",
          border: "1px solid #475569",
          fontSize: "16px",
          resize: "none",
          outline: "none",
          boxSizing: "border-box",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={startListening}
          disabled={listening}
          style={{
            background: listening ? "#dc2626" : "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 22px",
            borderRadius: "10px",
            cursor: listening ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
          }}
        >
          <FaMicrophone />
          {listening ? "Listening..." : t.voice}
        </button>

        <button
          onClick={sendEmergency}
          disabled={loading}
          style={{
            background: loading ? "#64748b" : "#16a34a",
            color: "white",
            border: "none",
            padding: "12px 22px",
            borderRadius: "10px",
            cursor: loading ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
          }}
        >
          <FaPaperPlane />
          {loading ? "AI Agents Processing..." : t.send}
        </button>
      </div>
    </div>
  );
}

export default EmergencyInput;