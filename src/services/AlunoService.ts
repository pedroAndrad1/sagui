const URL_BASE = "http://localhost:8080/sagui";

const getAluno = async (matricula) => {
  return await fetch(`${URL_BASE}/aluno/${matricula}`);
};

const getAlunos = async () => {
  return await fetch(`${URL_BASE}/alunos`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAluno, getAlunos };
