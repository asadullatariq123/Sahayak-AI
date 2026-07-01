import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SystemStatus from "../components/SystemStatus";
import EmergencyInput from "../components/EmergencyInput";
import UserLocation from "../components/UserLocation";
import LanguageSelector from "../components/LanguageSelector";

import Dashboard from "../components/Dashboard";
import MainGrid from "../components/MainGrid";
import Panel from "../components/Panel";
import QuickActions from "../components/QuickActions";
import TopStats from "../components/TopStats";
import LiveStats from "../components/LiveStats";

import EmergencyMap from "../components/EmergencyMap";
import NearbyServices from "../components/NearbyServices";
import WeatherCard from "../components/WeatherCard";
import RiskCard from "../components/RiskCard";
import EmergencyTimeline from "../components/EmergencyTimeline";
import SOSPanel from "../components/SOSPanel";
import IncidentHistory from "../components/IncidentHistory";
import EmergencyContacts from "../components/EmergencyContacts";

function Home() {
  const [response, setResponse] = useState(null);
  const [history, setHistory] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [language, setLanguage] = useState("en");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Language Selector */}
      <LanguageSelector
        language={language}
        setLanguage={setLanguage}
      />

      {/* GPS */}
      <UserLocation
        setUserLocation={setUserLocation}
      />

      {/* Hero */}
      <Hero />

      {/* System Status */}
      <SystemStatus />

      {/* Emergency Input */}
      <EmergencyInput
        setResponse={setResponse}
        history={history}
        setHistory={setHistory}
        language={language}
      />

      {/* Dashboard */}
      <Dashboard>

        {response ? (
          <LiveStats response={response} />
        ) : (
          <TopStats />
        )}

        <MainGrid
          left={
            <Panel title="🤖 AI Agents">
              <div style={{ lineHeight: "2" }}>
                <p>🧠 Planning Agent</p>
                <hr />
                <p>🏥 Medical Agent</p>
                <hr />
                <p>🏠 Shelter Agent</p>
                <hr />
                <p>🚑 Resource Agent</p>
                <hr />
                <p>👤 Citizen Agent</p>
              </div>
            </Panel>
          }
          center={
            <Panel title="🚨 Incident Dashboard">
              {response ? (
                <>
                  <h3>📩 Emergency</h3>
                  <p>{response.user_message}</p>

                  <br />

                  <h3>📍 Location</h3>
                  <p>{response.location}</p>

                  <br />

                  <h3>🌍 Latitude</h3>
                  <p>{response.latitude}</p>

                  <br />

                  <h3>🌍 Longitude</h3>
                  <p>{response.longitude}</p>

                  <br />

                  <h3>🤖 Planning Agent</h3>
                  <p>{response.planning_agent?.status}</p>

                  <br />

                  <h3>⚙ System Status</h3>
                  <p>{response.system_status}</p>
                </>
              ) : (
                <>
                  <p>No emergency submitted.</p>

                  <br />

                  <p>
                    Submit an emergency request to start AI analysis.
                  </p>
                </>
              )}
            </Panel>
          }
          right={
            <Panel title="⚡ Quick Actions">
              <QuickActions />
            </Panel>
          }
        />
      </Dashboard>

      {/* AI Recommendation */}
      {response && (
        <Dashboard>
          <Panel title="🤖 AI Recommendation">
            <div
              style={{
                whiteSpace: "pre-wrap",
                lineHeight: "1.8",
              }}
            >
              {response.citizen_agent?.response}
            </div>
          </Panel>
        </Dashboard>
      )}

      {/* Emergency Map */}
      <Dashboard>
        <Panel title="🗺 Live Emergency Map">
          <EmergencyMap
            response={response}
            userLocation={userLocation}
          />
        </Panel>
      </Dashboard>
            {/* Information Grid */}
      <Dashboard>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Nearby Hospitals */}
          <Panel title="🏥 Nearby Hospitals">
            <NearbyServices response={response} />
          </Panel>

          {/* Weather */}
          <Panel title="🌦 Live Weather">
            <WeatherCard response={response} />
          </Panel>

          {/* Risk */}
          <Panel title="🚨 AI Risk Assessment">
            <RiskCard response={response} />
          </Panel>

          {/* Timeline */}
          <Panel title="📜 Emergency Timeline">
            <EmergencyTimeline response={response} />
          </Panel>
        </div>
      </Dashboard>

      {/* SOS Panel */}
      <Dashboard>
        <Panel title="🆘 Emergency Services">
          <SOSPanel />
        </Panel>
      </Dashboard>

      {/* Incident History */}
      <Dashboard>
        <Panel title="📜 Incident History">
          <IncidentHistory history={history} />
        </Panel>
      </Dashboard>

      {/* Emergency Contacts */}
      <Dashboard>
        <Panel title="📞 Emergency Contacts">
          <EmergencyContacts />
        </Panel>
      </Dashboard>

      {/* Footer */}
      <footer
        style={{
          marginTop: "40px",
          padding: "30px",
          textAlign: "center",
          color: "#94a3b8",
          borderTop: "1px solid #334155",
          background: "#0f172a",
        }}
      >
        <h2
          style={{
            color: "white",
            marginBottom: "10px",
          }}
        >
          🚑 Sahayak AI
        </h2>

        <p>
          Multi-Agent Disaster Intelligence Platform
        </p>

        <br />

        <p>
          🤖 AI Powered &nbsp;|&nbsp;
          📍 GPS Enabled &nbsp;|&nbsp;
          🌦 Weather Monitoring &nbsp;|&nbsp;
          🏥 Hospital Finder
        </p>

        <br />

        <p>
          Built using React • FastAPI • Gemini AI • Leaflet Maps
        </p>

        <br />

        <small>
          © 2026 Sahayak AI. All Rights Reserved.
        </small>
      </footer>
    </div>
  );
}

export default Home;