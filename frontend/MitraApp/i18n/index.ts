import * as Localization from "expo-localization";
import I18n from "i18n-js";  

import en from "./en.json";
import hi from "./hi.json";
import kn from "./kn.json";

// ✅ configure translations
I18n.translations = { en, hi, kn };
I18n.defaultLocale = "en";
I18n.locale = (Localization.locale?.split("-")[0] ?? "en");
I18n.fallbacks = true;

// ✅ export i18n instance
export const i18n = I18n;

// ✅ change language helper
export const setLocale = (lng: "en" | "hi" | "kn") => {
  i18n.locale = lng;
};

export default i18n;
