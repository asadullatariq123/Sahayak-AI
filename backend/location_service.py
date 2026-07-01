from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="sahayak_ai")

def get_coordinates(place):
    try:
        location = geolocator.geocode(place)

        if location:
            return {
                "latitude": location.latitude,
                "longitude": location.longitude,
            }

        return {
            "latitude": None,
            "longitude": None,
        }

    except Exception:
        return {
            "latitude": None,
            "longitude": None,
        }