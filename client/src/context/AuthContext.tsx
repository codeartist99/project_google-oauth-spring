import React, {createContext, ReactNode, useState} from "react";

interface User {
  userName: string;
}

interface AuthContextProps {
  isLoggedIn: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    // 로그인 로직
    setIsLoggedIn(true);
    setUser(userData);
  }

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  }

  const contextValue: AuthContextProps = {
    isLoggedIn,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};


