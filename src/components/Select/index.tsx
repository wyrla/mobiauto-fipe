import { Select as MuiSelect, SelectProps as MuiSelectProps } from "@mui/material";

export const Select = ({children, ...props}: MuiSelectProps) => {
  return <MuiSelect {...props}>{children}</MuiSelect>;
}