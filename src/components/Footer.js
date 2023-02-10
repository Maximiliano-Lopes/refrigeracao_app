import { Link } from "react-router-dom"
import logo from "../images/Logo-Refrigeracao.png"
import Whatsapplogo from "../images/WhatsAppLogo.webp"
import FixoLogo from "../images/telefoneFixo.png"
import EmailLogo from "../images/EmailIcon.png"



export default function Footer(){
    return(
        <footer>
        <img src={logo} />
        <ul>
          <li>
            <Link to="/">Início</Link>
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
        <p>
          <a id="assinatura">Copyright © Refrigeração Lopes - CNPJ: 14.664.715/0001-53 | Developed by Maximiliano Lopes</a>
        </p>
      </footer>
    )
}