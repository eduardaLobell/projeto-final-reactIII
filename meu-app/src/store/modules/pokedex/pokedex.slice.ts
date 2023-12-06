import { createSlice } from "@reduxjs/toolkit";



export interface Pokedex {
    id: number
    nome: string
    imagemURL: string
    
}

const pokedexSlice = createSlice ({
    name: 'pokedex',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(listarPorId.fulfilled, (state, action) => {
            if(!action.payload) return


            state = action.payload
        })
    }
})

export default pokedexSlice.reducer 