import * as Localization from "expo-localization";

import en from "./en.json";
import hi from "./hi.json";
import kn from "./kn.json";

const languages: any = { en, hi, kn };

let currentLocale = Localization.getLocales()[0].languageCode || "en";

export const setLocale = (lang: "en" | "hi" | "kn") => { 
  currentLocale = lang; 
};

export const t = (key: string) => {
  const dict = languages[currentLocale] || languages["en"];

  return key.split(".").reduce((obj: any, part) => obj?.[part], dict) 
         || key;
};
