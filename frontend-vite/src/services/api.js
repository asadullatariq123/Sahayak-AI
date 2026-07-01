import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const sendEmergency = async (message) => {
  const response = await axios.get(`${API}/chat`, {
    params: {
      message,
    },
  });

  return response.data;
};