import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Slider from "../../components/Slider/Slider";
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
  const userName = "Junior";

  const courses = [
    "UX/UI Design",
    "Desenvolvimento Full Stack",
    "Quality Assurance (QA)",
    "Futuro Curso",
  ];

  return (
    <div>
      <div className="welcome-container">
        <h1>Olá, {userName}</h1>
        <h5>Veja seu progresso nas trilhas:</h5>
      </div>
      <div className="progress-container">
        <div className="trails-progress">
          {courses.map((course, i) => (
            <div className="trail">
              <h5>{courses[i]}</h5>
              <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress
                  sx={{ width: 500 }}
                  variant="determinate"
                  value={100}
                />
              </Box>
            </div>
          ))}
        </div>
      </div>
      <div className="comunity-container">
        <h1>Comunidade</h1>
        <h5>Conecte-se com outros membros:</h5>
        <div className="slider-comunity">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
