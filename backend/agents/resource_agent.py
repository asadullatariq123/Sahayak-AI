def allocate_resource(message: str):
    """
    Resource Agent:
    Assigns emergency priority and resources.
    """

    return {
        "agent": "Resource Agent",
        "status": "Completed",
        "priority": "High",
        "result": "Emergency resources have been allocated."
    }