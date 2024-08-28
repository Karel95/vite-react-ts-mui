import "./App.css";
import MiniDrawer from "./modules/sidebar";
import { useEffect, useState } from "react";
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Auto-theme detection
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    // Detecta el tema al cargar la app
    setIsDarkMode(mediaQuery.matches);

    // Escucha cambios en las preferencias del sistema
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeIcon = isDarkMode ? <DarkModeIcon /> : <LightModeIcon />;

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <MiniDrawer />
        <div style={{ padding: "16px", marginLeft: "20rem" }}>
          <Button
            startIcon={themeIcon}
            variant="contained"
            color="primary"
            onClick={toggleTheme}
          >
            Toggle Theme
          </Button>
          <h1>Hello, MUI!</h1>
          <p>This is a {isDarkMode ? "dark" : "light"} theme.</p>
        </div>
      </ThemeProvider>
    </>
  );
}
