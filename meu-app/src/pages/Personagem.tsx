import { Box } from "@mui/material";
import AppBarStyled from "../components/AppBarStyled";
import BotaoHome from "../components/BotaoHome";
import PokemonDetalhes from "../components/PokemonDetalhes";

function Personagem() {
    return (
        <>
            <Box component="main" height="100%" width="100%" bgcolor="#539291">
                <AppBarStyled />
                <PokemonDetalhes />
                <BotaoHome />
            </Box>
        </>
    )
}

export default Personagem;