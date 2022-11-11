import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Navbar from "../../components/Navbar/Navbar";
import AccordionCustom from "../../components/AccordionCustom";

const drawerWidth = 240;

const teste = [
  {
    title: "Dev Full Stack",
    _id: "1",
    courses: [
      {
        _id: "1",
        title: "JS",
        author: "FCamara",
        type: "Artigo",
        link: "https://www.youtube.com/embed/pdLZ7KvTXTE",
      },
      {
        _id: "2",
        title: "JS",
        author: "FCamara",
        type: "Artigo",
        link: "https://blog.fcamara.com.br/squads-o-que-e-e-como-funciona/",
      },
    ],
  },
  {
    title: "UX",
    _id: "2",
    courses: [
      {
        _id: "1",
        title: "JS",
        author: "FCamara",
        type: "Artigo",
        link: "https://www.alura.com.br/artigos/como-se-tornar-um-desenvolvedor-full-stack-no-proximo-ano",
      },
      {
        _id: "2",
        title: "JS",
        author: "FCamara",
        type: "Artigo",
        link: "https://www.youtube.com/embed/n0KH8dQSrv0",
      },
    ],
  },
  {
    title: "QA",
    _id: "3",
    courses: [
      {
        _id: "1",
        title: "JS",
        author: "FCamara",
        type: "Artigo",
        link: "https://blog.fcamara.com.br/squads-o-que-e-e-como-funciona/",
      },
      {
        _id: "2",
        title: "JS",
        author: "FCamara",
        type: "Artigo",
        link: "https://www.youtube.com/embed/eVwTlOuzT0Q",
      },
    ],
  },
];

function Courses() {
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
          {teste?.map(({ title, _id, courses }) => (
            <AccordionCustom key={_id} title={title} courses={courses} />
          ))}
        </Box>
      </Drawer>
      <Box ml={25} component="main" sx={{ flexGrow: 1, p: 3 }}>
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
