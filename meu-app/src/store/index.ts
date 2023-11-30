import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./modules/root.reducer";
import rootReducer from "./modules/root.reducer";




export const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;