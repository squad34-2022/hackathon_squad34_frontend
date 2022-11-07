import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "./navbar.css";

// to-do:
// criar verificação de usuário logado para mostrar a navbar
// conectar as rotas do menu dinamicamente (usar react-router-dom?)

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navbar-bg-color">
          <Typography
            className="navbar-h6"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            🍊 Orange Evolution
          </Typography>
          <a href="/">
            <Button className="navbar-menu" color="inherit">
              Home
            </Button>
          </a>
          <a href="/trilhas">
            <Button className="navbar-menu" color="inherit">
              Trilhas
            </Button>
          </a>
          <a href="/">
            <Button className="navbar-menu" color="inherit">
              Sair
            </Button>
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
