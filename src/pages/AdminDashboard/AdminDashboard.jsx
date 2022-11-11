import {
  Typography,
  Grid,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./adminDashboard.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
        <Grid item xs={6} alignItems="center" textAlign="center" marginTop={12}>
          <Box>
            <Typography variant="h1">Olá, administrador(a)</Typography>
            <Typography variant="h5" className="color-white">
              O que você quer fazer hoje?
            </Typography>
          </Box>
          <Box>
            <Button variant="contained" className="mg-top admin-dash-btn">
              Adicionar Trilha
            </Button>
            <Button variant="contained" className="mg-top">
              Adicionar Curso
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6} alignItems="center" textAlign="center" marginTop={12}>
          <Box>
            <Typography variant="h1">Cursos e Trilhas</Typography>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">Trilhas</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography textAlign="center">
                    Desenvolvimento Full Stack
                  </Typography>
                  <Box>
                    <Button
                      variant="contained"
                      size="small"
                      className="admin-dash-btn"
                    >
                      Atualizar
                    </Button>
                    <Button variant="contained" size="small">
                      Deletar
                    </Button>
                  </Box>
                </Box>
              </AccordionDetails>

              <AccordionDetails>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography textAlign="center">UX/UI Design</Typography>
                  <Box>
                    <Button
                      variant="contained"
                      size="small"
                      className="admin-dash-btn"
                    >
                      Atualizar
                    </Button>
                    <Button variant="contained" size="small">
                      Deletar
                    </Button>
                  </Box>
                </Box>
              </AccordionDetails>

              <AccordionDetails>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography textAlign="center">
                    QA (Quality Assurance)
                  </Typography>
                  <Box>
                    <Button
                      variant="contained"
                      size="small"
                      className="admin-dash-btn"
                    >
                      Atualizar
                    </Button>
                    <Button variant="contained" size="small">
                      Deletar
                    </Button>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">Cursos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Chip label="Full Stack" />
                  <Typography textAlign="center">
                    Migração de Carreira
                  </Typography>
                  <Typography textAlign="center">FCamara</Typography>
                  <Box>
                    <Button
                      variant="contained"
                      size="small"
                      className="admin-dash-btn"
                    >
                      Atualizar
                    </Button>
                    <Button variant="contained" size="small">
                      Deletar
                    </Button>
                  </Box>
                </Box>
              </AccordionDetails>

              <AccordionDetails>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Chip label="UX/UI Design" />
                  <Typography textAlign="center">Culture Code</Typography>
                  <Typography textAlign="center">Orange Juice</Typography>
                  <Box>
                    <Button
                      variant="contained"
                      size="small"
                      className="admin-dash-btn"
                    >
                      Atualizar
                    </Button>
                    <Button variant="contained" size="small">
                      Deletar
                    </Button>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default AdminDashboard;
