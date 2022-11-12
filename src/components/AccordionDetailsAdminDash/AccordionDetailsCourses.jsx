import { AccordionDetails, Box, Button, Chip, Typography } from "@mui/material";

function AccordionDetailsCourses({ trail, title, author }) {
  return (
    <AccordionDetails>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Chip label={trail} />
        <Typography textAlign="center">{title}</Typography>
        <Typography textAlign="center">{author}</Typography>
        <Box>
          <Button variant="contained" size="small" className="admin-dash-btn">
            Atualizar
          </Button>
          <Button variant="contained" size="small">
            Deletar1
          </Button>
        </Box>
      </Box>
    </AccordionDetails>
  );
}

export default AccordionDetailsCourses;
