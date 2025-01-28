import { styled } from "@mui/material";
import { Card } from "../../components";

export const HomePageWrapper = styled("div")`
  ${({ theme }) => `
    background: ${theme.palette.background.default};
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

export const CustomCard = styled(Card)`
  ${({ theme }) => `
    width: 30%;
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 1rem;
    //  min-height: 2rem;

    form {
      width: 80%;
    }
  `}
`