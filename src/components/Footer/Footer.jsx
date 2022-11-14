import EmailIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Grid, Toolbar, Typography } from "@mui/material";
import "./styles.css";

function Footer() {
  return (
    <>
      <Grid display="flex" justifyContent="center">
        <Grid>
          <Grid>
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1654865437/$khtwl6dbna"
              alt="Logo Grupo FCamara"
            />
          </Grid>
          <Grid marginLeft={2}>
            <Typography
              variant="subtitle2"
              gutterBottom
              paddingY={2}
              paddingBottom={1}
              color="#fff"
            >
              Copyright © 2022:{" "}
              <a
                target="_blank"
                href="https://digital.fcamara.com.br/orange-evolution"
                className="text-decorator-none"
                color="#fff"
              >
                Orange Evolution
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid>
            <Grid>
              <Typography
                variant="h5"
                paddingY={7}
                paddingBottom={4}
                color="#fff"
              >
                Fale Conosco:
              </Typography>
            </Grid>
            <Grid>
              <a
                href="mailto:equipe34.2022@gmail.com"
                target="_blank"
                className="icons"
              >
                <EmailIcon sx={{ color: "white" }} />
              </a>
              <a
                href="https://github.com/squad34-2022"
                target="_blank"
                className="icons"
              >
                <GitHubIcon sx={{ color: "white" }} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="icons"
              >
                <FacebookIcon sx={{ color: "white" }} />
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Toolbar />
      </Grid>
      <Toolbar />
    </>
  );
}

export default Footer;
