import React from "react";
import {FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, GOOGLE_AUTH_URL} from "../../../constants";
import googleLogo from "../../../assets/images/google-logo.png";
import fbLogo from "../../../assets/images/fb-logo.png";
import githubLogo from "../../../assets/images/github-logo.png";


export const SocialLogin: React.FC = () => {
  return (
    <>
      <div className="social-login">
        <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
          <img src={googleLogo} alt="Google" /> Log in with Google</a>
        <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
          <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a>
        <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
          <img src={githubLogo} alt="Github" /> Log in with Github</a>
      </div>
    </>
  );
};