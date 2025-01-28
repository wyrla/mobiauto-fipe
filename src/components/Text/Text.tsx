import { Typography, TypographyProps } from "@mui/material";

export const Text = ({children, ...props}: TypographyProps) => {
  return <Typography {...props}>{children}</Typography>;
}