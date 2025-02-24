import { styled } from "@mui/material";
import { Card } from "../../components";

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
