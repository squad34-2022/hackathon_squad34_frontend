import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Chip,
  Divider,
  Drawer,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";

const drawerWidth = 240;
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Courses() {
  const drawer = (
    <div>
      <Toolbar marginTop="10px" />
    </div>
  );

  return (
    <>
      <Navbar />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open={true}
        variant="permanent"
      >
        {drawer}

        <Accordion>
          <AccordionSummary>
            <Typography variant="h5">Desenvolvimento Full Stack</Typography>
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>Curso A</Typography>
              <Checkbox {...label} color="success" />
            </Box>
            <Box>
              <Stack direction="rwo" spacing={1}>
                <Chip label="Artigo" color="primary" />
                <Chip label="FCamara" color="primary" />
              </Stack>
            </Box>
          </AccordionDetails>
          <AccordionDetails>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>Curso B</Typography>
              <Checkbox {...label} color="success" />
            </Box>
            <Box>
              <Stack direction="rwo" spacing={1}>
                <Chip label="Artigo" color="primary" />
                <Chip label="FCamara" color="primary" />
              </Stack>
            </Box>
          </AccordionDetails>
          <AccordionDetails>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>Curso C</Typography>
              <Checkbox {...label} color="success" />
            </Box>
            <Box>
              <Stack direction="rwo" spacing={1}>
                <Chip label="Artigo" color="primary" />
                <Chip label="FCamara" color="primary" />
              </Stack>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography variant="h5">UX/UI Design</Typography>
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>Curso A</Typography>
              <Checkbox {...label} color="success" />
            </Box>
            <Box>
              <Stack direction="rwo" spacing={1}>
                <Chip label="Artigo" color="primary" />
                <Chip label="FCamara" color="primary" />
              </Stack>
            </Box>
          </AccordionDetails>
          <AccordionDetails>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>Curso B</Typography>
              <Checkbox {...label} color="success" />
            </Box>
            <Box>
              <Stack direction="rwo" spacing={1}>
                <Chip label="Artigo" color="primary" />
                <Chip label="FCamara" color="primary" />
              </Stack>
            </Box>
          </AccordionDetails>
          <AccordionDetails>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>Curso C</Typography>
              <Checkbox {...label} color="success" />
            </Box>
            <Box>
              <Stack direction="rwo" spacing={1}>
                <Chip label="Artigo" color="primary" />
                <Chip label="FCamara" color="primary" />
              </Stack>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography variant="h5">Quality Assurance (QA)</Typography>
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>Curso A</Typography>
              <Checkbox {...label} color="success" />
            </Box>
            <Box>
              <Stack direction="rwo" spacing={1}>
                <Chip label="Artigo" color="primary" />
                <Chip label="FCamara" color="primary" />
              </Stack>
            </Box>
          </AccordionDetails>
          <AccordionDetails>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>Curso B</Typography>
              <Checkbox {...label} color="success" />
            </Box>
            <Box>
              <Stack direction="rwo" spacing={1}>
                <Chip label="Artigo" color="primary" />
                <Chip label="FCamara" color="primary" />
              </Stack>
            </Box>
          </AccordionDetails>
          <AccordionDetails>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>Curso C</Typography>
              <Checkbox {...label} color="success" />
            </Box>
            <Box>
              <Stack direction="rwo" spacing={1}>
                <Chip label="Artigo" color="primary" />
                <Chip label="FCamara" color="primary" />
              </Stack>
            </Box>
          </AccordionDetails>
        </Accordion>
        <div>Fim</div>
      </Drawer>
    </>
  );
}

export default Courses;
