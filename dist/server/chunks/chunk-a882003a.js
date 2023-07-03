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
        }
        redirect(data.success);
      } catch (error) {
        setIsLoggedIn(false);
        setUserInfo(null);
        redirect(false);
      }
    };
    checkLoginStatus();
  }, []);
  return [isLoggedIn, userInfo];
}
function redirect(isLoggedIn) {
  if (!isLoggedIn) {
    if (window.location.pathname === "/my") {
      window.location.href = "/login";
    }
    if (window.location.pathname === "/my-lists") {
      window.location.href = "/login";
    }
  } else {
    if (window.location.pathname === "/signup" || window.location.pathname === "/login") {
      window.location.href = "/search";
    }
  }
}
export {
  useCheckLoginStatus as u
};
//# sourceMappingURL=chunk-a882003a.js.map
