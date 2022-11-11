import { AppBar, Box, Typography } from "@mui/material";
import CardTrail from "../../components/CardTrail/CardTrail";
import Navbar from "../../components/Navbar/Navbar";

function TrailsPage() {
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Navbar />
      </AppBar>
      <Box mt={15} ml={40}>
        <Typography variant="h1">Trilhas</Typography>
      </Box>
      <Box>
        <CardTrail />
      </Box>
    </Box>
  );
}

export default TrailsPage;
