import { useEffect } from "react";
import { listarPokemons } from "../store/modules/pokemons/actions";
import { useAppDispatch } from "../store/hooks";
import ListarPokemons from "../components/ListarPokemons";
import BotaoPaginacao from "../components/BotaoPaginacao";
import AppBarStyled from "../components/AppBarStyled";
import FloatButton from "../components/FloatButton";

function Home() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listarPokemons(0))
    }, [])


    return (
        <>
            <AppBarStyled />
            <ListarPokemons />
            <BotaoPaginacao />
            <FloatButton />
        </>
    )
    
}

export default Home