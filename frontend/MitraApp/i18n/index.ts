import * as Localization from "expo-localization";
import I18n from "i18n-js";

import en from "./en.json";
import hi from "./hi.json";
import kn from "./kn.json";

// ✅ load language files into I18n
I18n.translations = { en, hi, kn };

// ✅ set defaults
I18n.defaultLocale = "en";
I18n.locale = Localization.locale.split("-")[0] || "en";
I18n.fallbacks = true;

// ✅ helper to translate keys
export const t = (key: string, options?: any) => I18n.t(key, options);

// ✅ change language function
export const setLocale = (lang: "en" | "hi" | "kn") => {
  I18n.locale = lang;
};

export default I18n;
