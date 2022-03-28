import React, { createContext } from "react";

const AuthContext = createContext({});

function AuthenticationContextProvider({ children }) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export default AuthenticationContextProvider;
