import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CourseServices from "../../services/coursesServices";

export default function ModalCursos({ open, handleClose, trails }) {
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

  const [idTrail, setIdTrail] = useState("Trilhas");

  const handleChange = (event) => {
    setIdTrail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const course = {
      title: data.get("title"),
      type: data.get("type"),
      author: data.get("author"),
      link: data.get("link"),
      trail: idTrail,
    };

    const response = await CourseServices.add(course);

    if (!response.status >= 200 && !response.status <= 300) {
      toast.error(response.data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    location.reload();
  };

  //mui.com/material-ui/react-select/#main-content

  https: return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <Typography id="modal-modal-title" component="h1" variant="h5">
          Cursos
        </Typography>
        <div>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Trilhas
            </InputLabel>
            <Select
              labelId="trail"
              id="trail"
              name="trail"
              value={idTrail}
              label="Age"
              onChange={handleChange}
              required
            >
              <MenuItem value={idTrail}>
                <em>Trilhas</em>
              </MenuItem>
              {trails?.map(({ _id, title }) => (
                <MenuItem key={_id} value={_id}>
                  {title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Título"
          name="title"
          autoComplete="title"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="type"
          label="Tipo do conteúdo"
          name="type"
          autoComplete="type"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="author"
          label="Criado por"
          name="author"
          autoComplete="author"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="link"
          label="Link"
          name="link"
          autoComplete="link"
          autoFocus
        />
        // adicionar seletor de trilha aqui
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
