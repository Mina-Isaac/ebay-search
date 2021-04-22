import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface SettingsState {
  minPrice: number | null;
  maxPrice: number | null;
  keywords: string;
}

const initialState: SettingsState = {
  minPrice: null,
  maxPrice: null,
  keywords: "",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setMinPrice: (state, action: PayloadAction<number | null>) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<number | null>) => {
      state.maxPrice = action.payload;
    },
    setKeywords: (state, action: PayloadAction<string>) => {
      state.keywords = action.payload;
    },
  },
});

export const { setMinPrice, setMaxPrice, setKeywords } = settingsSlice.actions;

export const selectMinPrice = (state: RootState) => state.settings.minPrice;
export const selectMaxPrice = (state: RootState) => state.settings.maxPrice;
export const selectKeywords = (state: RootState) => state.settings.keywords;

export default settingsSlice.reducer;
