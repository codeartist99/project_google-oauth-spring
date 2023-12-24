import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

interface GoogleLoginButtonProps {
  onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  onFailure: (error: any) => void;
}

export const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLogin
      clientId="YOUR_GOOGLE_CLIENT_ID"
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};
