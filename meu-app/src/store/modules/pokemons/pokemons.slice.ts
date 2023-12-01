import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { listarPokemons } from "./actions"

export interface PokemonSumario {
    id: number
    nome: string
    tamanho: string
    imagemURL: string
    detalhesURL: string
    favorito: boolean
}

interface PokemonRetorno {
    count: number
    next: string | null
    previous: string | null
    pokemons: PokemonSumario[]
}


const initialState: PokemonRetorno = {
    count: 0,
    next: '',
    previous: null,
    pokemons: []
}


const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        // toggleFavorito: (state, action: PayloadAction<{ id: number }>) => {
        //     const temp = [...state.pokemons.favorito];
      
        //     const index = temp.findIndex((foto) => foto.id === action.payload.id);
      
        //     if (index !== -1) {
        //       // true = false
        //       // false = true
        //       temp[index].favorito = !temp[index].favorito;
        //     }
      
        //     state = [...temp];
        //   },
      

    }, // obrigatório
    extraReducers: (builder) => {
        builder.addCase(listarPokemons.fulfilled, (state, action) => {
            if(!action.payload) return


            state.count = action.payload.count;
            state.next = action.payload.next;
            state.previous = action.payload.previous;
            state.pokemons = action.payload.pokemons;
        })
    }
})


export default pokemonsSlice.reducer