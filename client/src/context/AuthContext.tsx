import React, {createContext, ReactNode, useContext, useState} from "react";
import LoginForm from "../component/LoginForm";


interface AuthContextProps {
  isLoggedIn: boolean;
  login: (loginForm: LoginForm) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (loginForm: LoginForm) => {
    // 로그인 로직

    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false);
  }

  const contextValue: AuthContextProps = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};


const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export {AuthProvider, useAuth};


