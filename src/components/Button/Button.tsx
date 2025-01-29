import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

export const Button = ({ children, ...props }: MuiButtonProps) => {
  return <MuiButton {...props}>{children}</MuiButton>;
};
