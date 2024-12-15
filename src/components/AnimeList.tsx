import React from "react";
import { useAnimeList } from "../hooks/useAnimeList";
import { useDebounce } from "../hooks/useDebounce";
import CustomCard from "./CustomCard";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import useAnimeStorage from "../hooks/useAnimeStorage";

// Componente principal
const AnimeList = () => {
  const [search, setSearch] = React.useState(
    localStorage.getItem("animeSearch") || ""
  );

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useAnimeList(1, 20, debouncedSearch);

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <TextField
          type="text"
          placeholder="Search for an anime"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
      </Grid>

      <Grid container size={12}>
        {isLoading ? (
          <>...</>
        ) : (
          data?.map((anime) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }} justifyItems="center">
              <CustomCard data={anime} />
            </Grid>
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default AnimeList;
