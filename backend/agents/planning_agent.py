def analyze_request(message: str):
    """
    Planning Agent:
    Analyzes the user's message and decides which agents should be executed.
    """

    message = message.lower()

    tasks = []

    # Disaster Detection
    if any(word in message for word in ["flood", "rain", "water"]):
        tasks.append("Shelter Agent")

    if any(word in message for word in ["fire", "burn"]):
        tasks.append("Fire Response Agent")

    # Medical Detection
    if any(word in message for word in ["injured", "injury", "bleeding", "hurt", "unconscious"]):
        tasks.append("Medical Agent")

    # Resource Detection
    if any(word in message for word in ["food", "water", "medicine", "help", "rescue"]):
        tasks.append("Resource Agent")

    # If nothing is detected
    if not tasks:
        tasks.append("General Assistance")

    return tasks