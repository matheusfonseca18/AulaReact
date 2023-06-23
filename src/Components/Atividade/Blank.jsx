import "./Blank.css";
import Comp1 from "./Comp1.jsx";
import Nav from "./Nav"
import card from './card.png'


const Blank = () => {
  return (
    <div className="blank">
      <Nav />

        <h1 className="titulo">Organize suas tarefas em apenas 1 lugar!</h1>
        <h2 className="subT">Frase de subtitulo bem mlegal e chamativa</h2>
        <div className="conta">Crie sua conta</div>
        <div className="baixar">Download</div>
        <img src={card} alt="" />

        <Comp1 />


    </div>
  )
}

export default Blank