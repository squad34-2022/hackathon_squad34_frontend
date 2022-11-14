import Cookie from "js-cookie";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Navigate } from "react-router-dom";
import UserServices from "../services/userServices";

export const AuthContext = createContext({});

const ACCESS_TOKEN_COOKIE = "token";

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const accessToken = Cookie.get(ACCESS_TOKEN_COOKIE);
    const userId = Cookie.get("user");

    if (accessToken && userId) {
      setAccessToken(accessToken);
    } else {
      setAccessToken(undefined);
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
  const singOut = useCallback(() => {
    setAccessToken(undefined);
  }, []);

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: true,
        singIn,
        singOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
