"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations } from "../translations/translations";

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState("en");

  // Load saved preference on first mount
  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("siteLanguage") : null;
    if (saved && (saved === "en" || saved === "ar")) {
      setLanguageState(saved);
    }
  }, []);

  // Reflect language on <html> for direction + lang attribute, and persist choice
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("siteLanguage", language);
    }
  }, [language]);

  const setLanguage = useCallback((lang) => {
    if (lang === "en" || lang === "ar") {
      setLanguageState(lang);
    }
  }, []);

  // t("section.key") -> looks up translations[language].section.key, falls back to English, then to the key itself
  const t = useCallback(
    (key) => {
      const lookup = (dict) =>
        key.split(".").reduce((acc, part) => (acc && typeof acc === "object" ? acc[part] : undefined), dict);

      const value = lookup(translations[language]);
      if (value !== undefined) return value;

      const fallback = lookup(translations.en);
      if (fallback !== undefined) return fallback;

      return key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
