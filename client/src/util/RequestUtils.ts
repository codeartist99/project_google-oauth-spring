import { API_BASE_URL } from '../constants';
import LoginRequestForm from "../component/user/login/LoginRequestForm";


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
