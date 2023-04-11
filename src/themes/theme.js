import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#10B1BB'
    },
    text: {
      primary: '#282828',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Inter, sans-serif',
      textTransform: 'none',
      fontSize: 16,
    },
  }
});