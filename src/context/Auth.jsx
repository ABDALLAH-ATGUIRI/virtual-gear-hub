import { useState, createContext, useEffect, useContext } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import { instance } from "../utils/api/axios";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ token: "", user: "" });
  const navigateTo = useNavigate();

  const register = async (form) => {
    await instance.post("/register", form).then(({ data }) => {
      setAuth({
        user: data.user,
        token: data.token,
      });

      localStorage.setItem('token', data.token);
      navigateTo('/');
    })
      .catch((e) => {
        console.log(e);
      });

  }


  const login = async (form) => {
    await instance.get("/login", { params: form }).then(({ data }) => {
      setAuth({
        user: data.user,
        token: data.token,
      });

      localStorage.setItem('token', data.token);
      navigateTo('/');

    })
      .catch((e) => {
        console.log(e);
      });
  };

  const validateToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return

    await instance
      .get("/validate-token", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(({ data }) => {
        if (data.user) {
          setAuth({
            user: data.user,
            token: token,
          });
        } else {
          localStorage.clear();
        }
      })
      .catch((err) => {
        console.log("error", err);
        localStorage.clear();
      });
  }

  const logout = async () => {

    await instance
      .post("/logout", {
        headers: { Authorization: `Bearer ${auth.token}` }
      })
      .then(() => {
        setAuth({ token: "", user: "" });
        localStorage.clear();
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * in general cases I dont need to check the local storage
 */
export const RequireAuth = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  return token ? (<Outlet />) : (<Navigate to="/" state={{ from: location }} replace />);
};

export default AuthProvider;
