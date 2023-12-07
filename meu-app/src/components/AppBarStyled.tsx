import SearchIcon from "@mui/icons-material/Search";
import { Avatar, ImageList, ImageListItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
// import useDebounce from "./utils/hooks/UseDebounce";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function AppBarStyled() {
  
  const [searchInput, setSearchInput] = useState("");
  // const [rows, setRows] = useState(Search);
  // const debouncedValue = useDebounce(searchInput, 700);

  // useEffect(() => {
  //   if (searchInput) {
  //     const filteredPoke = pokemons.filter((item) =>
  //     item.goal.toLowerCase().includes(searchInput.toLowerCase()),
  //     );
  //     setRows(filteredPoke);
  //   } else {
  //     setRows(pokemons.slice);
  //   }
  // }, [debouncedValue, searchInput, rows]);

  return (
    <Box  justifyContent="center" textAlign="center" sx={{ flexGrow: 1, marginBottom: 5 }}>
      <AppBar position="static" sx={{ py: 1.25, backgroundColor: "#9b0505" }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          {/* <Avatar alt="icon pokemon" src="src/assets/pokemon-icon.svg" /> */}
            <ImageList sx={{width: 200, display: {xs: 'none', sm: "block"}}} >
              <ImageListItem >
                <img src="src\assets\pokemon-logo-8.png" alt=""  />
              </ImageListItem>
            </ImageList>
          {/* <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
          Pokémon
          </Typography> */}
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ "aria-label": "search" }}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              required
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default AppBarStyled;
