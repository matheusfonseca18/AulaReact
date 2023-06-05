import './Components/style.css';
import PrimeiroComponente from './Components/PrimeiroComponente';
import SegundoComponente from './Components/SegundoComponente';

function App() {
  let nome = "Matheus"
  return (
    <div className="App">
      <h1>Olá, {nome}!</h1>
      <PrimeiroComponente/>
      <SegundoComponente/>
    </div>
  );
}

export default App;
