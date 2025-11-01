declare module "i18n-js" {
  interface I18n {
    t(key: string, options?: any): string;
    translations: Record<string, any>;
    locale: string;
    defaultLocale: string;
    fallbacks: boolean;
  }
}
