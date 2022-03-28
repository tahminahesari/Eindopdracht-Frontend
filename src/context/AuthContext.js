import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthenticationContextProvider({ children }) {
  const [user, setUser] = useState({ accessToken: null });
  let navigate = useNavigate();
  async function login(data) {
    const response = await axios.post(
      " https://frontend-educational-backend.herokuapp.com/api/auth/signin",

      {
        username: data.username,
        password: data.password,
      }
    );

    navigate("../upload", { replace: true });

    setUser(response.data);
  }

  return (
    <AuthContext.Provider value={{ login: login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthenticationContextProvider;
