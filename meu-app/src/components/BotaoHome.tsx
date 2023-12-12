import { Box, Button } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from "react-router-dom";

function BotaoHome() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        sx={{ marginBottom: 3 }}
        color="error"
        variant="contained"
        onClick={() => handleClick()}
        aria-label="house"
      >
        <HomeRoundedIcon />
      </Button>
    </Box>
  );
}

export default BotaoHome;
