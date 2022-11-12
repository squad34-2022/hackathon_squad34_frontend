import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import AccordionDetailsCourses from "../../components/AccordionDetailsAdminDash/AccordionDetailsCourses";
import AccordionDetailsTrails from "../../components/AccordionDetailsAdminDash/AccordionDetailsTrails";
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

const titleTrails = [
  { title: "Desenvolvimento Full Stack" },
  { title: "UX/UI Design" },
  { title: "Quality Assurance (QA)" },
];
const titleCourses = [
  { trail: "Full Stack", title: "ReactJS", author: "Alura" },
  { trail: "Full Stack", title: "Migração de Carreira", author: "FCamara" },
  { trail: "UX/UI Design", title: "Culture Code", author: "FCamara" },
];

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
            <Typography variant="h5">O que você quer fazer hoje?</Typography>
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

              {titleTrails?.map(({ title }) => (
                <AccordionDetailsTrails key={title} title={title} />
              ))}
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">Cursos</Typography>
              </AccordionSummary>
              {titleCourses?.map(({ trail, title, author }) => (
                <AccordionDetailsCourses
                  title={title}
                  trail={trail}
                  author={author}
                />
              ))}
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default AdminDashboard;
