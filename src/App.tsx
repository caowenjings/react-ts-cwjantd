import React, { useEffect, useState, useRef } from "react";
import "./App.css";

interface IThemeProps {
  [key: string]: { color: string; background: string };
}
const themes: IThemeProps = {
  light: { background: "red", color: "#fff" },
  dark: { background: "#000", color: "red" },
};

export const ThemesContext = React.createContext(themes.light);

const App: React.FC = () => {
  const domRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus();
    }
  });
  return <div className="App">oo</div>;
};

export default App;
