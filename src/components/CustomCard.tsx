import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Anime } from "../interfaces/anime.interface";
import useAnimeStorage from "../hooks/useAnimeStorage";

interface ICustomCard {
  data: Anime;
  addAction?: () => void;
  removeAction?: () => void;
}

const CustomCard = ({ addAction, removeAction, data }: ICustomCard) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          key={data?.id}
          component="img"
          height={400}
          image={data?.coverImage.large}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.title?.english || data?.title?.romaji}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {data?.title.english}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {addAction && (
          <Button onClick={addAction} size="small" color="primary">
            add favorite
          </Button>
        )}
        {removeAction && (
          <Button onClick={removeAction} size="small" color="primary">
            delete favorite
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CustomCard;
