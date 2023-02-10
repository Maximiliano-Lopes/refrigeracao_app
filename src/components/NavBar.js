import { Link } from "react-router-dom"
import logo from "../images/Logo-Refrigeracao.png"


export default function NavBar(){

    return(
        <nav>
      <Link to="/" id="linkToHome"><img src={logo} /></Link>
      <ul>
        <li>
          <Link to="/">Início </Link>
        </li>
        <li>
          <a href="#servicesSection">Serviços</a>
        </li>
        <li>
          <a href="#Localizacao">localização</a>
        </li>
        <li>
          <a href="#contatos">contatos</a>
        </li>
      </ul>
    </nav>
    )
}