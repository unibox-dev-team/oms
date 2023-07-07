import { useTranslation } from "react-i18next";
// material
import { enUS, viVN } from "@mui/material/locale";

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: "English",
    value: "en",
    systemValue: enUS,
    icon: "/assets/icons/usa-flag.svg",
  },
  {
    label: "Tieng Viet",
    value: "vn",
    systemValue: viVN,
    icon: "/assets/icons/korean-flag.svg",
  },
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem("i18nextLng");
  const currentLang = LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = (newlang) => {
    i18n.changeLanguage(newlang);
    localStorage.setItem("i18nextLng", newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}