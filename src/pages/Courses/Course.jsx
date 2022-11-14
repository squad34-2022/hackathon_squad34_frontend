import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { useEffect, useState } from "react";
import AccordionCourses from "../../components/AccordionCourses";
import Navbar from "../../components/Navbar/Navbar";
import CourseServices from "../../services/coursesServices";
import TrailServices from "../../services/trailServices";

const drawerWidth = 240;

function Courses() {
  const [trails, setTrails] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    TrailServices.getAll()
      .then(({ data }) => setTrails(data))
      .catch((error) => console.log(error));

    CourseServices.getAll()
      .then(({ data }) => setCourses(data))
      .catch((error) => console.log(error));
  }, []);

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
            <AccordionCourses key={_id} title={title} courses={courses} />
          ))}
        </Box>
      </Drawer>
      <Box ml={5} container="true" component="main" sx={{ height: "100vh" }}>
        <Toolbar />
        <iframe
          name="aula1"
          width="1200"
          height="800"
          src=""
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Box>
    </Box>
  );
}

export default Courses;
