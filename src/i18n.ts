import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Default to 'de' if locale is undefined
  const validLocale = locale && ['de', 'en', 'fa'].includes(locale) ? locale : 'de';
  
  return {
    locale: validLocale,
    messages: (await import(`./i18n/messages/${validLocale}.json`)).default
  };
});
