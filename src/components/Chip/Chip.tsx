import { Chip as MuiChip, ChipProps as MuiChipProps } from "@mui/material";

export const Chip = ({ ...props }: MuiChipProps) => {
  return <MuiChip {...props}></MuiChip>;
};
