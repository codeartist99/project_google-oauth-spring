import React, {useState} from 'react';
import {GoogleLogin, googleLogout, useGoogleLogin} from "@react-oauth/google";
import axios from "axios";

const apiUrl = "http://localhost:8080/api/v1"
const axiosCorsConfig = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }}
export const GoogleLoginButton: React.FC = () => {
  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      console.log(codeResponse);
    },
    flow: 'auth-code',
  });

  return (
    <>
      <button className={"btn"} onClick={() => login()}>Google</button>
    </>
  );
};
