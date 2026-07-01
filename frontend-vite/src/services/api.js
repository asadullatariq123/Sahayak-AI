import axios from "axios";

const API = "http://127.0.0.1:8000";

export const sendEmergency = async (message) => {
  const response = await axios.get(`${API}/chat`, {
    params: {
      message,
    },
  });

  return response.data;
};