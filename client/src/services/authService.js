import jwtDecode from "jwt-decode";
import http from "./http";
import config from "../config.json";

const port = process.env.port || config.port;

const apiEndpoint = config.apiUrl + port + "/api/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout(user) {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

const exportedObject = {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};

export default exportedObject;
