const URL_BASE = "http://localhost:8080/sagui";

const getTutores = async () =>{
    return await fetch(`${URL_BASE}/usuarios`,{
        method: "GET",
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    getTutores,
}