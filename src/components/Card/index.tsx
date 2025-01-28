import { Card as MuiCard, CardProps as MuiCardProps } from "@mui/material";

export const Card = ({children, ...props}: MuiCardProps) => {
  return <MuiCard {...props}>{children}</MuiCard>;
}