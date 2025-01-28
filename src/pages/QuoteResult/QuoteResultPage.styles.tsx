import { styled } from "@mui/material";
import { Chip } from "../../components/Chip";

export const QuoteResultPageWrapper = styled("div")`
  ${() => `
    height: 100vh;
    background: #DCF5F2;
    display: flex;
    justify-content: center;
    align-items: center;

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  `}
`
export const CustomChip = styled(Chip)`
  font-weight: 700;
  min-height: 2.1rem;
`