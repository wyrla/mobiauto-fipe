import { styled } from "@mui/material";

export const HomePageWrapper = styled("div")`
  ${({ theme }) => `
    background: ${theme.palette.background.default};
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`