import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthenticationContextProvider({ children }) {
  const [user, setUser] = useState({
    accessToken: localStorage.getItem("accessToken"),
  });

  let navigate = useNavigate();

  useEffect(() => {
    if (user.accessToken === null) return;

    async function checkToken() {
      try {
        const response = await axios.get(
          "https://frontend-educational-backend.herokuapp.com/api/user",
          {
            headers: { Authorization: `Bearer ${user.accessToken}` },
          }
        );
        setUser({ accessToken: user.accessToken, ...response.data });
      } catch (error) {
        console.error(error);
        logout();
        navigate("../signin", { replace: true });
      }
    }

    checkToken();
  }, [user.accessToken]);

  function logout() {
    setUser({ accessToken: null });
    localStorage.removeItem("accessToken");
  }

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
    localStorage.setItem("accessToken", response.data.accessToken);
  }

  return (
    <AuthContext.Provider value={{ login: login, user: user, logout: logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthenticationContextProvider;
