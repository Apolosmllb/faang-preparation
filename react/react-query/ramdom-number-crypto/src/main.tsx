import React from "react";
import ReactDOM from "react-dom/client";
import { Clients } from "./clients";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Clients />
    </QueryClientProvider>
  </React.StrictMode>
);
