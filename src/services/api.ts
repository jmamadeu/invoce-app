import axios from "axios";
import { QueryClient } from "react-query";

export const api = axios.create({
  baseURL: process.env.API_URL
});

export const queryClient = new QueryClient();
