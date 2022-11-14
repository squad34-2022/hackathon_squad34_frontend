import { AccordionDetails, Box, Button, Chip, Typography } from "@mui/material";

function AccordionDetailsCourses({ trail, title, author }) {
  return (
    <AccordionDetails>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Chip label={trail?.title} />
        <Typography textAlign="center">{title}</Typography>
        <Typography textAlign="center">{author}</Typography>

      </Box>
    </AccordionDetails>
  );
}

export default AccordionDetailsCourses;
