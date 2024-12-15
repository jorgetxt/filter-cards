import { useState, useEffect } from "react";
import { Anime } from "../interfaces/anime.interface";

const useAnimeStorage = () => {
  const [animes, setAnimes] = useState<Anime[]>(() => {
    const savedAnimes = localStorage.getItem("animeList");
    return savedAnimes ? JSON.parse(savedAnimes) : [];
  });

  useEffect(() => {
    localStorage.setItem("animeList", JSON.stringify(animes));
  }, [animes]);

  const addAnime = (anime: Anime) => {
    setAnimes((prevAnimes) => [...prevAnimes, anime]);
  };

  const removeAnime = (animeId: number) => {
    setAnimes((prevAnimes) =>
      prevAnimes.filter((anime) => anime.id !== animeId)
    );
  };

  return {
    animes,
    addAnime,
    removeAnime,
  };
};

export default useAnimeStorage;
