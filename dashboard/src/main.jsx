import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext({
  isAuthenticated: false,
  admin: {}, // Ensure 'admin' exists
  setAdmin: () => {}, // Ensure 'setAdmin' exists
});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState({}); // Ensure 'admin' is used instead of 'user'

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        admin, // Provide 'admin' instead of 'user'
        setAdmin, // Provide 'setAdmin' instead of 'setUser'
      }}
    >
      <App />
    </Context.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
