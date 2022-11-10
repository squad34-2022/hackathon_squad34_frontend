import { Typography, Button } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import "./home.css";

function Home() {
  return (
    <>
      <div className="apresentation">
        <div className="container-apresentation">
          <div className="logo-orange">
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1639661491/$s20z34nynz"
              alt="Logo Orange"
            />
          </div>
          <div className="text-apresentation">
            <Typography variant="h1">
              A comunidade tech mais vitaminada!
            </Typography>
            <Typography variant="h4" className="home-h4">
              Conecte-se com pessoas com os mesmos interesses que você enquanto
              aprende sobre as maiores tendências do mundo da tecnologia.
            </Typography>
            <div className="home-btn">
              <a href="/cadastro" className="text-dec-none">
                <Button variant="contained">Criar conta</Button>
              </a>
              <a href="/login" className="text-dec-none">
                <Button variant="contained">Entrar</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-trails">
        <div className="container-cards">
          <Typography variant="h3" className="home-h3">
            Entre e conheça nossas trilhas:
          </Typography>
          <div className="card-trail">
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1662729347/$mip3cw6frz9"
              alt="FullStack"
            />
            <Typography variant="h5">Desenvolvimento Full Stack</Typography>
          </div>
          <div className="card-trail">
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1662729347/$orvl84rg8a"
              alt=""
            />
            <Typography variant="h5">UX/UI Design</Typography>
          </div>
          <div className="card-trail">
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1662729347/$4nai9gbaeha"
              alt=""
            />
            <Typography variant="h5">QA (Quality Assurance)</Typography>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
