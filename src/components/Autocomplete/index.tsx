import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material";
import { Input } from "../Input";

type AutocompleteProps = Omit<
  MuiAutocompleteProps<{ id: string; label: string }, false, false, false>,
  "renderInput"
> & {
  label: string;
};

export const Autocomplete = ({ label, ...props }: AutocompleteProps) => {
  return (
    <MuiAutocomplete
      {...props}
      renderInput={(params) => <Input {...params} label={label} />}
    />
  );
};
