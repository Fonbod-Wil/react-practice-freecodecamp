import React from "react";
import { useParams } from "react-router-dom";
function User() {
    const {userid } = useParams();
  return (
    <div className="relative flex items-start justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
      <h1 className="text-4xl font-bold text-orange-700">User:{userid}</h1>
    </div>
  );
}

export default User;
