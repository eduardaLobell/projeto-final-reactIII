import { PayloadAction, createSlice } from "@reduxjs/toolkit";



export interface Pokedex {
    id: number
    nome: string
    imagemURL: string

}

const initialState: Pokedex[] = []

const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState,
    reducers: {
        addPokedex: (state, action: PayloadAction<Pokedex>) => {
            const pokemonExiste = state.findIndex(
                (pokemon) => pokemon.id == action.payload.id
            )
            if (pokemonExiste !== -1) {
                return
            }

            state = [...state, action.payload];

            return state;
        },
        // removerPokedex: (state, action: PayloadAction<{ id: number }>) => {

        // }
    },
})

export const { addPokedex } = pokedexSlice.actions;
export default pokedexSlice.reducer 