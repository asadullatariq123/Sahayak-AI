import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load .env file
load_dotenv()

# Gemini API Key
API_KEY = os.getenv("GEMINI_API_KEY")

# Configure Gemini
if API_KEY:
    genai.configure(api_key=API_KEY)

# Model
model = genai.GenerativeModel("gemini-2.5-flash")


def get_assistance_response(message: str):
    """
    Citizen Agent
    Generates emergency guidance using Gemini AI.
    If Gemini fails, returns a safe fallback response.
    """

    prompt = f"""
You are Sahayak AI Citizen Emergency Assistant.

A citizen has reported the following emergency:

"{message}"

Your task:

1. Identify the emergency.
2. Give immediate safety instructions.
3. Explain what the citizen should do.
4. Keep the response simple.
5. Maximum 8 short bullet points.
6. Do NOT panic the user.
"""

    try:

        response = model.generate_content(prompt)

        return {
            "agent": "Citizen Agent",
            "status": "Completed",
            "received_message": message,
            "response": response.text
        }

    except Exception as e:

        print("Gemini Error:", e)

        # -------- FALLBACK RESPONSE -------- #

        fallback = f"""
Emergency detected.

Reported Incident:
{message}

Immediate Safety Instructions

• Stay calm.
• Move to a safe location.
• Avoid dangerous areas.
• Contact local emergency services if required.
• Follow official government instructions.
• Keep your mobile phone charged.
• Inform your family about your location.
• Wait for rescue teams if evacuation is not possible.

This response was generated using the offline emergency safety system.
"""

        return {
            "agent": "Citizen Agent",
            "status": "Completed",
            "received_message": message,
            "response": fallback
        }