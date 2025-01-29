import MuiAlert, { AlertProps as MuiAlertProps } from "@mui/material/Alert";

export const Alert = ({ children, ...props }: MuiAlertProps) => {
  return <MuiAlert {...props}>{children}</MuiAlert>;
};
