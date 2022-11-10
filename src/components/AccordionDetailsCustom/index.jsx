import {
  AccordionDetails,
  Box,
  Checkbox,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function AccordionDetailsCustom({ title, type, author }) {
  return (
    <AccordionDetails>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography>
          <a href="https://www.youtube.com/embed/pdLZ7KvTXTE" target="aula1">
            {title}
          </a>
        </Typography>
        <Checkbox {...label} color="success" />
      </Box>
      <Box>
        <Stack direction="rwo" spacing={1}>
          <Chip label={type} color="primary" />
          <Chip label={author} color="primary" />
        </Stack>
      </Box>
    </AccordionDetails>
  );
}

export default AccordionDetailsCustom;
