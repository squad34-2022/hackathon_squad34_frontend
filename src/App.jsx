import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ContentPage from "./components/ContentPage/ContentPage";
import { AuthProvider } from "./context/AuthContext";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Course from "./pages/Courses/Course";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TesteConexao from "./pages/TesteConexao/TesteConexao";
import Trilhas from "./pages/Trilhas/Trilhas";
import { Rotas } from "./routes";
import theme from "./themes/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Rotas />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
          theme="colored"
        />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
