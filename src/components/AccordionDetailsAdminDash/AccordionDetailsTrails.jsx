import { AccordionDetails, Box, Button, Typography } from "@mui/material";

function AccordionDetailsTrails({ title }) {
  return (
    <AccordionDetails>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography textAlign="center">{title}</Typography>
        <Box>
          <Button variant="contained" size="small" className="admin-dash-btn">
            Atualizar
          </Button>
          <Button variant="contained" size="small">
            Deletar
          </Button>
        </Box>
      </Box>
    </AccordionDetails>
  );
}

export default AccordionDetailsTrails;
