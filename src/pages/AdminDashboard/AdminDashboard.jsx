import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

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
  const [action, setAction] = useState("add");

  const [edit, setEdit] = useState();
  const [openModalTrail, setOpenModalTrail] = useState(false);
  const handleCloseModalTrail = () => setOpenModalTrail(false);
  const handleOpenModalTrail = () => setOpenModalTrail(true);

  const { user } = useContext(AuthContext);

  async function onDeleteCourse(id) {
    try {
      await CourseServices.remove(id);
      location.reload();
      toast.success("Curso deletado!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao deletar curso!");
    }
  }

  async function onDeleteTrail(id) {
    try {
      await TrailServices.remove(id);
      toast.success("Trilha deletada!");
      location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Erro ao deletar trilha!");
    }
  }

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
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        mt={12}
        gap={4}
      >
        <Grid item xs={12} xl={4} lg={4} md={4} sm={12}>
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
              sx={{ borderRadius: 4, mr: 2, mt: 4 }}
              variant="contained"
              onClick={() => {
                setAction("add");
                handleOpenModalTrail();
              }}
            >
              Adicionar Trilha
            </Button>
            <Button
              sx={{ borderRadius: 4, mt: 4 }}
              variant="contained"
              onClick={() => {
                setAction("add");
                handleOpenModalCourse();
              }}
            >
              Adicionar Curso
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          xl={7}
          lg={7}
          md={7}
          sm={12}
          alignItems="center"
          textAlign="center"
        >
          <Box>
            <Typography variant="h1">Cursos e Trilhas</Typography>
            <Accordion className="accordion-trails-courses">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">Trilhas</Typography>
              </AccordionSummary>
              {trails?.map(({ _id, title, description }) => (
                <Grid
                  container
                  key={_id}
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    p: 1,
                    mt: 1,
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    border: 1,
                  }}
                >
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <AccordionDetails>
                      <Typography>{title}</Typography>
                    </AccordionDetails>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box>
                      <Button
                        sx={{ borderRadius: 2, mr: "2" }}
                        variant="contained"
                        size="small"
                        className="admin-dash-btn"
                        onClick={() => {
                          handleOpenModalTrail();
                          setAction("edit");
                          setEdit({ _id, title, description });
                        }}
                      >
                        Atualizar
                      </Button>
                      <Button
                        sx={{ borderRadius: 2, mr: 2 }}
                        onClick={() => onDeleteTrail(_id)}
                        variant="contained"
                        size="small"
                      >
                        Deletar
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              ))}
            </Accordion>
            <Accordion className="accordion-trails-courses">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">Cursos</Typography>
              </AccordionSummary>
              {courses?.map(({ _id, trail, title, author, type, link }) => (
                <Box
                  key={_id}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <AccordionDetails sx={{ width: "100%" }}>
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        border: 1,
                        p: 1,
                        width: "100%",
                      }}
                    >
                      <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                        <Chip label={trail?.title} />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Typography sx={{ p: 1, m: 1 }}>{title}</Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                        <Typography sx={{ p: 1, m: 1 }}>{author}</Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Box
                          sx={{
                            p: 1,
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Button
                            sx={{ borderRadius: 2 }}
                            variant="contained"
                            size="small"
                            className="admin-dash-btn"
                            onClick={() => {
                              handleOpenModalCourse();
                              setAction("edit");
                              setEdit({
                                _id,
                                trail,
                                title,
                                author,
                                type,
                                link,
                              });
                            }}
                          >
                            Atualizar
                          </Button>
                          <Button
                            sx={{ borderRadius: 2 }}
                            onClick={() => onDeleteCourse(_id)}
                            variant="contained"
                            size="small"
                          >
                            Deletar
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Box>
              ))}
            </Accordion>
          </Box>
        </Grid>

        <ModalCursos
          open={openModalCourse}
          handleClose={handleCloseModalCourse}
          trails={trails}
          action={action}
          edit={edit}
        />
        <ModalTrilhas
          open={openModalTrail}
          handleClose={handleCloseModalTrail}
          action={action}
          edit={edit}
        />
      </Grid>
    </>
  );
}

export default AdminDashboard;
