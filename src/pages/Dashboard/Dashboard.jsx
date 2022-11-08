import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Navbar from "../../components/Navbar/navbar";
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
  return (
    <>
      <Navbar />
      <div>
        <div className="welcome-container">
          <h1>Olá, José</h1>
          <h5>Veja seu progresso nas trilhas:</h5>
        </div>
        <div className="progress-container">
          <div className="trails-progress">
            <div className="trail">
              <h5>UX/UI Design</h5>
              <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress
                  sx={{ width: 500 }}
                  variant="determinate"
                  value={100}
                />
              </Box>
            </div>
            <div className="trail">
              <h5>Desenvolvimento Full Stack</h5>
              <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress
                  sx={{ width: 500 }}
                  variant="determinate"
                  value={100}
                />
              </Box>
            </div>
            <div className="trail">
              <h5>QA</h5>
              <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress
                  sx={{ width: 500 }}
                  variant="determinate"
                  value={100}
                />
              </Box>
            </div>
          </div>
        </div>
        <div className="comunity-container">
          <h1>Comunidade</h1>
          <h5>Conecte-se com outros membros:</h5>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
