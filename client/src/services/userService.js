import http from "./http";
import config from "../config.json";

const port = process.env.port || config.port;
const apiEndpoint = config.apiUrl + port + "/api/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
