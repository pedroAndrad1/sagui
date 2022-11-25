const URL_BASE = "http://localhost:8080/sagui";

const getAluno = async (matricula) => {
  return await fetch(`${URL_BASE}/aluno/${matricula}`);
};

const getAlunos = async () => {
  return await fetch(`${URL_BASE}/alunos`);
};

const uploadConfirmacao = async (matricula, confirmacaoFile) => {
  const formData = new FormData();
  formData.append("file", confirmacaoFile);

  return await fetch(`${URL_BASE}/confirmacao/${matricula}/uploadFile`, {
    method: "POST",
    body: formData,
  });
};

const teste = async () => {
  return await fetch(`http://200.156.26.135:8080/sagui-hml/alunos`, {
    method: "GET",
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAluno, getAlunos,uploadConfirmacao, teste };
