import { selectBrandList, setBrandsList } from "../store/slices/listSlice"
import { useAppDispatch, useAppSelector } from "../store";
import { api } from "../api/fipe";

export const useLists = () => {
  const dispatch = useAppDispatch()
  const brands = useAppSelector(selectBrandList);
  
  const fetchBrands = async () => {
    const { data }= await dispatch(api.endpoints.getBrands.initiate());
    dispatch(setBrandsList(data!));
  }

  return {
    brands,

    fetchBrands
  }
} 