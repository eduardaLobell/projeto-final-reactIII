import { combineReducers } from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemons/pokemons.slice";

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});

export default rootReducer;