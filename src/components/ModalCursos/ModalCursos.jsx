import React from "react";
import { Box, Modal } from "@mui/material";

export default function ModalCursos() {
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" component="h1" variant="h5">
        Cursos
      </Typography>
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
  </Modal>;
}
