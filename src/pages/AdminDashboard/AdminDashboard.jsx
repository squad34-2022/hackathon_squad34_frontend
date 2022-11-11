import { Typography, Grid, Box, Button } from "@mui/material";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Modal from "@mui/material/Modal";
import "./adminDashboard.css";
import TextField from "@mui/material/TextField";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      </Grid>
    </>
  );

  function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }
}

export default AdminDashboard;
