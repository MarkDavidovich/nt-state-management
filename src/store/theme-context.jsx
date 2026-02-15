import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "",
  setTheme: () => {},
  fontSize: "",
  changeFontSize: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider component!");
  }

  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium");

  return <ThemeContext value={{ theme, setTheme, fontSize, setFontSize }}>{children}</ThemeContext>;
};
