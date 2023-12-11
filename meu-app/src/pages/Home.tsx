import { useEffect } from "react";
import { listarPokemons } from "../store/modules/pokemons/actions";
import { useAppDispatch } from "../store/hooks";
import ListarPokemons from "../components/ListarPokemons";
import BotaoPaginacao from "../components/BotaoPaginacao";
import AppBarStyled from "../components/AppBarStyled";
import FloatButton from "../components/FloatButton";
import { Box } from '@mui/material'


function Home() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listarPokemons(0))
    }, [])


    return (
        <>
        <Box component="main" height="100%" width="100%" bgcolor="#6e6d6d">
            <AppBarStyled />
            <ListarPokemons />
            <BotaoPaginacao />
            <FloatButton />
        </Box>
            
        </>
    )
    
}

export default Home