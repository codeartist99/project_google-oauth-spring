import React from "react";
import {LocalLogin} from "./LocalLogin";
import {SocialLogin} from "./SocialLogin";

export const Login: React.FC = () => {


  return (
    <>
      <div className={"w-full h-screen grid justify-center content-center "}>
        <div className={"border-2"}>
          <div className={"mx-4 my-4"}>
            <div>
              <SocialLogin />
            </div>
            <div>
              <LocalLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};