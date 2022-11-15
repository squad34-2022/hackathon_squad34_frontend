import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import CardTrail from "../../components/CardTrail/CardTrail";
import Navbar from "../../components/Navbar/Navbar";

function TrailsPage() {
  return (
    <Grid>
      <Toolbar />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Navbar />
      </AppBar>
      <Grid mt={10} justifyContent="center" container>
        <Typography variant="h1">Trilhas</Typography>
      </Grid>
      <Grid>
        <CardTrail />
      </Grid>
    </Grid>
  );
}

export default TrailsPage;
