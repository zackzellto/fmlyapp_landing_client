import axios, { AxiosResponse } from "axios";

interface WaitlistResponse {
  id: string;
  email: string;
  timestamp: string;
}

const baseURL = "https://fmlyapp-backend.herokuapp.com/api/waitlist";

export const addToWaitlist = async (
  email: string
): Promise<WaitlistResponse> => {
  try {
    const response: AxiosResponse<WaitlistResponse> = await axios.post(
      baseURL,
      { email }
    );
    const data: WaitlistResponse = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error adding email to waitlist", error);
    throw error;
  }
};
