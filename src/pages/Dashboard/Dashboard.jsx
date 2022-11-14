import { Box, Button, Grid, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import { AuthContext } from "../../context/Auth";
import TrailServices from "../../services/trailServices";
import "./styles.css";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FF5A23" : "#FF8A63",
  },
}));

function Dashboard() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    TrailServices.getAll()
      .then(({ data }) => setTrails(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <Grid
        container
        display="flex"
        flexWrap={"wrap"}
        direction="row"
        justifyContent="center"
      >
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={5}
          mt={12}
          gap={5}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography marginTop={8} variant="h1">
              Olá, Fulano de Tal
            </Typography>
            <Typography variant="h5">
              Veja seu progresso nas trilhas:
            </Typography>
          </Box>
          <Box justifyContent="center" alignItems="center">
            {trails?.map(({ title }) => (
              <Box key={title}>
                <Typography variant="h6" title={title}>
                  {title}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress
                    sx={{ width: 500 }}
                    variant="determinate"
                    value={50}
                  />
                </Box>
              </Box>
            ))}
          </Box>
          <Box>
            <Button href="/cursos" variant="contained">
              Acessar Aulas
            </Button>
          </Box>
        </Grid>

        <Grid
          container
          item
          xs={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          marginTop={12}
        >
          <Box>
            <Typography marginTop={8} variant="h1">
              Comunidade
            </Typography>
            <Typography variant="h5">Conecte-se com outros membros:</Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width={500}
            >
              <Slider />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
