import { Box, Fab, ImageList, ImageListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FloatButton() {
     const navigate = useNavigate();

     function handleClick() {
       navigate("/pokedex");
     }
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Fab
        aria-label="add"
        sx={{
          backgroundColor: "#3d65b9", //#3d65b9   #9b0505   #e9cd71
          bottom: "16px",
          right: "16px",
          position: "fixed",
          width: "100px",
          height: "100px",
        }}
        onClick={() => handleClick()}
      >
        <ImageList sx={{ justifyContent: "center", display: "flex" }}>
          <ImageListItem>
            <img src="/src/assets/Pok%3Fdex_Kanto.webp" />
          </ImageListItem>
        </ImageList>
      </Fab>
    </Box>
  );
}

export default FloatButton;
