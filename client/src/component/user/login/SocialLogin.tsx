import React from "react";
import {FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, GOOGLE_AUTH_URL} from "../../../constants";
import googleLogo from "../../../assets/images/google-logo.png";
import fbLogo from "../../../assets/images/fb-logo.png";
import githubLogo from "../../../assets/images/github-logo.png";


export const SocialLogin: React.FC = () => {
  return (
    <>
      <div className="w-full h-auto space-y-2 my-4">
          <a className="flex justify-start btn w-full h-min" href={GOOGLE_AUTH_URL}>
            <img className={"size-1/12"} src={googleLogo} alt="Google"/>
            <p className={"ml-4"}>Log in with Google</p>
          </a>
          <a className="flex justify-start btn w-full h-min" href={FACEBOOK_AUTH_URL}>
            <img className={"size-1/12"} src={fbLogo} alt="Facebook"/>
            <p className={"ml-4"}>Log in with Facebook</p>
            </a>
          <a className="flex justify-start btn w-full h-min" href={GITHUB_AUTH_URL}>
            <img className={"size-1/12"} src={githubLogo} alt="Github"/>
            <p className={"ml-4"}>Log in with Github</p>
          </a>
      </div>
    </>
  );
};