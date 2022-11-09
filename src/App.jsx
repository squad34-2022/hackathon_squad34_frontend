import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "./pages/Courses/Course";
import Dashboard from "./pages/Dashboard/Dashboard";
import Trilhas from "./pages/Trilhas/";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import theme from "./themes/theme";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import ContentPage from "./components/ContentPage/ContentPage";
import TesteConexao from "./pages/TesteConexão/TesteConexao";

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
    </ThemeProvider>
  );
}

export default App;
