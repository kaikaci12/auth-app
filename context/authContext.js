import { createContext, useEffect } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  useEffect(() => {
    // onAuthStateChanged is a firebase method that listens for changes in the authentication state
  });
  const login = (email, password) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  const logOut = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  const register = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
};
