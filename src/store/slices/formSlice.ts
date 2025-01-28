import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FipeItem } from "../../api/fipe";
import { RootState } from "../store";

interface FormState {
  brand: FipeItem | null;
  model: FipeItem | null;
  year: FipeItem | null;
}

const initialState: FormState = {
  brand: null,
  model: null,
  year: null,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setBrand: (state, action: PayloadAction<FipeItem>) => {
      return { brand: action.payload, model: null, year: null };
    },
    setModel: (state, action: PayloadAction<FipeItem>) => {
      return { ...state, model: action.payload };
    },
    setModelYear: (state, action: PayloadAction<FipeItem>) => {
      return { ...state, year: action.payload };
    },
  },
});

export const { setBrand, setModel, setModelYear } = formSlice.actions

export default formSlice.reducer

export const selectBrand = (state: RootState) => state.form.brand;
export const selectModel = (state: RootState) => state.form.model;
export const selectYear = (state: RootState) => state.form.year;