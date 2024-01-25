import {useAuthContext} from "../../../context/AuthContext";
import React, {useState} from "react";
import SignupRequest from "./SignupRequestForm";
import SignupRequestForm from "./SignupRequestForm";

export const Signup: React.FC = () => {
  const auth = useAuthContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const signupRequestForm: SignupRequestForm = {name, email, password};
    auth.signup(signupRequestForm);
  }
  return (
    <>
      <div className={"w-full h-screen grid justify-center content-center "}>
        <div className={"border-2"}>
          <div className={"mx-4 my-4"}>
            <div>
              <label>
                <input value={name} type="text" placeholder="Name" onChange={(e) => {
                  setName(e.target.value)
                }}
                       className="input input-bordered w-full max-w-xs"/>
              </label>
              <label>
                <input value={email} type="text" placeholder="Email" onChange={(e) => {
                  setEmail(e.target.value)
                }}
                       className="input input-bordered w-full max-w-xs"/>
              </label>
              <label>
                <input value={password} type="password" placeholder="Password" onChange={(e) => {
                  setPassword(e.target.value)
                }}
                       className="input input-bordered w-full max-w-xs"/>
              </label>
            </div>
            <div>
              <button className={"btn"} onClick={handleSignup}>singup</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
