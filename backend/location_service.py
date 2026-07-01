import requests

HEADERS = {
    "User-Agent": "SahayakAI/1.0"
}


def get_coordinates(location_name):
    try:

        url = "https://nominatim.openstreetmap.org/search"

        response = requests.get(
            url,
            params={
                "q": location_name,
                "format": "json",
                "limit": 1
            },
            headers=HEADERS,
            timeout=15
        )

        data = response.json()

        if len(data) == 0:
            return {
                "latitude": None,
                "longitude": None
            }

        return {
            "latitude": float(data[0]["lat"]),
            "longitude": float(data[0]["lon"])
        }

    except Exception:

        return {
            "latitude": None,
            "longitude": None
        }