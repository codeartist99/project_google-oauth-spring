import Cookies from "js-cookie";
import React, {createContext, ReactNode, useContext, useState} from "react";
import SignupRequestForm from "../component/user/signup/SignupRequestForm";
import {signupRequset} from "../util/RequestUtils";

interface AuthContextProps {
  updateAccessToken: (token: string | undefined) => void;
  signup: (signupRequestForm: SignupRequestForm) => void;
  logout: () => void;
  accessToken: string | undefined;
}

const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({children}) => {
  const [accessToken, setAccessToken] = useState<string | undefined>(Cookies.get('token'));

  const updateAccessToken = (token: string | undefined) => {
    if (token) {
      setAccessToken(token);
      Cookies.set('token', token, {expires: 7});
    } else {
      setAccessToken(undefined);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setAccessToken(undefined);
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
    updateAccessToken,
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


