import "../styles/sobreNos.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import primeiraOficina from "../images/primeiraOficina.png";
import SegundaOficina from "../images/segundaOficina.jpg";
import terceiraOficina from "../images/terceiraOficina.jpg";



export default function SobreNos() {
  return (
    <div>
      <NavBar />
      <main>
        <h1 id="tituloSobre">Sobre nós</h1>
        <div className="historiaCard">
          <p>
            <strong>Contaremos nossa história de trás para frente.</strong><br/>
            Iniciamos nosso caminho como empresa em um pequeno espaço, com
            poucas ferramentas, sem muita experiência e com o sonho de mostrar
            do que somos capazes. Traçamos o nosso rumo pelas pedras, com um
            começo turbulento mas sempre esperançosos e dedicados, essa
            persistência se personificou em uma grande evolução do nosso negócio
            que necessitava de mais espaço assim como uma colônia de abelhas que
            evolui rapidamente, então damos um passo arriscado para outro
            estabelecimento afim de melhor nossas estruturas, em meados de 2012
            vamos a público mais do que nunca.
          </p>
          <img src={primeiraOficina} alt="Nossa primeira oficina. - 2009" className="oficinasImg"/>
        </div>
        <div className="historiaCard">
            <img src={SegundaOficina} alt="Nossa segunda oficina. - 2012" className="oficinasImg"/>
          <p>
            Essa parte do caminho foi onde realmente ganhamos o reconhecimento
            que queríamos desde o começo, agora com muita experiência, muitas
            ferramentas, muitos clientes fiéis e com o mesmo sonho de mostrar
            que somos capazes. Esta foi nossa casa por muitos anos, até que
            pelos caminhos da vida tivemos que nos mudar, ficamos sem chão mas o
            destino sabia exatamente o que fazer conosco, então fomos para um
            maior, melhor e mais estruturado lugar.
          </p>
          
        </div>
        <div className="historiaCard">
          <p>
            É aqui onde estamos até hoje. uma empresa construída e baseada em
            valores familiares na sua essência, hoje ocupa um local onde ganha a
            visibilidade que merece, sempre prestamos os melhores dos serviços,
            nosso principal meio de divulgação são nossos clientes, indicação
            para nós é algo especial, com um valor de confiança no que fazemos.
            Essa é a nossa trajetória, e será um prazer prestar serviços para
            você.
          </p>
          <img src={terceiraOficina} alt="Nossa terceira oficina. - 2018" className="oficinasImg"/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
