import React from "react";
import { useAnimeList } from "./hooks/useAnimeList";
import { useDebounce } from "./hooks/useDebounce";
import CustomCard from "./components/CustomCard";

// Componente principal
const AnimeList = () => {
  const [search, setSearch] = React.useState(
    localStorage.getItem("animeSearch") || ""
  );

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useAnimeList(1, 10, debouncedSearch);

  return (
    <div>
      <h1>Anime List</h1>
      <input
        type="text"
        placeholder="Search for an anime"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {isLoading ? (
          <>hola</>
        ) : (
          data?.map((anime) => (
            <li key={anime.id}>
              <CustomCard />
              <h2>{anime.title.english}</h2>
              {anime.title.english && <p>{anime.title.english}</p>}
              <img src={anime.coverImage.large} alt={anime.title.romaji} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AnimeList;
