import Cookie from "js-cookie";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api/api";
import UserServices from "../services/userServices";

export const AuthContext = createContext({});

const ACCESS_TOKEN_COOKIE = "token";

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = Cookie.get(ACCESS_TOKEN_COOKIE);
    const userId = Cookie.get("user");

    if (accessToken && userId) {
      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      setAccessToken(accessToken);
      UserServices.getById(userId)
        .then((user) => {
          setUser(user);
        })
        .catch(() => {
          toast.error("Sessão não autorizada.");
          Cookie.remove("user");
          Cookie.remove(ACCESS_TOKEN_COOKIE);
          return singOut();
        });

      setIsLoading(false);
    } else {
      setAccessToken(undefined);
      setIsLoading(false);
    }
  }, []);

  const singIn = useCallback(async ({ email, password }) => {
    const result = await UserServices.authenticate({ email, password });

    if (result instanceof Error) {
      return result.message;
    } else {
      Cookie.set(ACCESS_TOKEN_COOKIE, result.token);
      Cookie.set("user", result.user._id);
      setUser(result.user);
      setAccessToken(result.token);
    }
  }, []);

  const register = useCallback(async ({ name, email, password }) => {
    const result = await UserServices.add({ name, email, password });

    if (result instanceof Error) {
      return result.message;
    } else {
      Cookie.set(ACCESS_TOKEN_COOKIE, result.token);
      Cookie.set("user", result.user._id);
      setUser(result.user);
      setAccessToken(result.token);
    }
  }, []);

  const singOut = useCallback(() => {
    setAccessToken(undefined);
    Cookie.remove("user");
    Cookie.remove(ACCESS_TOKEN_COOKIE);
  }, []);

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        singIn,
        singOut,
        user,
        isLoading,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
