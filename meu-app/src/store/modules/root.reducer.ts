import { combineReducers } from "@reduxjs/toolkit";
import pokedexSlice from './pokedex/pokedex.slice';
import pokemonSlice from './pokemon/pokemon.slice';
import pokemonsSlice from './pokemons/pokemons.slice';

const rootReducer = combineReducers({
  pokemons: pokemonsSlice,
  pokemonDetalhes: pokemonSlice,
  pokedex: pokedexSlice
});

export default rootReducer;