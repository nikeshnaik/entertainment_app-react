import axios from "axios";

const baseUrl = "https://entertainment-app-react-default-rtdb.firebaseio.com/shows.json"

const getShows = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)

}

export default getShows;