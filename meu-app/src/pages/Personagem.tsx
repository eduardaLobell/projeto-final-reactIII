import AppBarStyled from "../components/AppBarStyled";
import BotaoHome from "../components/BotaoHome";
import PokemonDetalhes from "../components/PokemonDetalhes";

function Personagem () {
    return (
        <>
            <AppBarStyled />
            <PokemonDetalhes />
            <BotaoHome />
        </>
    )
}

export default Personagem;