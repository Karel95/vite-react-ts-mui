import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Button } from "@mui/material";
import { useEffect } from "react";

// Definimos los tipos de las props
type ModeProps = {
  isDarkMode: boolean;
  mode: (newMode: boolean) => void;
};

const ThemeMode: React.FC<ModeProps> = ({ isDarkMode, mode }) => {
  // useEffect
  useEffect(() => {
    mode(!isDarkMode);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    mode(!isDarkMode);
  };

  const themeIcon = isDarkMode ? <DarkModeIcon /> : <LightModeIcon />;

  return (
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
  );
};

export default ThemeMode;
