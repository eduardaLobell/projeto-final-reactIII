import { createSlice } from "@reduxjs/toolkit";
import { listarPorId } from "./actions";

export interface PokemonDetalhes {
  isLoading: boolean;
  id: number;
  nome: string;
  imagemURL: string;
  habilidades: string[];
  baseExpirience: number;
  stats: Stat[];
  altura: number;
  largura: number;
}

export interface Stat {
  baseStat: number;
  nome: string;
}

const initialState: PokemonDetalhes = {
  isLoading: false,
  id: 0,
  nome: "",
  imagemURL: "",
  habilidades: [],
  baseExpirience: 0,
  stats: [],
  altura: 0,
  largura: 0,
};

const pokemonSlice = createSlice({
  name: "pokemonDetalhes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listarPorId.pending, (state) => {
      state.isLoading = true;
      console.log("buscando...");
    });
    builder.addCase(listarPorId.fulfilled, (state, action) => {
      state.isLoading = false;
      if (!action.payload) return;

      state.id = action.payload.id;
      state.nome = action.payload.nome;
      state.imagemURL = action.payload.imagemURL;
      state.habilidades = action.payload.habilidades;
      state.baseExpirience = action.payload.baseExpirience;
      state.stats = action.payload.stats;
      state.altura = action.payload.altura;
      state.largura = action.payload.largura;
      return state;
    });
  },
});

export default pokemonSlice.reducer;
