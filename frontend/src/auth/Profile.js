import React, { useEffect, useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LogoutButton from "./LogoutButton";
import { UserContext } from '../context/context';

const Profile = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const user = useContext(UserContext);

  

  return (
    <div>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.designation}</p>
      </div>
      <LogoutButton />
    </div>
   
  );
};

export default Profile;


// Once we have logged in the isAuthenticated method will turn from false to true. This will cause the useEffect to run once the Profile is rendered. We will request an access token from the auth0 management api. Once we have the token we will then fetch the user information using this url  const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}` and the access token we have just received. we parse it into json and set it as the userMetaData. the jsx will then render what we have just done as part of the partial re render

// isAuthenticated && (
//   <div>
//     <h1>User Profile</h1>
//     <img src={user.picture} alt={user.name} />
//     <h2>{user.name}</h2>
//     <p>{user.email}</p>
//     <h3>User Metadata</h3>
//     {userMetadata ? (
//       <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
//     ) : (
//       "No user metadata defined"
//     )}

    
//   </div>
// )