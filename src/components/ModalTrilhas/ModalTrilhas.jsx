import React from "react";
import { Box, Modal } from "@mui/material";

export default function ModalTrilhas() {
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" component="h1" variant="h5">
        Trilhas
      </Typography>

      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Nome da Trilha"
        name="name"
        autoComplete="name"
        autoFocus
      />

      <TextField
        margin="normal"
        required
        fullWidth
        id="created"
        label="Descrição"
        name="created"
        autoComplete="created"
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
  </Modal>;
}
