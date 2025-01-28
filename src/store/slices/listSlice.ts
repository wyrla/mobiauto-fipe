import { createSlice } from "@reduxjs/toolkit";
import { FipeItem } from "../../api/fipe";
interface ListState {
  brands: FipeItem[];
  models: FipeItem[];
  yearsByModel: FipeItem[];
}

const initialState: ListState = {
  brands: [],
  models: [],
  yearsByModel: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setBrandsList: (state, action) => {
      state.brands = action.payload;
    },
    setModelsList: (state, action) => {
      state.models = action.payload;
    },
    setYearsByModelList: (state, action) => {
      state.yearsByModel = action.payload;
    },
  }
});

export const { setBrandsList, setModelsList, setYearsByModelList } = listSlice.actions

export default listSlice.reducer