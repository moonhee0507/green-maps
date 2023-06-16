import { navigate } from "vite-plugin-ssr/client/router";
import { useState, useEffect } from "react";
import { A as API_URL } from "./chunk-94504c62.js";
function useCheckLoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await fetch(`${API_URL}/users/`, {
          credentials: "include",
          method: "GET"
        });
        const data = await res.json();
        if (data.success === true) {
          setIsLoggedIn(true);
          setUserInfo(data.user);
        } else {
          setIsLoggedIn(false);
          setUserInfo(null);
          if (window.location.pathname === "/my") {
            navigate("/login");
          }
          if (window.location.pathname === "/my-lists") {
            navigate("/login");
          }
        }
      } catch (error) {
        setIsLoggedIn(false);
        setUserInfo(null);
        if (window.location.pathname === "/my") {
          navigate("/login");
        }
        if (window.location.pathname === "/my-lists") {
          navigate("/login");
        }
      }
    };
    checkLoginStatus();
  }, []);
  return [isLoggedIn, userInfo];
}
export {
  useCheckLoginStatus as u
};
