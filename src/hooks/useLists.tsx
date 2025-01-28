import { selectBrandList, setBrandsList } from "../store/slices/listSlice"
import { getBrands } from "../api/_fipe";
import { useAppDispatch, useAppSelector } from "../store";

export const useLists = () => {
  const dispatch = useAppDispatch()
  const brands = useAppSelector(selectBrandList);
  
  const fetchBrands = async () => {
    const brands = await getBrands();
    dispatch(setBrandsList(brands));
  }

  return {
    brands,

    fetchBrands
  }
} 