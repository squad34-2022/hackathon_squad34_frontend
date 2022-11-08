import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Courses from "./pages/Courses/Courses";
import Dashboard from "./pages/Dashboard/Dashboard";
import Trilhas from "./pages/Trilhas/";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import theme from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trilhas" element={<Trilhas />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
