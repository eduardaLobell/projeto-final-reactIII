import pokemonSlice from './pokemon/pokemon.slice';
import { combineReducers } from "@reduxjs/toolkit";
import pokemonsSlice from './pokemons/pokemons.slice';

const rootReducer = combineReducers({
  pokemons: pokemonsSlice,
  pokemonDetalhes: pokemonSlice
});

export default rootReducer;