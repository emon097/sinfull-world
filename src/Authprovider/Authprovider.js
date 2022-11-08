import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const user = { email: "email@gmail.com" };
  const authinfo = { user };
  return (
    <div>
      <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Authprovider;
