import {
  createAsyncThunk,
  createReducer,
  SerializedError,
} from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Item, ResponseAPI } from "./types";
import service from "../services";

const noMatchErr = "No items matching your search";

export interface DataState {
  results: ResponseAPI | undefined;
  list: Item[];
  searchStatus: "idle" | "loading" | "failed" | "succeeded";
  nextPageStatus: "idle" | "loading" | "failed" | "succeeded";
  error: SerializedError | string | undefined;
}

const initialState: DataState = {
  results: undefined,
  list: [],
  searchStatus: "idle",
  nextPageStatus: "idle",
  error: undefined,
};

export const searchProducts = createAsyncThunk(
  "data/searchProducts",
  async (_: void, { getState }) => {
    const { minPrice, maxPrice, keywords } = (getState() as RootState).settings;

    const response = await service.searchByKeywords({
      keywords,
      minPrice,
      maxPrice,
      pageNumber: 1,
    });

    return response;
  }
);

export const loadMoreData = createAsyncThunk(
  "data/loadMoreData",
  async (_: void, { getState }) => {
    const state = getState() as RootState;
    const { minPrice, maxPrice, keywords } = state.settings;
    const currentPageNumber = Number(
      state.data.results?.findItemsByKeywordsResponse[0].paginationOutput[0]
        .pageNumber[0]
    );
    const pageNumber = currentPageNumber ? currentPageNumber + 1 : 1;
    const response = await service.searchByKeywords({
      keywords,
      minPrice,
      maxPrice,
      pageNumber,
    });

    return response;
  }
);

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(searchProducts.pending, (state) => {
      state.searchStatus = "loading";
      state.error = undefined;
    })
    .addCase(searchProducts.fulfilled, (state, action) => {
      state.searchStatus = "succeeded";
      state.results = action.payload;
      const items =
        state.results?.findItemsByKeywordsResponse[0].searchResult?.[0].item ||
        [];
      state.list = items;
      if (items.length === 0) state.error = noMatchErr;
    })
    .addCase(searchProducts.rejected, (state, action) => {
      state.searchStatus = "failed";
      state.error = action.error;
    })
    .addCase(loadMoreData.pending, (state) => {
      state.nextPageStatus = "loading";
    })
    .addCase(loadMoreData.fulfilled, (state, action) => {
      state.nextPageStatus = "succeeded";

      state.list = state.list.concat(
        action.payload?.findItemsByKeywordsResponse[0].searchResult?.[0].item ||
          []
      );

      state.results = action.payload;
    })
    .addCase(loadMoreData.rejected, (state, action) => {
      state.nextPageStatus = "failed";
      state.error = action.error;
    });
});

// Selectors related to data state
export const selectData = (state: RootState) => state.data.results;
export const selectList = (state: RootState) => state.data.list;
export const selectSearchStatus = (state: RootState) => state.data.searchStatus;
export const selectNextPageStatus = (state: RootState) =>
  state.data.nextPageStatus;
export const selectPagination = (state: RootState) =>
  state.data.results?.findItemsByKeywordsResponse[0].paginationOutput;
export const selectError = (state: RootState) => state.data.error;

export default dataReducer;
