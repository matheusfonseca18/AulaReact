import './Components/style.css';
import PrimeiroComponente from './Components/PrimeiroComponente';
import SegundoComponente from './Components/SegundoComponente';
import ComponenteImagem from './Components/ComponenteImagem';
import Componente3 from './Components/Componente3';

//link de img
import gato2 from './Assets/gato2.jpg'
let gatoLink = <img src="https://www.petsupport.com.br/wp-content/uploads/2021/09/necessidades-dos-gatos-1-1024x576.jpg" alt="gato3" width="300"/>

function App() {

  let nome = "Matheus";

  const RandomMsg = () => {
    return console.log ("Cliquei no botão")
  };

const RandomMsg2 = () => {
  let Paragra = document.querySelector (`.Muda`)
  return Paragra.innerHTML = (`ebaa`)
};



let nota = document.querySelector (`input`);

const RandomMostra = () => {
  let mostra = document.querySelector (`.showw`)
  return mostra.innerHTML = (nota)
}

  return (
    <div className="App">
      <h1>Olá, {nome}!</h1>
      <PrimeiroComponente/>
      <SegundoComponente/>
      <h3>link img</h3>
      <p>imagem pelo public</p>
      <img src="gato.jpg" alt="gato1" width ="300"/>
      <p>imagem pelo link do url</p>
      {gatoLink}
      <p>imagem pelo <code>import</code></p>
      <img src={gato2} alt="gato2" width="300"/>
      <p>imagem por import de componente (imagem ta na pasta public)</p>
      <ComponenteImagem />
      <div>
        <h1>eventos</h1>
        <button onClick={RandomMsg}>cs.log</button>
        <button onClick={RandomMsg2}>Clica aí</button>
        <p className="Muda">0</p>
        <Componente3/>
        <p style={{color: "black"}}>CSS inline</p>

        <input type="palavra" />
        <button onClick={RandomMostra}>mostra</button>

        <p className = "showw" style={nota >= 6 ? {color: "green"} : {color: "red"}}>0</p>

      </div>
    </div>
  );
}

export default App;
