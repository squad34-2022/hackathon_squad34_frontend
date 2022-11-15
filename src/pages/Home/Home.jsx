import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-body">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="bg-image"
        mb={5}
        pt={5}
        sx={{ overflowX: "unset" }}
      >
        <Grid item xs={12}>
          <Grid container justifyContent="space-evenly" gap={15}>
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1639661491/$s20z34nynz"
              alt="Logo Orange"
              width="284px"
              height="186px"
            />
            <Grid item xs={6}>
              <Typography variant="h1">
                A comunidade tech mais vitaminada!
              </Typography>
              <Typography variant="h4" className="home-h4">
                Conecte-se com pessoas com os mesmos interesses que você
                enquanto aprende sobre as maiores tendências do mundo da
                tecnologia.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="end"
              maxWidth="85vw"
              marginTop={4}
              className="home-btn"
            >
              <Button
                sx={{ borderRadius: 20 }}
                onClick={() => {
                  navigate("/cadastro");
                }}
                variant="contained"
              >
                Criar conta
              </Button>
              <Button
                sx={{ borderRadius: 20 }}
                onClick={() => {
                  navigate("/login");
                }}
                variant="contained"
              >
                Entrar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="bg-gradient"
        gap={3}
        sx={{ pt: 3, pb: 3 }}
      >
        <Typography variant="h3" color="secondary">
          Cadastre-se e conheça nossas trilhas:
        </Typography>

        <Grid
          container
          justifyContent="space-around"
          flexWrap="wrap"
          alignItems="center"
        >
          <Box flexDirection="column" textAlign="center" sx={{ p: 4 }}>
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1662729347/$mip3cw6frz9"
              alt="FullStack"
            />
            <Typography variant="h5" className="color-white">
              Desenvolvimento Full Stack
            </Typography>
          </Box>
          <Box flexDirection="column" textAlign="center" sx={{ p: 4 }}>
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1662729347/$orvl84rg8a"
              alt=""
            />
            <Typography variant="h5" className="color-white">
              UX/UI Design
            </Typography>
          </Box>
          <Box flexDirection="column" textAlign="center" sx={{ p: 4 }}>
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1662729347/$4nai9gbaeha"
              alt=""
            />
            <Typography variant="h5" className="color-white">
              QA (Quality Assurance)
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Home;
