import { Typography as MuiTypography, TypographyProps, styled } from "@mui/material";

type CustomTypographyProps = TypographyProps & {
  $bold?: boolean;
}

const Typography = styled(MuiTypography)<CustomTypographyProps>`${({ $bold }) => `
  font-weight: ${$bold ? 700 : 400};
`}`

export const Text = ({children, ...props}: CustomTypographyProps) => {
  return <Typography {...props}>{children}</Typography>;
}