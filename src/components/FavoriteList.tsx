import { Grid2 as Grid } from "@mui/material";
import useAnimeStorage from "../hooks/useAnimeStorage";
import CustomCard from "./CustomCard";

const FavoriteList = () => {
  const { animes, removeAnime } = useAnimeStorage();
  return animes?.map((anime) => (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }} justifyItems="center">
      <CustomCard data={anime} removeAction={() => removeAnime(anime.id)} />
    </Grid>
  ));
};

export default FavoriteList;
