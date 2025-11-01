declare module "i18n-js" {
  interface I18n {
    t(key: string, options?: any): string;
    locale: string;
    defaultLocale: string;
    fallbacks: boolean;
    translations: Record<string, any>;
  }
}
