import React from 'react';
import {useGoogleLogin} from "@react-oauth/google";
import axios from "axios";

export const GoogleLoginButton: React.FC = () => {
  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      axios.post("https://localhost:8080", codeResponse);
      console.log(codeResponse)
    },
    flow: 'auth-code',
  });
  return (
    <>
      <button className={"btn"} onClick={login}>Google</button>
    </>
  );
};
