import './Components/style.css';
import PrimeiroComponente from './Components/PrimeiroComponente';
import SegundoComponente from './Components/SegundoComponente';
import ComponenteImagem from './Components/ComponenteImagem'
//link de img
import gato2 from './Assets/gato2.jpg'
let gatoLink = <img src="https://www.petsupport.com.br/wp-content/uploads/2021/09/necessidades-dos-gatos-1-1024x576.jpg" alt="gato3" width="300"/>

function App() {
  let nome = "Matheus";
  const RandomMsg = () => {
    return console.log ("Cliquei no botão")
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
      </div>
    </div>
  );
}

export default App;
