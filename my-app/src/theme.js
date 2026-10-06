import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0B7285",
      dark: "#075766",
      light: "#E4F4F5",
    },

    secondary: {
      main: "#2F9E72",
    },

    background: {
      default: "#F5F8FA",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#173042",
      secondary: "#607482",
    },
  },

  typography: {
    fontFamily: "'Manrope', 'Segoe UI', sans-serif",

    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },

    h2: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },

    h3: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 800,
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
});

export default theme;