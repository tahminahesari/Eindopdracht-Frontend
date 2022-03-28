import React, { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthenticationContextProvider({ children }) {
  let navigate = useNavigate();
  async function login(data) {
    console.log(data);
    const response = await axios.post(
      " https://frontend-educational-backend.herokuapp.com/api/auth/signin",

      {
        username: data.username,
        password: data.password,
      }
    );

    navigate("../upload", { replace: true });
    console.log("user", response.data);
  }

  return (
    <AuthContext.Provider value={{ login: login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthenticationContextProvider;
