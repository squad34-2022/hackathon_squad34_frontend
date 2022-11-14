import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import TrailServices from "../../services/trailServices";

export default function ModalTrilhas({ open, handleClose, action, edit }) {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const course = {
      title: data.get("title"),
      description: data.get("description"),
    };

    const response = await TrailServices.add(course);
    if (!response.status >= 200 && !response.status <= 300) {
      toast.error(response.data.error);
      return;
    }

    location.reload();
  };

  if (action === "edit") {
    const { _id, title, description } = edit;

    const handleUpdate = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      const trail = {
        title: data.get("title"),
        description: data.get("description"),
      };

      const response = await TrailServices.update(_id, trail);

      if (!response.status >= 200 && !response.status <= 300) {
        toast.error(response.data.error);
        return;
      }

      location.reload();
    };

    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleUpdate}>
          <Typography id="modal-modal-title" component="h1" variant="h5">
            Trilhas
          </Typography>

          <TextField
            defaultValue={title}
            margin="normal"
            required
            fullWidth
            id="title"
            label="Nome da Trilha"
            name="title"
            autoComplete="title"
            autoFocus
          />

          <TextField
            defaultValue={description}
            margin="normal"
            required
            fullWidth
            id="description"
            label="Descrição"
            name="description"
            autoComplete="description"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{
              mt: 3,
              mb: 2,
              p: 1,
              borderRadius: "4px",
            }}
          >
            Atualizar
          </Button>
        </Box>
      </Modal>
    );
  } else {
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <Typography id="modal-modal-title" component="h1" variant="h5">
          Trilhas
        </Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Nome da Trilha"
          name="title"
          autoComplete="title"
          autoFocus
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="description"
          label="Descrição"
          name="description"
          autoComplete="description"
          autoFocus
        />

        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{
            mt: 3,
            mb: 2,
            p: 1,
            borderRadius: "4px",
          }}
        >
          Cadastrar
        </Button>
      </Box>
    </Modal>
  );
}
