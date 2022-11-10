import { Drawer, Toolbar } from "@mui/material";
import AccordionCustom from "../../components/AccordionCustom";
import Navbar from "../../components/Navbar/Navbar";

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
        link: "http",
      },
      {
        _id: "2",
        title: "JS",
        author: "FCamara",
        type: "Artigo",
        link: "http",
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
        link: "http",
      },
      {
        _id: "2",
        title: "JS",
        author: "FCamara",
        type: "Artigo",
        link: "http",
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
        link: "http",
      },
      {
        _id: "2",
        title: "JS",
        author: "FCamara",
        type: "Artigo",
        link: "http",
      },
    ],
  },
];

function Courses() {
  // const drawer = (
  //   <div>
  //     <Toolbar />
  //   </div>
  // );

  return (
    <>
      <Navbar />
      <Toolbar />
      <Drawer
        sx={{
          marginTop: 100,
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
        {/* {drawer} */}
        {teste?.map(({ title, _id, courses }) => (
          <AccordionCustom key={_id} title={title} courses={courses} />
        ))}
        <div>Fim</div>
      </Drawer>
    </>
  );
}

export default Courses;
