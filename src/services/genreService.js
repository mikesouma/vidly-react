import http from './httpService'
import config from '../config.json';

const apiEndpoint = config.apiUrl + '/genres';

export function getGenres() {
    console.log(apiEndpoint);
    return http.get("http://localhost:3900/api/genres");
}