import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router";

const TabsButton = () => {
  let navigate = useNavigate();

  return (
    <ButtonGroup
      variant="contained"
      aria-label="Basic button group"
      size="large"
    >
      <Button onClick={() => navigate("/list")}>Anime List</Button>
      <Button onClick={() => navigate("/favorites")}>Favorites</Button>
    </ButtonGroup>
  );
};

export default TabsButton;
