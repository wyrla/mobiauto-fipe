import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    setBrandsList: (state, action: PayloadAction<FipeItem[]>) => {
      state.brands = action.payload;
    },
    setModelsList: (state, action: PayloadAction<FipeItem[]>) => {
      state.models = action.payload;
    },
    setYearsByModelList: (state, action: PayloadAction<FipeItem[]>) => {
      state.yearsByModel = action.payload;
    },
  }
});

export const { setBrandsList, setModelsList, setYearsByModelList } = listSlice.actions

export default listSlice.reducer