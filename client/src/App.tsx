import React from 'react';
import './App.css';
import {Home} from "./component/Home";
import {AuthContextProvider} from "./context/AuthContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./component/user/login/Login";
import { Signup } from './component/user/signup/Signup';

function App() {
  return (
    <div className="App">
      <AuthContextProvider >
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/signup"} element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
