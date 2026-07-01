import os
import google.generativeai as genai

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def extract_location(message):

    prompt = f"""
Extract ONLY the location from this emergency message.

Rules:
- Return only the place name.
- No explanation.
- No punctuation.
- If no location exists return UNKNOWN.

Examples:

Flood in Tokyo
Tokyo

Fire near Eiffel Tower
Eiffel Tower

Earthquake at New York
New York

Message:
{message}
"""

    try:

        response = model.generate_content(prompt)

        location = response.text.strip()

        if location.upper() == "UNKNOWN":
            return None

        return location

    except Exception:

        return None