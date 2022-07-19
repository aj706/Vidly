import http from "./http";
import config from "../config.json";

const port = process.env.PORT || config.port;
export function getGenres() {
  return http.get(config.apiUrl + port + "/api/genres");
}
