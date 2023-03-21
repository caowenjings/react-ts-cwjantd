import React, { useEffect, useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
import useMousePosition from "./hooks/useMousePosition";

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
  return (
    <div className="App">
      <ThemesContext.Provider value={themes.light}>
        <p>llll</p>
        <Hello msg="nihh" />
        <input type="text" ref={domRef} />
      </ThemesContext.Provider>
    </div>
  );
};

export default App;
