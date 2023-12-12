import { useEffect } from "react";
import { listarPokemons } from "../store/modules/pokemons/actions";
import { useAppDispatch } from "../store/hooks";
import ListarPokemons from "../components/ListarPokemons";
import BotaoPaginacao from "../components/BotaoPaginacao";
import AppBarStyled from "../components/AppBarStyled";
import { Box } from '@mui/material'
import Footer from "../components/Footer";


function Home() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listarPokemons(0))
    }, [])


    return (
        <>
        <Box component="main" height="100%" width="100%" bgcolor="#589253">
            <AppBarStyled />
            <ListarPokemons />
            <BotaoPaginacao />
            
            <Footer />
        </Box>
            
        </>
    )
    
}

export default Home