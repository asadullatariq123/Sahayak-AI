import requests

# ---------------------------------------
# Demo Hospitals (Fallback)
# ---------------------------------------

DEMO_HOSPITALS = {

    "Tirupati": [

        {
            "name": "SVIMS Hospital",
            "latitude": 13.6288,
            "longitude": 79.4192
        },

        {
            "name": "Ruia Government Hospital",
            "latitude": 13.6355,
            "longitude": 79.4238
        },

        {
            "name": "Apollo Clinic Tirupati",
            "latitude": 13.6401,
            "longitude": 79.4300
        }

    ],

    "Chennai": [

        {
            "name": "Apollo Hospital Chennai",
            "latitude": 13.0604,
            "longitude": 80.2496
        },

        {
            "name": "Government General Hospital",
            "latitude": 13.0810,
            "longitude": 80.2765
        }

    ],

    "Hyderabad": [

        {
            "name": "Yashoda Hospital",
            "latitude": 17.4400,
            "longitude": 78.4983
        },

        {
            "name": "Care Hospital",
            "latitude": 17.4270,
            "longitude": 78.4576
        }

    ]
}


# ---------------------------------------
# Real Hospital Search
# ---------------------------------------

def search_osm_hospitals(lat, lon):

    try:

        overpass_url = "https://overpass-api.de/api/interpreter"

        query = f"""
        [out:json];
        (
          node["amenity"="hospital"](around:5000,{lat},{lon});
        );
        out;
        """

        response = requests.get(
            overpass_url,
            params={"data": query},
            timeout=20
        )

        data = response.json()

        hospitals = []

        for item in data.get("elements", []):

            hospitals.append({

                "name": item.get("tags", {}).get(
                    "name",
                    "Unnamed Hospital"
                ),

                "latitude": item["lat"],

                "longitude": item["lon"]

            })

        return hospitals

    except Exception:

        return []


# ---------------------------------------
# Main Function
# ---------------------------------------

def get_nearby_hospitals(city, lat, lon):

    hospitals = search_osm_hospitals(lat, lon)

    # If OSM returns hospitals use them
    if hospitals:
        return hospitals[:10]

    # Otherwise use demo hospitals
    return DEMO_HOSPITALS.get(city, [])