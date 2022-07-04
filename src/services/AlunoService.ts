const URL_BASE = "http://localhost:8080/sagui";

// Retorna todos os alunos
const getAlunos = async () => {
  return await fetch(`${URL_BASE}/alunoes`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAlunos,
};
