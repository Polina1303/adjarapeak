import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./lang-switcher.module.css";

export const LangSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const languages = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "ka", label: "GE" },
  ];

  const changeLang = async (lang) => {
    setOpen(false);

    await i18n.changeLanguage(lang);

    localStorage.setItem("i18nextLng", lang);

    router.push({ pathname, query }, asPath, { locale: lang });

    document.documentElement.lang = lang;
  };

  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
      localStorage.setItem("i18nextLng", locale);
    }
  }, [locale, i18n]);

  const currentLangLabel =
    languages.find((l) => l.code === locale)?.label || locale.toUpperCase();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      <div onClick={() => setOpen(!open)} className={styles.currentLang}>
        {currentLangLabel}
        {open ? (
          <KeyboardArrowUpIcon fontSize="small" className={styles.arrowIcon} />
        ) : (
          <KeyboardArrowDownIcon
            fontSize="small"
            className={styles.arrowIcon}
          />
        )}
      </div>

      {open && (
        <div className={styles.dropdown}>
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => changeLang(lang.code)}
              className={`${styles.languageItem} ${
                locale === lang.code
                  ? styles.languageItemActive
                  : styles.languageItemInactive
              }`}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
