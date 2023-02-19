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
import {Link} from "react-router-dom";
import { Reviews } from "./components/Reviews";
import { HashLink as LinkHash } from 'react-router-hash-link';

function App() {
  const url =
    "https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Cformatted_phone_number%2Creviews&place_id=ChIJTZhcXxudGZURWQWJnDk1Gic&key=AIzaSyAqRyrkbxt31Ksh-kayxW6E8I12v7lYAZs";

  return (
    <div className="App">
     <nav>
       <img src={logo} />
      <ul>
        <li>
          <Link to="SobreNos">sobre nós </Link>
        </li>
        <li>
          <LinkHash to="#servicesSection">Serviços</LinkHash>
        </li>
        <li>
          <LinkHash to="#Localizacao">localização</LinkHash>
        </li>
        <li>
          <LinkHash to="#contatos">contatos</LinkHash>
        </li>
      </ul>
    </nav>
      <main>
        <div id="cardsMain">
          <div id="leftCard">
            <h1>Pifou?!</h1>
            <img src={FaqImg} />
            <a href="https://wa.me/5551998349409?text=Ol%C3%A1%2C+vim+pelo+site%21+Preciso+de+um+servi%C3%A7o..." target="__blank">Clique aqui</a>
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
                <a href="https://wa.me/5551998349409?text=Ol%C3%A1%2C+vim+pelo+site%21+Preciso+de+um+or%C3%A7amento+para+m%C3%A1quina+de+lavar...">Ver serviço</a>
              </div>
            </div>
            <div className="serviceCard">
              <div>
                <img src={geladeiraImg} id="geladeiraImg" />
              </div>
              <div>
                <h1>Geladeiras</h1>
                <p>Realizamos:</p>
                <ul>
                  <li>Higienizações</li>
                  <li>Manutenções</li>
                  <li>Consertos</li>
                  <li>Personalizações.</li>
                </ul>
                <a href="https://wa.me/5551998349409?text=Ol%C3%A1%2C+vim+pelo+site%21+Preciso+de+um+or%C3%A7amento+para+geladeira...">Ver serviço</a>
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
                <a href="https://wa.me/5551998349409?text=Ol%C3%A1%2C+vim+pelo+site%21+Preciso+de+um+or%C3%A7amento+para+micro-ondas...">Ver serviço</a>
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
                <a href="https://wa.me/5551998349409?text=Ol%C3%A1%2C+vim+pelo+site%21+Preciso+de+um+or%C3%A7amento+para+ar-condicionado...">Ver serviço</a>
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
                <a href="https://wa.me/5551998349409?text=Ol%C3%A1%2C+vim+pelo+site%21+Preciso+de+um+or%C3%A7amento+para+cafeteira...">Ver serviço</a>
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
                <a href="https://wa.me/5551998349409?text=Ol%C3%A1%2C+vim+pelo+site%21+Preciso+de+um+or%C3%A7amento+para+forno+el%C3%A9trico...">Ver serviço</a>
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
                <a href="https://wa.me/5551998349409?text=Ol%C3%A1%2C+vim+pelo+site%21+Preciso+de+um+or%C3%A7amento+para+freezer...">Ver serviço</a>
              </div>
            </div>
          </section>
        </div>
        <div id="informationsArea">
          <div id="Localizacao">
            <h1>Estamos logo alí!</h1>
            <p id="textMap">
              Nossos orçamentos e visitas técnicas são grátis para o Partenon!
              <br />
              Não perca tempo, agende um horário!
            </p>
            <UseMap />
            <p id="enderecoP">
              Av. Bento Gonçalves, 5970 - Partenon, Porto Alegre - RS CEP:
              90650-001
            </p>
            <a className="buttonStyle" href="https://wa.me/5551998349409?text=Ol%C3%A1%2C+vim+pelo+site%21+Gostaria+de+agendar+uma+visita...">Agendar horário!</a>
          </div>
          <div id="contatos">
            <h1>Contatos</h1>
            <div>
              <ul>
                <li>
                  <img src={Whatsapplogo} className="icon" />
                  <a href="https://wa.me/5551998349409?text=Ol%C3%A1%2C+vim+pelo+site%21"> (51) 99834-9409 </a>
                </li>
                <li>
                  <img src={FixoLogo} className="icon" />
                  <a href="tel:+555133194962"> (51) 3319-4962 </a>
                </li>
                <li>
                  <img src={EmailLogo} className="icon" />
                  <a href = "mailto:matusamarcelo@gmail.com?subject = Orçamento &body = Olá, gostaria de realizar um orçamento."> matusamarcelo@gmail.com</a>
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
            <Link to="SobreNos">sobre nós </Link>
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
              <a href="https://wa.me/5551998349409?text=Ol%C3%A1%2C+vim+pelo+site%21">
                <img src={Whatsapplogo} className="icon" />
              </a>
              <a href="tel:+555133194962">
                <img src={FixoLogo} className="icon" />
              </a>
              <a href = "mailto:matusamarcelo@gmail.com?subject = Orçamento &body = Olá, gostaria de realizar um orçamento.">
                <img src={EmailLogo} className="icon" />
              </a>
            </div>
          </li>
        </ul>
        <p id="assinatura" >
          Copyright © Refrigeração Lopes - CNPJ: 14.664.715/0001-53 |<a href="https://wa.me/351933725264?text=Ol%C3%A1%2C+vim+pelo+site%21">  Developed by Maximiliano Lopes</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
