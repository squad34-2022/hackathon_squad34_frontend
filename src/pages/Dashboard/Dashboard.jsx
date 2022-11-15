import { Box, Button, Grid, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import { AuthContext } from "../../context/Auth";
import TrailServices from "../../services/trailServices";

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

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

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
        direction="row"
        justifyContent="space-around"
        sx={{ height: "80vh", mt: 12 }}
      >
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          item
          gap={5}
          xs={12}
          lg={6}
          md={6}
          xl={6}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Typography variant="h1">Olá, {user?.name}</Typography>
            <Typography variant="h5">
              Veja seu progresso nas trilhas:
            </Typography>
          </Box>
          <Box
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "100%",
              minWidth: "300px",
              maxWidth: "500px",
            }}
          >
            {trails?.map(({ _id, title }) => (
              <Box key={_id}>
                <Typography variant="h6" title={title}>
                  {title}
                </Typography>
                <Box /* sx={{ flexGrow: 1 }} */>
                  <BorderLinearProgress
                    sx={{ width: "100%" }}
                    variant="determinate"
                    value={Math.random() * 100}
                  />
                </Box>
              </Box>
            ))}
          </Box>
          <Box>
            <Button
              sx={{ borderRadius: 20 }}
              variant="contained"
              onClick={() => navigate("/cursos")}
            >
              Acessar Aulas
            </Button>
          </Box>
        </Grid>

        <Grid
          item
          display="flex"
          flexDirection="column"
          textAlign="center"
          xs={12}
          lg={6}
          md={6}
          xl={6}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h1">Comunidade</Typography>
            <Typography variant="h5">Conecte-se com outros membros:</Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width={"35vw"}
              sx={{ minWidth: "350px" }}
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
