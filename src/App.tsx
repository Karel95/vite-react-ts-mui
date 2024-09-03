import "./App.css";
import MiniDrawer from "./components/sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./themes";
import { useEffect, useState } from "react";
import ThemeMode from "./components/themeMode";
import ResponsiveAppBar from "./components/header";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función para alternar el modo
  const mode = (newMode: boolean) => {
    setIsDarkMode(newMode);
  };

  // Auto-theme detection
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Detecta el tema al cargar la app
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    // Escucha cambios en las preferencias del sistema
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <MiniDrawer />
        <ThemeMode isDarkMode={isDarkMode} mode={mode} />
      </ThemeProvider>
    </>
  );
}
