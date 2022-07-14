const URL_BASE = "http://localhost:8080/sagui";

// Retorna todos os alunos
const getAluno = async (matricula) => {
  return await fetch(`${URL_BASE}/aluno/${matricula}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAluno };
