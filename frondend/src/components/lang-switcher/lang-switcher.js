import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const LangSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const languages = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "ka", label: "GE" },
  ];

  const changeLang = (lang) => {
    setOpen(false);
    router.push({ pathname, query }, asPath, { locale: lang });
  };

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
    <div ref={ref} style={{ position: "relative", cursor: "pointer" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          color: "#101010ff",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {currentLangLabel}{" "}
        {open ? (
          <KeyboardArrowUpIcon fontSize="small" />
        ) : (
          <KeyboardArrowDownIcon fontSize="small" />
        )}
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            background: "#222",
            borderRadius: 4,
            overflow: "hidden",
            marginTop: 4,
            minWidth: 50,
          }}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => changeLang(lang.code)}
              style={{
                padding: "6px 10px",
                background: "#222",
                color: locale === lang.code ? "#ff6f00" : "#fff",
                fontWeight: locale === lang.code ? 600 : 500,
                textAlign: "center",
              }}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
