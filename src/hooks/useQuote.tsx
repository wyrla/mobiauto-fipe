import { useAppDispatch, useAppSelector } from "../store";
import {
  QuoteState,
  selectModelsList,
  selectYearsByModelList,
} from "../store/slices/quoteSlice";
import { selectFormData, setFormData } from "../store/slices/quoteSlice";

export const useQuote = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(selectFormData);
  const models = useAppSelector(selectModelsList);
  const years = useAppSelector(selectYearsByModelList);

  const handleFormData = (data: QuoteState["form"]) => {
    dispatch(setFormData(data));
  };

  return {
    formData,
    models,
    years,

    handleFormData,
  };
};
