import "./styles.css";

function ContentPage() {
  return (
    <>
      <div position="relative">TESTANDO IFRAME</div>
      <div className="container">
        <div>
          <p className="text">YOU TUBE</p>
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/pdLZ7KvTXTE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <p className="text">Site curso MP3</p>
          <iframe
            width="200px"
            height="200px"
            src="https://www.cursospm3.com.br/product-owner-o-que-faz-salario-habilidades/"
          ></iframe>
        </div>
        <div>
          <p className="text">Site ATLASSIAN</p>
          <iframe
            width="200px"
            height="200px"
            src="https://www.atlassian.com/br/agile/scrum/scrum-master"
          ></iframe>
        </div>
        <div>
          <p className="text">Site MEDIUM</p>
          <iframe
            width="200px"
            height="200px"
            src="https://medium.com/orangejuicefc/de-advogada-a-desenvolvedora-um-relato-sobre-minha-migra%C3%A7%C3%A3o-de-carreira-e-dicas-para-quem-pretende-45ad5df833b5"
          ></iframe>
        </div>
        <div>
          <p className="text">Site ALURA</p>
          <iframe
            width="200px"
            height="200px"
            src="https://www.alura.com.br/artigos/como-se-tornar-um-desenvolvedor-full-stack-no-proximo-ano"
          ></iframe>
        </div>
        <div>
          <p className="text">Site Scrum Aliance</p>
          <iframe
            width="200px"
            height="200px"
            src="https://resources.scrumalliance.org/Article/day-life-scrum-master"
          ></iframe>
        </div>
        <div>
          <p className="text">Site Amazon</p>
          <iframe
            width="200px"
            height="200px"
            src="https://www.amazon.com.br/dp/857416836X/ref=cm_sw_r_tw_dp_4AHBKZPKDK9J290N0T28?_encoding=UTF8&psc=1"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ContentPage;
