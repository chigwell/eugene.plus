import { useState, useEffect } from "react";

export const Options = () => {
  var { lsTheme, lsIcon, lsSnow } = "";
  try {
    lsTheme = localStorage.getItem("theme");
    lsIcon = localStorage.getItem("icon");
    lsSnow = JSON.parse(localStorage.getItem("snow"));
  } catch (e) {
    console.error(`All Cookies blocked - Error: ${e.message}`);
  }

  const [theme, setTheme] = useState(lsTheme || "light");
  const [icon, setIcon] = useState(lsIcon || "bx-moon");
  const [snow] = useState(lsSnow);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("icon", icon);
    localStorage.setItem("snow", snow);
    document.body.classList[theme === "dark" ? "add" : "remove"]("dark-theme");
  }, [theme, snow, icon]);

  const SnowEffect = () =>
    snow && theme === "dark";

  const _toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    icon === "bx-sun" ? setIcon("bx-moon") : setIcon("bx-sun");
  };

  return (
    <div className="home__options no-print" id="resume__options">
      <SnowEffect />
      <button
        type="button"
        className="bx bx-download download-pdf"
        title="Download CV as PDF"
        aria-label="Download CV as PDF"
        onClick={() => window.print()}
      />
      <button
        type="button"
        className={`bx ${icon} change-theme`}
        title="Toggle Theme"
        aria-label="Toggle Theme"
        id="theme-button"
        onClick={_toggleTheme}
      />
    </div>
  );
};
