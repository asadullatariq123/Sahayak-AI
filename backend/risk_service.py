def calculate_risk(message):

    message = message.lower()

    critical = [
        "earthquake",
        "building collapse",
        "tsunami",
        "explosion"
    ]

    high = [
        "flood",
        "fire",
        "cyclone",
        "landslide"
    ]

    moderate = [
        "accident",
        "injury",
        "storm",
        "heavy rain"
    ]

    low = [
        "help",
        "water",
        "food"
    ]

    for word in critical:
        if word in message:
            return {
                "level": "CRITICAL",
                "color": "#dc2626"
            }

    for word in high:
        if word in message:
            return {
                "level": "HIGH",
                "color": "#ea580c"
            }

    for word in moderate:
        if word in message:
            return {
                "level": "MODERATE",
                "color": "#eab308"
            }

    return {
        "level": "LOW",
        "color": "#22c55e"
    }