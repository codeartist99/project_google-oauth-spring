import { API_BASE_URL } from '../constants';
import LoginRequestForm from "../component/user/login/LoginRequestForm";
import {useAuthContext} from "../context/AuthContext";
import Cookies from "js-cookie";


export async function loginRequest(loginRequest: LoginRequestForm) {

  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(loginRequest),
  }

  return await fetch(API_BASE_URL + "/auth/login", requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error("login error")
      }
      return response.json();
    });
}


export async function signupRequset(signupRequest: LoginRequestForm) {

  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(signupRequest),
  };

  console.log(requestOptions);

  return await fetch(API_BASE_URL + "/auth/signup", requestOptions)
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    );
}

export async function getUserRequest(token: string) {

  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    method: 'GET',
  };

  return await fetch(API_BASE_URL + "/user/me", requestOptions)
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    );
}
