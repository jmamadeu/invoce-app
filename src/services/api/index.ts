import axios from "axios";
import { QueryClient } from "react-query";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

export const queryClient = new QueryClient();
