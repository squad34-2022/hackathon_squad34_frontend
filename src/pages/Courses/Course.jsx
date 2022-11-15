import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Chip,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { fontWeight } from "@mui/system";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CourseServices from "../../services/coursesServices";
import TrailServices from "../../services/trailServices";
const drawerWidth = 240;

function Courses() {
  const [trails, setTrails] = useState([]);
  const [courses, setCourses] = useState([]);
  const [link, setLink] = useState("");

  useEffect(() => {
    TrailServices.getAll()
      .then(({ data }) => setTrails(data))
      .catch((error) => console.log(error));

    CourseServices.getAll()
      .then(({ data }) => setCourses(data))
      .catch((error) => console.log(error));
  }, []);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Navbar />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          {trails?.map(({ _id, title, courses }) => (
            <Accordion key={_id}>
              <AccordionSummary>
                <Typography variant="h6">{title}</Typography>
              </AccordionSummary>
              <Divider />
              {courses?.map(({ _id, title, type, author, link }) => (
                <AccordionDetails
                  key={_id}
                  sx={{ background: "#eceaea", mt: 1 }}
                >
                  <Box
                    display={"flex"}
                    onClick={() => setLink(link)}
                    justifyContent={"space-between"}
                    sx={{ cursor: "pointer", pt: 1 }}
                  >
                    <Typography>{title}</Typography>
                    <Checkbox {...label} color="success" />
                  </Box>
                  <Box sx={{ mt: 1 }}>
                    <Stack direction="row" spacing={2}>
                      <Chip label={type} color="primary" />
                      <Chip label={author} color="primary" />
                    </Stack>
                  </Box>
                </AccordionDetails>
              ))}
            </Accordion>
          ))}
        </Box>
      </Drawer>
      <Box
        mt={9}
        container="true"
        component="main"
        sx={{ height: " 80vh", width: "100%" }}
      >
        {link.includes("youtube") ||
        link.includes("alura") ||
        !link ||
        link.includes("cursomp3") ||
        link.includes("scrumalliance") ? (
          <iframe
            width="100%"
            height="100%"
            src={link}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
          ></iframe>
        ) : (
          <Box
            sx={{
              height: " 100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              mt: 5,
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" color="orange[200]">
              Ops...
            </Typography>

            <Box
              sx={{
                mt: 5,
                p: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" gutterBottom color="text.secondary">
                Infelizmente nossa plataforma não pode renderizar esse conteúdo,
                mas vamos te encaminhar para o endereço.
              </Typography>

              <Link
                href={link}
                sx={{ p: 4, display: "flex", fontWeight: "bold" }}
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                Clique Aqui <OpenInNewRoundedIcon />
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Courses;
