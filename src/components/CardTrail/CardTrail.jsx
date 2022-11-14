import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imgDesigner from "../../assets/designer.jpg";
import imgDeveloper from "../../assets/developer.jpg";
import imgQA from "../../assets/qa.jpg";
import TrailServices from "../../services/trailServices";

function CardTrail() {
  const [trails, setTrails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    TrailServices.getAll().then(({ data }) => setTrails(data));
  }, []);

  return (
    <Grid mt={5} container justifyContent="center" gap={12}>
      {trails?.map(({ _id, title, description }) => (
        <Grid key={_id} onClick={() => navigate("/cursos")}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={imgDeveloper}
                alt=""
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  title={title}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  description={description}
                >
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardTrail;
