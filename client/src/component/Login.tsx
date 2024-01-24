import {useState} from "react";
import {useAuth} from "../context/AuthContext";
import LoginForm from "./LoginForm";

export const Login = () => {
  const auth = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const loginForm: LoginForm = {username, password}
    auth.login(loginForm);

    if (auth.isLoggedIn) {

    } else {

    }
  }

  return (
    <>
      <div className={"w-full h-screen grid justify-center content-center "}>
        <div className={"border-2"}>
          <div className={"mx-4 my-4"}>
            <div>
              <label>
                <input value={username} type="text" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}
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