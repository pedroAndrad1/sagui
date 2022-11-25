const URL_BASE = "http://localhost:8081/sagui";

const getTutores = async () => {
  return await fetch(`${URL_BASE}/professores`, {
    method: "GET",
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTutores,
};
