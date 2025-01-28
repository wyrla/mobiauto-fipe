import { useAppSelector } from "../store";
import {
  selectBrand,
  selectModel,
  selectYear,
} from "../store/slices/formSlice";

export const useForm = () => {
  const brand = useAppSelector(selectBrand);
  const model = useAppSelector(selectModel);
  const year = useAppSelector(selectYear);

  return {
    brand,
    model,
    year,
  };
};
