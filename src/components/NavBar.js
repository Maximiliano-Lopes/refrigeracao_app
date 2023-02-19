import { Link } from "react-router-dom"
import { HashLink as LinkHash } from 'react-router-hash-link';
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
            <LinkHash to="/#servicesSection">Serviços</LinkHash>
          </li>
          <li>
            <LinkHash to="/#Localizacao">localização</LinkHash>
          </li>
          <li><LinkHash to="/#contatos">Contatos</LinkHash></li>
      </ul>
    </nav>
    )
}