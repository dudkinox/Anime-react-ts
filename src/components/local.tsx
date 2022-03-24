import { useState } from "react";
import HomePage from "../pages/home";

export default function Local() {
  const [language, setLanguage] = useState("th_TH");

  const handleOnclick = () => {
    setLanguage((prevState) => (prevState === "en_EN" ? "th_TH" : "en_EN"));
  };
  
  <HomePage />
  return (
    <button
      value={language}
      onClick={handleOnclick}
      style={{
        background: "transparent",
        color: "white",
        border: "none",
      }}
    >
      {language === "en_EN" ? "EN" : "TH"}
    </button>
  );
}
