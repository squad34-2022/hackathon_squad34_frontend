import { Typography, Grid, Box, Button } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import "./adminDashboard.css";

function AdminDashboard() {
  return (
    <>
      <Navbar />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} alignItems="center">
          <Box>
            <Typography variant="h1" className="admin-dash-h1">
              Olá, administrador(a)
            </Typography>
            <Typography variant="h5">O que você quer fazer hoje?</Typography>
          </Box>
          <Box>
            <Button variant="contained" className="admin-dash-btn mg-top">
              Adicionar Trilha
            </Button>
            <Button variant="contained" className="mg-top">
              Adicionar Curso
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default AdminDashboard;
