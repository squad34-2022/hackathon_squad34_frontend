import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

export const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return null;
  }

  if (!user.email.includes("@fcamara")) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};
