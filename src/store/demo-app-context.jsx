import { createContext } from "react";

export const DemoAppContext = createContext({
  theme: "",
  setTheme: () => {},
  fontSize: "",
  changeFontSize: () => {},
});
