import React, {createContext, ReactNode, useContext, useState} from "react";
import LoginRequestForm from "../component/user/login/LoginRequestForm";
import SignupRequestForm from "../component/user/signup/SignupRequestForm";
import {loginRequest, signupRequset} from "../util/RequestUtils";
import {useNavigate} from "react-router-dom";


interface AuthContextProps {
  isLoggedIn: boolean;
  updateAccessToken: (token: string | null) => void;
  updateIsLoggedIn: (check: boolean) => void;
  signup: (signupRequestForm: SignupRequestForm) => void;
  logout: () => void;
  accessToken: string | null;
}

const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const updateAccessToken = (token: string | null) => {
    setAccessToken(token);
  }

  const updateIsLoggedIn = (check: boolean) => {
    setIsLoggedIn(check);
  }

  const logout = () => {
    setAccessToken(null);
    setIsLoggedIn(false);
    // "/"루트 페이지로 링크 이동 해야함
  }

  const signup = (signupRequestForm: SignupRequestForm) => {
    return signupRequset(signupRequestForm).then(res => {
      console.log("signup 성공");
    }).catch(err => {
      throw new Error("회원가입 실패")
    })
    // 로그인 페이지로 링크 이동 해야함
  }

  const contextValue: AuthContextProps = {
    isLoggedIn,
    updateAccessToken,
    updateIsLoggedIn,
    logout,
    accessToken,
    signup,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </ AuthContext.Provider>
  );
};


const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export {AuthContextProvider, useAuthContext};


