import { FipeItem } from "../api/fipe";
import { useAppDispatch, useAppSelector } from "../store";
import {
  FormKeys,
} from "../store/slices/quoteSlice";
import { selectFormData, setFormData } from "../store/slices/quoteSlice";

export const useQuote = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(selectFormData);

  const handleFormData = (key: FormKeys, value: FipeItem) => {
    dispatch(setFormData({ field: key, value }));
  }

  return {
    formData,

    handleFormData
  };
};
