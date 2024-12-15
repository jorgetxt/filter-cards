import { Grid2 as Grid, Typography } from "@mui/material";
import TabsButton from "./components/TabsButton";
import { Outlet } from "react-router";

const AnimeScreen = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant="h1" align="center">
          Anime
        </Typography>
      </Grid>
      <Grid size={12}>
        <TabsButton />
      </Grid>
      <Outlet />
    </Grid>
  );
};

export default AnimeScreen;
