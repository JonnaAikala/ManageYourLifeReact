import axios from "axios"
// Määritellään osoite, josta haetaan tietoa
//const baseUrl = "https://localhost:7169/api/todolist"
const baseUrl = "https://manageyourliferestapi20251214170751-drf2fpdzhtcbhuc8.swedencentral-01.azurewebsites.net/api/todolist"
//Haetaan tieto getAll -metodilla
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
//Luodaan uusi tehtävä create -metodilla
const create = uusiTehtava => {
   return axios.post(baseUrl, uusiTehtava)
}

export default { getAll, create }