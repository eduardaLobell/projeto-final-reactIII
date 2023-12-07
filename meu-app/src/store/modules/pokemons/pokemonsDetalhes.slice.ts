import { createSlice } from "@reduxjs/toolkit";
import { listarPorId } from "./actions.detalhes";


export interface PokemonDetalhes {
    id: number
    nome: string
    tamanho: string
    imagemURL: string
    habilidades: Habilidade[]
    //stats: string[]
}

interface Habilidade {
    nome: string,
}

const initialState: PokemonDetalhes = {
    id: 0,
    nome: '',
    tamanho: '',
    imagemURL: '',
    habilidades: [],
    //stats: []
}


const pokemonDetalhesSlice = createSlice ({
    name: 'pokemonDetalhes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(listarPorId.fulfilled, (state, action) => {
            if(!action.payload) return


            state.id = action.payload.id
            state.nome = action.payload.nome
            state.habilidades = action.payload.habilidades
            state.imagemURL = action.payload.imagemURL
            state.tamanho = action.payload.tamanho
            return state
        })
    }
})

export default pokemonDetalhesSlice.reducer