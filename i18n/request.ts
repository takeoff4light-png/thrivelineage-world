import {getRequestConfig} from "next-intl/server";

const LOCALES = ["en", "de", "af"] as const;
const DEFAULT_LOCALE = "en";

export default getRequestConfig(async ({requestLocale}) => {
  // requestLocale can be undefined or invalid during some rendering paths
  let locale = await requestLocale;

  if (!locale || !LOCALES.includes(locale as any)) {
    locale = DEFAULT_LOCALE;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
