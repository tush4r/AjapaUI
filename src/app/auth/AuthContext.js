import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FuseSplashScreen from "@fuse/core/FuseSplashScreen";
import { showMessage } from "app/store/fuse/messageSlice";
import { logoutUser, setUser } from "app/store/userSlice";
import jwtService from "./services/jwtService";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [waitAuthCheck, setWaitAuthCheck] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    jwtService.on("onAutoLogin", () => {
      // dispatch(showMessage({ message: "Signing in with JWT" }));
      dispatch(showMessage({ message: "Signing in" }));

      /**
       * Sign in and retrieve user data with stored token
       */
      jwtService
        .signInWithToken()
        .then((user) => {
          // success(user, "Signed in with JWT");
          success(user, "Signed in");

        })
        .catch((error) => {
          pass(error.message);
        });
    });

    jwtService.on("onLogin", (user) => {
      success(user, "Signed in");
    });

    jwtService.on("onLogout", () => {
      pass("Signed out");

      dispatch(logoutUser());
    });

    jwtService.on("onAutoLogout", (message) => {
      pass(message);

      dispatch(logoutUser());
    });

    jwtService.on("invalidValue", (message) => {
      passData(message);
    });

    jwtService.on("onNoAccessToken", () => {
      pass();
    });

    jwtService.init();

    function success(user, message) {
      if (message) {
        dispatch(showMessage({ message }));
      }
      const userdata = { data: { ...user } }

      Promise.all([
        dispatch(setUser(userdata.data)),
        // You can receive data in here before app initialization
      ]).then((values) => {
        setWaitAuthCheck(false);
        setIsAuthenticated(true);
      });
    }

    function passData(message) {
      dispatch(showMessage({ message }));
    };

    function pass(message) {
      if (message) {
        dispatch(showMessage({ message }));
      }

      setWaitAuthCheck(false);
      setIsAuthenticated(true);
    }
  }, [dispatch]);

  return waitAuthCheck ? (
    <FuseSplashScreen />
  ) : (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };


