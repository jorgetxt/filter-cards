import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AnimeList from "./AnimeList";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <AnimeList />
  </QueryClientProvider>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
