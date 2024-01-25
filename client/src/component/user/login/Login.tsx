import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {useAuthContext} from "../../../context/AuthContext";
import LoginRequestForm from "./LoginRequestForm";
import {loginRequest} from "../../../util/RequestUtils";

export const Login = () => {
  const navigate = useNavigate();
  const auth = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const loginForm: LoginRequestForm = {email, password}
    loginRequest(loginForm).then(res => {
      if (res.accessToken) {
        auth.updateAccessToken(res.accessToken);
        auth.updateIsLoggedIn(true);
        navigate("/");
      } else {
        auth.updateAccessToken(null);
        auth.updateIsLoggedIn(false);
      }
    }).catch(err => {
      auth.updateAccessToken(null);
      auth.updateIsLoggedIn(false);
      throw new Error("로그인 실패");
    });

  }

  return (
    <>
      <div className={"w-full h-screen grid justify-center content-center "}>
        <div className={"border-2"}>
          <div className={"mx-4 my-4"}>
            <div>
              <label>
                <input value={email} type="text" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}
                       className="input input-bordered w-full max-w-xs"/>
              </label>
              <label>
                <input value={password} type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}
                       className="input input-bordered w-full max-w-xs"/>
              </label>
            </div>
            <div>
              <button className={"btn"} onClick={handleLogin}>login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};