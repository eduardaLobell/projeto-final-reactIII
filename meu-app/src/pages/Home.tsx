import { Box } from '@mui/material';
import { useEffect } from "react";
import AppBarStyled from "../components/AppBarStyled";
import BotaoPaginacao from "../components/BotaoPaginacao";
import FloatButton from "../components/FloatButton";
import Footer from "../components/Footer";
import ListarPokemons from "../components/ListarPokemons";
import { useAppDispatch } from "../store/hooks";
import { listarPokemons } from "../store/modules/pokemons/actions";


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
            <FloatButton />
            <Footer />
        </Box>
            
        </>
    )
    
}

export default Home