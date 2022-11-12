import { Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import "./home.css";

function Home() {
  return (
    <div className="home-body">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="bg-image"
        mb={5}
      >
        <Grid item xs={12}>
          <Toolbar />
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
              justifyContent="center"
              marginTop={4}
              className="home-btn"
            >
              <Button href="/cadastro" variant="contained">
                Criar conta
              </Button>
              <Button href="/login" variant="contained">
                Entrar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* <Button
        sx={{ border: "none", width: "100%" }}
        variant="outlined"
        href="/trilhas"
        heigth="auto"
      > */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="bg-gradient"
        height="auto"
      >
        <Grid justifyContent="center">
          <Grid flexWrap={"wrap"} justifyContent="space-around">
            <Typography variant="h3" className="home-h3">
              Cadastre-se e conheça nossas trilhas:
            </Typography>
          </Grid>
          <Grid display="flex" flexWrap={"wrap"}>
            <Box flexDirection="column" textAlign="center">
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1662729347/$mip3cw6frz9"
                alt="FullStack"
              />
              <Typography variant="h5" className="color-white">
                Desenvolvimento Full Stack
              </Typography>
            </Box>
            <Box flexDirection="column" textAlign="center">
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1662729347/$orvl84rg8a"
                alt=""
              />
              <Typography variant="h5" className="color-white">
                UX/UI Design
              </Typography>
            </Box>
            <Box flexDirection="column" textAlign="center">
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
      </Grid>
      {/* </Button> */}

      <Footer />
    </div>
  );
}

export default Home;
