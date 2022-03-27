import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import { queryClient } from "@/services/api";

import "../styles/globals.css";
import { UserAuthProvider } from "@/contexts/use-user-auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserAuthProvider>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          closeOnClick
          pauseOnHover
          theme="dark"
        />
      </UserAuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
