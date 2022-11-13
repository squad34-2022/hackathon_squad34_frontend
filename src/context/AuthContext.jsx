import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import apiBack from "../services/apiBack";
import UserServices from "../services/userServices";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = Cookies.get("user");
    const token = Cookies.get("token");

    if (id && token) {
      apiBack.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      UserServices.getById(id).then((res) => {
        if (res.status !== 200) {
          return setIsAuthenticated(false);
        }

        return setUser(res.data);
      });

      setIsAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function singIn({ email, password }) {
    const { token, user } = await UserServices.authenticate({
      email,
      password,
    });

    apiBack.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    Cookies.set("token", token, { expires: 1 });
    Cookies.set("user", user._id, { expires: 1 });
    setIsAuthenticated(true);
    setUser(user);
  }

  async function singOut() {
    apiBack.defaults.headers.common["Authorization"] = undefined;

    Cookies.remove("token");
    Cookies.remove("user");

    setIsAuthenticated(false);
    setUser(undefined);
  }

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, singIn, user, loading, singOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
