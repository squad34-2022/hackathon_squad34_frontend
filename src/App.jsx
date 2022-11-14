import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/Auth";
import Rotas from "./routes";
import theme from "./themes/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Rotas />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
