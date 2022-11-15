import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentPage from "../components/ContentPage/ContentPage";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import Courses from "../pages/Courses/Course";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TesteConexao from "../pages/TesteConexao/TesteConexao";
import Trilhas from "../pages/Trilhas/Trilhas";
import { AdminRoute } from "./adminRoute";
import { PrivateRoute } from "./privateRoute";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/trilhas" element={<Trilhas />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/cursos"
          element={
            <PrivateRoute>
              <Courses />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            </PrivateRoute>
          }
        />
        <Route path="/conteudo" element={<ContentPage />} />
        <Route path="/testeconexao" element={<TesteConexao />} />
      </Routes>
    </BrowserRouter>
  );
}
