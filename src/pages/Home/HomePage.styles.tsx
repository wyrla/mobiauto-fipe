import { styled } from "@mui/material";
import { Card } from "../../components";

export const HomePageWrapper = styled("div")`
  ${({ theme }) => `
    background: ${theme.palette.background.default};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;


    main {
      width: 30%;
      display: flex;
      justify-content: center;
      gap: 1rem;

    flex-direction: column;
      align-items: center;
    }
  `}
`;

export const CustomCard = styled(Card)`
  ${() => `
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 1rem;

      form {
        width: 80%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
  `}
`;
