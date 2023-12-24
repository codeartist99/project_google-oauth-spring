import React from 'react';
import {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import {GoogleLoginButton} from "./components/auth/google/GoogleLoginButton";

const App: React.FC = () => {
  const handleGoogleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log('Google login success:', response);
    // 서버로 받은 토큰을 전송하고 서버에서 검증 후 로그인 처리
  };

  const handleGoogleLoginFailure = (error: any) => {
    console.error('Google login failure:', error);
  };

  return (
    <div>
      <GoogleLoginButton
        onSuccess={handleGoogleLoginSuccess}
        onFailure={handleGoogleLoginFailure}
      />
    </div>
  );
};

export default App;
