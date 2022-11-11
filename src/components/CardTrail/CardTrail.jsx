import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
  Button,
  Modal,
  Box,
} from "@mui/material";
import imgDeveloper from "../../assets/developer.jpg";
import imgDesigner from "../../assets/designer.jpg";
import imgQA from "../../assets/qa.jpg";

const trails = [
  {
    title: "Desenvolvimento Full Stack",
    description:
      "O desenvolvedor full stack é capaz de trabalhar com toda a pilha de desenvolvimento de um projeto. Além de conseguir atuar com o font-end e o back-end, esse profissional também pode contribuir emtodas as etapas e partes de um sistema, como o servidor e o banco de dados.",
    image: imgDeveloper,
  },
  {
    title: "UX/UI Designer",
    description:
      "O UX Designer é o profissional que atua com o propósito de atrelar os conhecimentos da área do Design e buscar melhorias para a experiência do usuário. UI Designer é o responsável por criar e desenvolver estes elementos gráficos. No Brasil, também é conhecido como designer de interface.",
    image: imgDesigner,
  },
  {
    title: "Quality Assurance - QA",
    description:
      "A pessoa QA é o olho do cliente dentro da startup. Sendo assim, ela é uma pessoa responsável por analisar todos os aspectos de utilização do software ou aplicação. Enfim, verificar se tudo está sendo entregue conforme a expectativa do cliente.",
    image: imgQA,
  },
];

function CardTrail() {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <Grid mt={5} container justifyContent="center" gap={12}>
      {trails?.map(({ title, description, image }) => (
        <Grid>
          <Button>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={image}
                  alt="green iguana"
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
          </Button>
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal> */}
        </Grid>
      ))}
    </Grid>
  );
}

export default CardTrail;
