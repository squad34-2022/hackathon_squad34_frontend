import { Box, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import apiBack from "../../services/apiBack";
import "./styles.css";

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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    apiBack
      .get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const courses = [
    { title: "UX/UI Design", value: 10 },
    { title: "Web", value: 50 },
    { title: "QA", value: 100 },
    { title: "Futura", value: 0 },
  ];

  if (users.length === 0) {
    return (
      <Box>
        <Typography variant="h1">Carregando</Typography>
      </Box>
    );
  } else {
    return (
      <>
        <Box mt={5} ml={40}>
          <Typography variant="h1">Olá, {users[0].name}</Typography>
          <Typography variant="h5">Veja seu progresso nas trilhas:</Typography>
        </Box>
        <Box className="progress-container">
          <Box className="trails-progress">
            {courses?.map(({ title, value }) => (
              <Box key={title}>
                <Typography variant="h6" title={title}>
                  {title}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress
                    sx={{ width: 500 }}
                    variant="determinate"
                    value={value}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box mt={30} ml={40}>
          <Typography variant="h1">Comunidade</Typography>
          <Typography variant="h5">Conecte-se com outros membros:</Typography>
          <Box ml={10} width={700}>
            <Slider />
          </Box>
        </Box>
      </>
    );
  }
}

export default Dashboard;
