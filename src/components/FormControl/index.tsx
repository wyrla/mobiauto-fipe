import { FormControl as MuiFormControl, FormControlProps as MuiFormControlProps } from "@mui/material";

export const FormControl = ({children, ...props}: MuiFormControlProps) => {
  return <MuiFormControl {...props}>{children}</MuiFormControl>;
}