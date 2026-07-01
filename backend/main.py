from email.mime import message

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# -----------------------------
# AI Agents
# -----------------------------
from agents.planning_agent import analyze_request
from agents.medical_agent import medical_help
from agents.shelter_agent import shelter_help
from agents.resource_agent import allocate_resource
from agents.citizen_agent import get_assistance_response

# -----------------------------
# Services
# -----------------------------
from location_service import get_coordinates
from hospital_service import get_nearby_hospitals
from weather_service import get_weather
from risk_service import calculate_risk
from location_extractor import extract_location

# -----------------------------
# FastAPI App
# -----------------------------
app = FastAPI(
    title="Sahayak AI",
    description="AI Powered Multi-Agent Disaster Intelligence Platform",
    version="2.1.0",
)

# -----------------------------
# CORS
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Home
# -----------------------------
@app.get("/")
def home():
    return {
        "message": "Welcome to Sahayak AI 🚑",
        "status": "Backend Running Successfully"
    }

# -----------------------------
# Health Check
# -----------------------------
@app.get("/health")
def health():
    return {
        "status": "Healthy"
    }

# -----------------------------
# Chat Endpoint
# -----------------------------
@app.get("/chat")
async def chat(message: str):

    # -----------------------------
    # Planning Agent
    # -----------------------------
    tasks = analyze_request(message)

    # -----------------------------
    # Execute Specialized Agents
    # -----------------------------
    agent_results = []

    if "Medical Agent" in tasks:
        agent_results.append(medical_help(message))

    if "Shelter Agent" in tasks:
        agent_results.append(shelter_help(message))

    if "Resource Agent" in tasks:
        agent_results.append(allocate_resource(message))

    # -----------------------------
    # Citizen Agent
    # -----------------------------
    citizen_response = get_assistance_response(message)

    # -----------------------------
    # Risk Assessment
    # -----------------------------
    risk = calculate_risk(message)

    # -----------------------------
    # Detect City
    # -----------------------------
   # -----------------------------
# Detect Location using Gemini AI
# -----------------------------

  detected_location = extract_location(message)

    latitude = None
    longitude = None
    hospitals = []
    weather = {}

    # -----------------------------
    # Location Services
    # -----------------------------
    if detected_location:

        coordinates = get_coordinates(detected_location)

        latitude = coordinates.get("latitude")
        longitude = coordinates.get("longitude")

        if latitude is not None and longitude is not None:

            hospitals = get_nearby_hospitals(
                detected_location,
                latitude,
                longitude
            )

            weather = get_weather(
                latitude,
                longitude
            )

    # -----------------------------
    # Final Response
    # -----------------------------
    return {

        "user_message": message,

        "planning_agent": {
            "status": "Completed",
            "tasks": tasks
        },

        "specialized_agents": agent_results,

        "citizen_agent": citizen_response,

        "system_status": "Emergency Request Processed Successfully",

        "location": detected_location,

        "latitude": latitude,

        "longitude": longitude,

        "risk": risk,

        "weather": weather,

        "hospitals": hospitals

    }