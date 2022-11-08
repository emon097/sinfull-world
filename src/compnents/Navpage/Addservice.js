import React, { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";

const Addservice = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user?.email}
      <h1>Accept the assignment — B6A11 service review client side</h1>
    </div>
  );
};

export default Addservice;
