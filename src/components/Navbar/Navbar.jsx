import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import "./navbar.css";

export default function Navbar() {
  const { singOut, user } = React.useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar className="navbar-bg-color">
          <Typography
            className="navbar-h6"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            🍊 Orange Evolution
          </Typography>
          <a href="/dashboard" className="text-dec-none">
            <Button className="navbar-menu">Home</Button>
          </a>
          <a href="/trilhas" className="text-dec-none">
            <Button className="navbar-menu" color="inherit">
              Trilhas
            </Button>
          </a>
          {user?.email.includes("@fcamara") && (
            <Button
              className="navbar-menu"
              color="inherit"
              onClick={() => {
                navigate("/admin");
              }}
            >
              Admin
            </Button>
          )}
          <Button className="navbar-menu" color="inherit" onClick={singOut}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
