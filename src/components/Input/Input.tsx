import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

export const Input = ({ children, ...props }: MuiTextFieldProps) => {
  return <MuiTextField {...props}>{children}</MuiTextField>;
};
