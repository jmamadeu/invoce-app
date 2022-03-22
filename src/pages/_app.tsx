import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";

import { queryClient } from "@/services/api";

import "../styles/globals.css";
import { UserAuthProvider } from "@/contexts/use-user-auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserAuthProvider>
        <Component {...pageProps} />
      </UserAuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
