import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ContentPage from "./components/ContentPage/ContentPage";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Course from "./pages/Courses/Course";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TesteConexao from "./pages/TesteConexao/TesteConexao";
import Trilhas from "./pages/Trilhas/Trilhas";
import theme from "./themes/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/cursos" element={<Course />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trilhas" element={<Trilhas />} />
          <Route path="/conteudo" element={<ContentPage />} />
          <Route path="/testeconexao" element={<TesteConexao />} />
        </Routes>
      </BrowserRouter>
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
    </ThemeProvider>
  );
}

export default App;
