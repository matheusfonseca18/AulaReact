export const AulaProps = (Props) => {
  return (
    <div>
      <h1>Aula Props</h1>
      <p>Cadastro de Aluno</p>
      <p>Nome: {Props.Nome}</p>
      <p>Curso: {Props.Curso}</p>
      <p>R.A.: {Props.Ra}</p>
      <p>Média: {Props.Media}</p>
    </div>
  );
};

export default AulaProps;
