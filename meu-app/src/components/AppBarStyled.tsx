import { ImageList, ImageListItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

function AppBarStyled() {
  
  return (
    <Box  justifyContent="center" textAlign="center" sx={{ flexGrow: 1, marginBottom: 5 }}>
      <AppBar position="static" sx={{ py: 1.25, backgroundColor: "#9b0505" }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
            <ImageList sx={{width: 200, display: {xs: 'none', sm: "block"}}} >
              <ImageListItem >
                <img src="\src\assets\pokemon-logo-8.png" alt=""/>
              </ImageListItem>
            </ImageList>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default AppBarStyled;
