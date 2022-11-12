import {
  AccordionDetails,
  Box,
  Checkbox,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function AccordionDetailsCourses({ title, type, author, link }) {
  return (
    <AccordionDetails>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography>
          <a href={`${link}`} target="aula1">
            {title}
          </a>
        </Typography>
        <Checkbox {...label} color="success" />
      </Box>
      <Box>
        <Stack direction="row" spacing={1}>
          <Chip label={type} color="primary" />
          <Chip label={author} color="primary" />
        </Stack>
      </Box>
    </AccordionDetails>
  );
}

export default AccordionDetailsCourses;
