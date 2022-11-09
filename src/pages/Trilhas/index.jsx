import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
// import Card from '../../components/Card/card'
import "./style.css";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const trilhas = [
    {
      name: "UX/UI Design",
      description:
        "A pessoa UX/UI Designer é responsável pela experiência do usuário e também pelo desenho e projeção de interfaces.",
    },
    {
      name: "Full Stack",
      description:
        "O desenvolvedor Full Stack é aquele profissional multitarefa que cobre várias frentes na área de TI.",
    },
    {
      name: "QA",
      description:
        "O profissional de Quality Assurance é responsável por analisar a qualidade do produto que é entregue ao cliente.",
    },
  ];

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <>
      <Navbar />
      <Typography component="h1" variant="h5" my={5} mx={34}>
        Nossas trilhas
      </Typography>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {trilhas.map(({ name, description }) => (
              <Grid key={name} item>
                <Card name={name} description={description} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
