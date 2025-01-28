import { FipeItem } from "../api/fipe";
import { useAppDispatch, useAppSelector } from "../store";
import {
  FormKeys,
  selectBrand,
  selectModel,
  selectYear,
  setBrand,
  setModel,
  setModelYear,
} from "../store/slices/formSlice";

export const useForm = () => {
  const dispatch = useAppDispatch();
  const brand = useAppSelector(selectBrand);
  const model = useAppSelector(selectModel);
  const year = useAppSelector(selectYear);

  const setValue = (key: FormKeys, value: FipeItem) => {
    const actions = {
      brand: setBrand,
      model: setModel,
      year: setModelYear,
    };

    dispatch(actions[key](value));
  };

  return {
    brand,
    model,
    year,

    setValue,
  };
};
