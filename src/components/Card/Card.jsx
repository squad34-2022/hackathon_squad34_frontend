import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageUx from "../../assets/ImageUx.png"

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        height="140"
        image={ImageUx}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          UX/UI Design
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A pessoa UX/UI Designer é responsável pela experiência do usuário e
          também pelo desenho e projeção de interfaces.
        </Typography>
      </CardContent>
      <CardActions>{/* Créditos aqui */}</CardActions>
    </Card>
  );
}
