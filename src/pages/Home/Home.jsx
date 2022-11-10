import { Typography, Button, Grid, Box, Container } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import "./home.css";

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="bg-image"
      >
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-around">
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
          </Box>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="center"
              marginTop={4}
              className="home-btn"
            >
              <a href="/cadastro" className="text-dec-none">
                <Button variant="contained">Criar conta</Button>
              </a>
              <a href="/login" className="text-dec-none">
                <Button variant="contained">Entrar</Button>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="bg-gradient"
      >
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-around">
            <Typography variant="h3" className="home-h3">
              Entre e conheça nossas trilhas:
            </Typography>
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
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Home;
