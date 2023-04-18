import {
  createSlice,
} from "@reduxjs/toolkit";
import gamesData from "../data/games.json";

interface FactsState {
  games: any[];
}

const initialState: FactsState = {
  games: gamesData,
};

const GamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
});

export default GamesSlice.reducer;
