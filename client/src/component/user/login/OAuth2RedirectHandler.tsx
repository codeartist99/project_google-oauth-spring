import React, {useEffect} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useAuthContext} from "../../../context/AuthContext";

export const OAuth2RedirectHandler: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const auth = useAuthContext();

  const getUrlParameter = (name: string) => {
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? undefined : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  useEffect(() => {
    const token = getUrlParameter("token");
    const error = getUrlParameter("error");
    if (token) {
      auth.updateAccessToken(token);
      navigate("/");
    } else if(error) {
      navigate("/login");
    } else {
      throw new Error("OAuth error")
    }
  });

  return (
    <></>
  );
};
