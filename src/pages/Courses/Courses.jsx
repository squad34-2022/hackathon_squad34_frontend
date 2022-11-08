import {
  Accordion,
  AccordionSummary,
  Box,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";

const drawerWidth = 240;

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
            <Typography>Accordion</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Accordion</Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Accordion</Typography>
          </AccordionSummary>
        </Accordion>
        <div>Fim</div>
      </Drawer>
    </>
  );
}

export default Courses;
