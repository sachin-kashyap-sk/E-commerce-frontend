import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://localhost:5000";
export const AboutHeader = createAsyncThunk(
  "api/getAllAboutHeader",
  async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        config: { withCredentials: true },
      };

      const { data } = await axios.get(
        `${backendURL}/api/getAllAboutHeader`,
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);
