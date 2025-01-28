import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FipeItem } from "../../api/fipe";
import { RootState } from "../store";

interface QuoteState {
  form: {
    brand: FipeItem | null;
    model: FipeItem | null;
    year: FipeItem | null;
  };
  lists: {
    brands: FipeItem[];
    models: FipeItem[];
    yearsByModel: FipeItem[];
  };
}

const initialState: QuoteState = {
  form: {
    brand: null,
    model: null,
    year: null,
  },
  lists: {
    brands: [],
    models: [],
    yearsByModel: [],
  },
};

export type FormKeys = keyof (typeof initialState)["form"];

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setFormData: (
      state,
      action: PayloadAction<{
        field: FormKeys;
        value: FipeItem;
      }>
    ) => {
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.field]: { ...action.payload.value },
        },
      };
    },
    setBrandsList: (state, action: PayloadAction<FipeItem[]>) => {
      state.lists.brands = action.payload;
    },
    setModelsList: (state, action: PayloadAction<FipeItem[]>) => {
      state.lists.models = action.payload;
    },
    setYearsByModelList: (state, action: PayloadAction<FipeItem[]>) => {
      state.lists.yearsByModel = action.payload;
    },
  },
});

export const {
  setBrandsList,
  setFormData,
  setModelsList,
  setYearsByModelList,
} = quoteSlice.actions;

export const selectFormData = (state: RootState) => state.quote.form;
export const selectBrandList = (state: RootState) => state.quote.lists.brands;
export const selectModelsList = (state: RootState) => state.quote.lists.models;
export const selectYearsByModelList = (state: RootState) =>
  state.quote.lists.yearsByModel;

export default quoteSlice.reducer;
