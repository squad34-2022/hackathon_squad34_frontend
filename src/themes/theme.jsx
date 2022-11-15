import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5A23",
    },
    secondary: {
      main: "#F5F5F5",
    },
    text: {
      primary: "#FF5A23",
      secondary: "#6c6767",
    },
    link: {
      primary: "#01579b",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFF",
          borderRadius: "0",
          backgroundColor: "#FF5A23",
          textTransform: "none",
          fontWeight: "bold",
          paddingTop: "12px",
          paddingBottom: "12px",
          ":hover": {
            backgroundColor: "#FF8A63",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          required: false,
        },
        required: true,
      },
    },
  },
  typography: {
    h1: {
      fontSize: "4.5rem",
      "@media (max-width:600px)": {
        fontSize: "3rem",
      },
    },
  },
});

export default theme;
