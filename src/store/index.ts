import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createSelectorHook } from "react-redux";
import GamesReducer from "./modules/Games";

const rootReducer = combineReducers({
  games: GamesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector = createSelectorHook();
const store = configureStore({ reducer: rootReducer });

export default store;
