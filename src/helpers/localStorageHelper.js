import { Map } from 'immutable';

export function clearToken() {
  localStorage.removeItem('id_token');
  localStorage.removeItem('access_token');
}

export function getToken() {
  try {
    const idToken = localStorage.getItem('id_token');
    const accessToken = localStorage.getItem('access_token');
    return new Map({ idToken : idToken, accessToken : accessToken });
  } catch (err) {
    clearToken();
    return new Map();
  }
}

export function setToken(idToken, accessToken){
  localStorage.setItem('id_token', idToken);
  localStorage.setItem('access_token', accessToken);
}