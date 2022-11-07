import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <img
            src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1654865437/$khtwl6dbna"
            alt=""
          />
        </div>
        <div className="items-footer">
          <li>
            <ul>Home</ul>
            <ul>Trilhas</ul>
            <ul>Comunidade</ul>
            <ul>Contato</ul>
          </li>
        </div>
        <div className="localizations">
          <li>
            <ul>
              <h4>Onde Estamos</h4>
            </ul>
            <ul>
              <h5>
                <p>São Paulo</p>
                <p>MATRIZ</p>
              </h5>
            </ul>
            <ul>
              <p>Rua Bela Cintra, 986 - 2º andar Consolação, São Paulo - SP</p>
            </ul>
            <ul>
              <h5>
                <p>Santos</p>
                <p>FILIAL</p>
              </h5>
            </ul>
            <ul>
              <p>Praça dos Expedicionários, 19 Sala 22 Gonzaga, Santos - SP</p>
            </ul>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
