import React from 'react';
import './App.css';
import {Home} from "./component/Home";
import {AuthProvider} from "./context/AuthContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./component/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider >
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
