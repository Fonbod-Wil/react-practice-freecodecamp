
import { useLoaderData } from 'react-router-dom'
//import { useEffect, useState } from 'react'

import React from "react";


function GitHub() {
  const userData = useLoaderData(); // gets data from githubInfoLoader

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {userData ? (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} width={300} alt="avatar" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GitHub;
