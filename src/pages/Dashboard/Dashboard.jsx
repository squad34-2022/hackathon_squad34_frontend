import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
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
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function Dashboard() {
  return (
    <div>
      <div className="welcome-container">
        <h1>Olá, José</h1>
        <p>Veja seu progresso nas trilhas:</p>
      </div>
      <div className="progress-container">
        <div className="trails-progress">
          <div className="trail">
            <h4>UX/UI Design</h4>
            <Box sx={{ flexGrow: 1 }}>
              <BorderLinearProgress
                sx={{ width: 500 }}
                variant="determinate"
                value={100}
              />
            </Box>
          </div>
          <div className="trail">
            <h4>Desenvolvimento Full Stack</h4>
            <Box sx={{ flexGrow: 1 }}>
              <BorderLinearProgress
                sx={{ width: 500 }}
                variant="determinate"
                value={100}
              />
            </Box>
          </div>
          <div className="trail">
            <h4>QA</h4>
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
      <div></div>
    </div>
  );
}

export default Dashboard;
