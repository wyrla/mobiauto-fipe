import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from "@mui/material";

export const MenuItem = ({ children, ...props }: MuiMenuItemProps) => {
  return <MuiMenuItem {...props}>{children}</MuiMenuItem>;
};
