import { useState } from "react";

const HookAula1 = () => {
  let [Num, setNum] = useState(0);
  const HandleSomar = () => {
    setNum((Num = Num + 1));
  };
  return (
    <div>
      <h2>Aula react</h2>
      <p>Usando <code>setNum</code> e <code>useState</code> para criar um cotador.</p>
      <button onClick={HandleSomar}>Clique aqui</button>
      <p>Contado: {Num}</p>
    </div>
  );
};

export default HookAula1;
