import React, {useEffect, useState} from "react";
import {getUserRequest} from "../../../util/RequestUtils";
import {useAuthContext} from "../../../context/AuthContext";

export const Profile: React.FC = () => {
  const auth = useAuthContext();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (auth.accessToken) {
      getUserRequest(auth.accessToken).then(res => {
        console.log(res);
        setImageUrl(res.imageUrl);
        setName(res.name);
        setEmail(res.email);
      })
    } else {
      throw new Error("token이 존재하지 않습니다.");
    }
  })

  return (
    <>
      <div>
        {
          imageUrl ? (
            <img src={imageUrl} alt={name}/>
          ) : (
            <div className="text-avatar">
              <span>{name}</span>
            </div>
          )
        }
      </div>
      <div >
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </>
  );
};