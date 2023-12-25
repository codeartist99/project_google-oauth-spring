import React from 'react';
import {GoogleLoginButton} from "./components/auth/google/GoogleLoginButton";
import {GoogleOAuthProvider} from "@react-oauth/google";
import privacy from "./privacy.json";

const App: React.FC = () => {
  const clientId: string = privacy.clientId;
  return (
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLoginButton />
      </GoogleOAuthProvider>
  );
};

export default App;
