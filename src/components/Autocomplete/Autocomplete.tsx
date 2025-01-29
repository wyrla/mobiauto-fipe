import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material";
import { Input } from "../Input";
import { FipeItem } from "../../api/fipe";

type AutocompleteProps = Omit<
  MuiAutocompleteProps<FipeItem, false, false, false>,
  "renderInput"
> & {
  label: string;
};

export const Autocomplete = ({ label, ...props }: AutocompleteProps) => {
  return (
    <MuiAutocomplete
      {...props}
      getOptionLabel={(option) => option.nome}
      isOptionEqualToValue={(option, value) => option.codigo === value.codigo}
      renderInput={(params) => <Input {...params} label={label} />}
    />
  );
};
