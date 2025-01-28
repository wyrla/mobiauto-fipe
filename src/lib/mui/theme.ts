import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#F9F6FC"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "#5D00BF"
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: ".4rem 0"
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: "#00A38C",
          color: "#fff",
          fontSize: "1rem",
        }
      },
    }
  },
  typography:{
    fontFamily: "Roboto",
    h1: {
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "0.875",
    },
    caption: {
      color: "#747474"
    }
  }
})