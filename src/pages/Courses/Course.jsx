import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Chip,
  Link,
  Stack,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../context/Auth";
import TrailServices from "../../services/trailServices";
const drawerWidth = 240;

export default function Course(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const [trails, setTrails] = useState([]);
  const [link, setLink] = useState("");
  const { singOut, user } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    TrailServices.getAll()
      .then(({ data }) => setTrails(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Box sx={{ overflow: "auto" }}>
        {trails?.map(({ _id, title, courses }) => (
          <Accordion key={_id}>
            <AccordionSummary>
              <Typography variant="h6">{title}</Typography>
            </AccordionSummary>
            <Divider />
            {courses?.map(({ _id, title, type, author, link }) => (
              <AccordionDetails key={_id} sx={{ background: "#eceaea", mt: 1 }}>
                <Box
                  display={"flex"}
                  onClick={() => setLink(link)}
                  justifyContent={"space-between"}
                  sx={{ cursor: "pointer", pt: 1 }}
                >
                  <Typography>{title}</Typography>
                  <Checkbox {...label} color="success" />
                </Box>
                <Box sx={{ mt: 1 }}>
                  <Stack direction="row" spacing={2}>
                    <Chip label={type} color="primary" />
                    <Chip label={author} color="primary" />
                  </Stack>
                </Box>
              </AccordionDetails>
            ))}
          </Accordion>
        ))}
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box>
            <Button
              className="navbar-menu"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Home
            </Button>

            <Button
              className="navbar-menu"
              color="inherit"
              onClick={() => {
                navigate("/trilhas");
              }}
            >
              Trilhas
            </Button>

            {user?.email.includes("@fcamara") && (
              <Button
                className="navbar-menu"
                color="inherit"
                onClick={() => {
                  navigate("/admin");
                }}
              >
                Admin
              </Button>
            )}
            <Button className="navbar-menu" color="inherit" onClick={singOut}>
              Sair
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: " 80vh",
        }}
      >
        <Toolbar />

        {link.includes("youtube/embed") ||
        link.includes("alura") ||
        !link ||
        link.includes("cursomp3") ||
        link.includes("scrumalliance") ? (
          <iframe
            width="100%"
            height="100%"
            src={link}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
          ></iframe>
        ) : (
          <Box
            sx={{
              height: " 100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              mt: 5,
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" color="orange[200]">
              Ops...
            </Typography>

            <Box
              sx={{
                mt: 5,
                p: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" gutterBottom color="text.secondary">
                Infelizmente nossa plataforma não pode renderizar esse conteúdo,
                mas vamos te encaminhar para o endereço.
              </Typography>

              <Link
                href={link}
                sx={{ p: 4, display: "flex", fontWeight: "bold" }}
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                Clique Aqui <OpenInNewRoundedIcon />
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
