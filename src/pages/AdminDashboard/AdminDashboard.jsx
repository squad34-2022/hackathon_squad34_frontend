import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AccordionDetailsCourses from "../../components/AccordionDetailsAdminDash/AccordionDetailsCourses";
import AccordionDetailsTrails from "../../components/AccordionDetailsAdminDash/AccordionDetailsTrails";
import ModalCursos from "../../components/ModalCursos/ModalCursos";
import ModalTrilhas from "../../components/ModalTrilhas/ModalTrilhas";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../context/Auth";
import CourseServices from "../../services/coursesServices";
import TrailServices from "../../services/trailServices";
import "./adminDashboard.css";

function AdminDashboard() {
  const [openModalCourse, setOpenModalCourse] = useState(false);
  const handleCloseModalCourse = () => setOpenModalCourse(false);
  const handleOpenModalCourse = () => setOpenModalCourse(true);

  const [trails, setTrails] = useState([]);
  const [courses, setCourses] = useState([]);

  const [openModalTrail, setOpenModalTrail] = useState(false);
  const handleCloseModalTrail = () => setOpenModalTrail(false);
  const handleOpenModalTrail = () => setOpenModalTrail(true);

  const { user } = useContext(AuthContext);

  const onDelete = (_id) => {
    TrailServices.remove(_id);
    CourseServices.remove(_id);
    location.reload();
  };

  useEffect(() => {
    TrailServices.getAll()
      .then(({ data }) => setTrails(data))
      .catch((error) => console.log(error));

    CourseServices.getAll()
      .then(({ data }) => setCourses(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <Grid container direction="row" justifyContent="space-around">
        <Grid item xs={2} mt={12}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h1">Olá, {user?.name}</Typography>
            <Typography variant="h5">O que você quer fazer hoje?</Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              className="mg-top admin-dash-btn"
              onClick={handleOpenModalTrail}
            >
              Adicionar Trilha
            </Button>
            <Button
              variant="contained"
              className="mg-top"
              onClick={handleOpenModalCourse}
            >
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
              {trails?.map(({ _id, title }) => (
                <Box
                  key={_id}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <AccordionDetailsTrails key={_id} title={title} />
                  <Box>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={handleOpenModalTrail}
                      className="admin-dash-btn"
                    >
                      Atualizar
                    </Button>
                    <Button
                      onClick={() => onDelete(_id)}
                      variant="contained"
                      size="small"
                    >
                      Deletar
                    </Button>
                  </Box>
                </Box>
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
              {courses?.map(({ _id, trail, title, author }) => (
                <Box
                  key={_id}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <AccordionDetailsCourses
                    key={_id}
                    title={title}
                    trail={trail}
                    author={author}
                  />
                  <Box>
                    <Button
                      variant="contained"
                      size="small"
                      className="admin-dash-btn"
                    >
                      Atualizar
                    </Button>
                    <Button
                      onClick={() => onDelete(_id)}
                      variant="contained"
                      size="small"
                    >
                      Deletar
                    </Button>
                  </Box>
                </Box>
              ))}
            </Accordion>
          </Box>
        </Grid>
        <ModalCursos
          open={openModalCourse}
          handleClose={handleCloseModalCourse}
          trails={trails}
        />
        <ModalTrilhas
          open={openModalTrail}
          handleClose={handleCloseModalTrail}
        />
      </Grid>
    </>
  );
}

export default AdminDashboard;
