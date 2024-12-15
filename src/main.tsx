import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AnimeList from "./components/AnimeList";
import AnimeScreen from "./AnimeScreen";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import FavoriteList from "./components/FavoriteList";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<AnimeScreen />}>
          <Route index element={<AnimeList />} />
          <Route index path="list" element={<AnimeList />} />
          <Route path="favorites" element={<FavoriteList />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
