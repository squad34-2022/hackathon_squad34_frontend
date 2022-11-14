import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
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
              onClick={() => {
                setAction("add");
                handleOpenModalTrail();
              }}
            >
              Adicionar Trilha
            </Button>
            <Button
              variant="contained"
              className="mg-top"
              onClick={() => {
                setAction("add");
                handleOpenModalCourse();
              }}
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
              {trails?.map(({ _id, title, description }) => (
                <Box
                  key={_id}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <AccordionDetailsTrails title={title} />
                  <Box>
                    <Button
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
                      onClick={() => onDeleteTrail(_id)}
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
              {courses?.map(({ _id, trail, title, author, type, link }) => (
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
                      onClick={() => {
                        handleOpenModalCourse();
                        setAction("edit");
                        setEdit({ _id, trail, title, author, type, link });
                      }}
                    >
                      Atualizar
                    </Button>
                    <Button
                      onClick={() => onDeleteCourse(_id)}
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
