import { useEffect } from "react";
import { listarPokemons } from "../store/modules/pokemons/actions";
import { useAppDispatch } from "../store/hooks";
import ListarPokemons from "../components/ListarPokemons";

function Home() {
    const dispatch = useAppDispatch();

    const offset = 0 //useState
    // usar useParams / useSearchParams
    // funcao handleclick vai fazer mudar o offset e enviar para as actions
    // cuidar com null - 0
    // somar 20 e diminuir 20
    // duas funcoes



	useEffect(() => {
		dispatch(listarPokemons(offset));
	}, []);

    return (
        <>
            <h1>Home</h1>
            <ListarPokemons />
        </>
    )
    
}

export default Home