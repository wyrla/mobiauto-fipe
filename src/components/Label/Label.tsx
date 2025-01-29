import {
  InputLabel as MuiInputLabel,
  InputLabelProps as MuiInputLabelProps,
} from "@mui/material";

export const Label = ({ children, ...props }: MuiInputLabelProps) => {
  return <MuiInputLabel {...props}>{children}</MuiInputLabel>;
};
