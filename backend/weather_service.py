import requests

def get_weather(lat, lon):
    try:
        url = (
            "https://api.open-meteo.com/v1/forecast"
            f"?latitude={lat}"
            f"&longitude={lon}"
            "&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code"
        )

        response = requests.get(url, timeout=10)
        data = response.json()

        current = data.get("current", {})

        return {
            "temperature": current.get("temperature_2m"),
            "humidity": current.get("relative_humidity_2m"),
            "wind_speed": current.get("wind_speed_10m"),
            "weather_code": current.get("weather_code"),
        }

    except Exception:
        return {
            "temperature": None,
            "humidity": None,
            "wind_speed": None,
            "weather_code": None,
        }