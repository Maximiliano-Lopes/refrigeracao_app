import "./App.css";
import logo from "./images/Logo-Refrigeracao.png";
import FaqImg from "./images/FAQs-amico.png";
import estrelasPng from "./images/estrelasPNG.png";
import washingmachine3d from "./images/washing-machine-3d.webp";
import geladeiraImg from "./images/geladeiraImg.jpg";
import microondasImg from "./images/micro-ondasImg.jpg";
import arCondicionadoImg from "./images/arCondicionadoImg.jpg";
import cafeteiraImg from "./images/cafeteiraImg.jpg";
import fornoEletricoImg from "./images/fornoEletricoImg.jpg";
import freezerImg from "./images/freezerImg.webp";
import BonecosContatos from "./images/Bonecocontact.png";
import UseMap from "./components/Map";
import Whatsapplogo from "./images/WhatsAppLogo.webp";
import FixoLogo from "./images/telefoneFixo.png";
import EmailLogo from "./images/EmailIcon.png";

import { Reviews } from "./components/Reviews";

function App() {
  const url =
    "https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Cformatted_phone_number%2Creviews&place_id=ChIJTZhcXxudGZURWQWJnDk1Gic&key=AIzaSyAqRyrkbxt31Ksh-kayxW6E8I12v7lYAZs";

  return (
    <div className="App">
      <nav>
        <img src={logo} />
        <ul>
          <li>
            <a>sobre nós </a>
          </li>
          <li>
            <a href="#servicesSection">Serviços</a>
          </li>
          <li>
            <a href="#Localizacao">localização</a>
          </li>
          <li>
            <a>contatos</a>
          </li>
        </ul>
      </nav>
      <main>
        <div id="cardsMain">
          <div id="leftCard">
            <h1>Pifou?!</h1>
            <img src={FaqImg} />
            <a>Clique aqui</a>
          </div>
          <div id="rightCard">
            <div id="first">
              <h1>
                Mais de <br /> 20 anos no mercado!
              </h1>
              <img src={estrelasPng} id="estrelasImg" />
            </div>
            <div id="seccond">
              <p>
                Temos uma equipe pronta para solucionar seu problema, ligue-nos
                e daremos uma solução!
              </p>
              <p>
                <br />
                PARA MAIS INFORMAÇÕES, LIGUE PARA: <br /> <a>51 3319-4962</a>
              </p>
            </div>
          </div>
        </div>
        <div id="servicesSection">
          <h1 id="servicesTitle">Nossos principais serviços</h1>
          <section>
            <div className="serviceCard">
              <div>
                <img src={washingmachine3d} />
              </div>
              <div>
                <h1>Máquina de lavar</h1>
                <p>Realizamos:</p>
                <ul>
                  <li>Higienizações</li>
                  <li>Manutenções</li>
                  <li>Consertos</li>
                  <li>Personalizações.</li>
                </ul>
                <a>Ver serviço</a>
              </div>
            </div>
            <div className="serviceCard">
              <div>
                <img src={geladeiraImg} id="geladeiraImg" />
              </div>
              <div>
                <h1>Geladeiras</h1>
                Realizamos:
                <ul>
                  <li>Higienizações</li>
                  <li>Manutenções</li>
                  <li>Consertos</li>
                  <li>Personalizações.</li>
                </ul>
                <a>Ver serviço</a>
              </div>
            </div>
            <div className="serviceCard">
              <div>
                <img src={microondasImg} />
              </div>
              <div>
                <h1>micro-ondas</h1>
                <p>Realizamos:</p>
                <ul>
                  <li>Higienizações</li>
                  <li>Manutenções</li>
                  <li>Consertos</li>
                  <li>Restaurações</li>
                  <li>Personalizações.</li>
                </ul>
                <a>Ver serviço</a>
              </div>
            </div>
            <div className="serviceCard">
              <div>
                <img src={arCondicionadoImg} />
              </div>
              <div>
                <h1>Ar-condicionados</h1>
                <p>Realizamos:</p>
                <ul>
                  <li>Instalações</li>
                  <li>Higienizações</li>
                  <li>Manutenções</li>
                  <li>Consertos</li>
                  <li>Personalizações.</li>
                </ul>
                <a>Ver serviço</a>
              </div>
            </div>
            <div className="serviceCard" id="cafeteiraCard">
              <div>
                <img src={cafeteiraImg} />
              </div>
              <div>
                <h1>Cafeteiras</h1>
                <p>Realizamos:</p>
                <ul>
                  <li>Higienizações</li>
                  <li>Manutenções</li>
                  <li>Consertos</li>
                </ul>
                <a>Ver serviço</a>
              </div>
            </div>
            <div className="serviceCard">
              <div>
                <img src={fornoEletricoImg} />
              </div>
              <div>
                <h1>fornos elétricos</h1>
                <p>Realizamos:</p>
                <ul>
                  <li>Higienizações</li>
                  <li>Manutenções</li>
                  <li>Consertos</li>
                </ul>
                <a>Ver serviço</a>
              </div>
            </div>
            <div className="serviceCard">
              <img src={freezerImg} />
              <div>
                <h1>Freezers</h1>
                <p>Realizamos:</p>
                <ul>
                  <li>Higienizações</li>
                  <li>Manutenções</li>
                  <li>Consertos</li>
                  <li>Restaurações</li>
                  <li>Personalizações.</li>
                </ul>
                <a>Ver serviço</a>
              </div>
            </div>
          </section>
        </div>
        <div id="informationsArea">
          <div id="Localizacao">
            <h1>Estamos logo alí!</h1>
            <p id="textMap">
              Nossos orçamentos e visitas técnicas são grátis e sem compromisso!
              <br />
              Não perca tempo, agende um horário!
            </p>
            <UseMap />
            <p id="enderecoP">
              Av. Bento Gonçalves, 5970 - Partenon, Porto Alegre - RS CEP:
              90650-001
            </p>
            <a className="buttonStyle">Agendar horário!</a>
          </div>
          <div id="contatos">
            <h1>Contatos</h1>
            <div>
              <ul>
                <li>
                  <img src={Whatsapplogo} className="icon" />
                  <a> (51) 99834-9409 </a>
                </li>
                <li>
                  <img src={FixoLogo} className="icon" />
                  <a> (51) 3319-4962 </a>
                </li>
                <li>
                  <img src={EmailLogo} className="icon" />
                  <a> matusamarcelo@gmail.com</a>
                </li>
              </ul>
              <img src={BonecosContatos} id="imgContato" />
            </div>
          </div>
        </div>
        <div id="avaliacoesArea">
          <h1>Avaliações de clientes</h1>
          <Reviews />
        </div>
      </main>
      <a href="https://storyset.com/people" target="_blank">
        People illustrations by Storyset
      </a>
      <footer>
        <img src={logo} />
        <ul>
          <li>
            <a>sobre nós </a>
          </li>
          <li>
            <a href="#servicesSection">Serviços</a>
          </li>
          <li>
            <a href="#Localizacao">localização</a>
          </li>
          <li><a href="#contatos">Contatos</a></li>
          <li>
            <div>
              <a>
                <img src={Whatsapplogo} className="icon" />
              </a>
              <a>
                <img src={FixoLogo} className="icon" />
              </a>
              <a>
                <img src={EmailLogo} className="icon" />
              </a>
            </div>
          </li>
        </ul>
        <p>
          <a id="assinatura">Developed by Maximiliano Lopes</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
