import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import "./navbar.css";

// to-do:
// criar verificação de usuário logado para mostrar a navbar
// conectar as rotas do menu dinamicamente (usar react-router-dom?)

export default function Navbar() {
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
          <a href="/">
            <Button className="navbar-menu">Home</Button>
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
