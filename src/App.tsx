import React from "react";
import "./App.css";
import i18n from "i18next";
import "src/locales/ja.json";
import "src/locales/zh.json";
import { I18nextProvider } from "react-i18next";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "src/components/pages";

export const App: React.FC = () => {
  i18n.init({
    lng: localStorage.getItem("language") ?? "zh",
    resources: {
      ja: {
        translation: require("./locales/ja.json"),
      },
      zh: {
        translation: require("./locales/zh.json"),
      },
    },
    fallbackLng: "zh",
    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;
