import Footer from "../../components/Footer/Footer";
import "./styles.css";

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
            <h1>A comunidade tech mais vitaminada!</h1>
            <h3>
              Conecte-se com pessoas com os mesmos interesses que você enquanto
              aprende sobre as maiores tendências do mundo da tecnologia 🍊
            </h3>
          </div>
        </div>
      </div>
      <div className="container-trails">
        <div className="container-cards">
          <div className="card-trail">
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1662729347/$mip3cw6frz9"
              alt="FullStack"
            />
            <h3>Desenvolvimento Full Stack</h3>
          </div>
          <div className="card-trail">
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1662729347/$orvl84rg8a"
              alt=""
            />
            <h3>UX/UI Design</h3>
          </div>
          <div className="card-trail">
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1662729347/$4nai9gbaeha"
              alt=""
            />
            <h3>Quality Assurance (QA)</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
