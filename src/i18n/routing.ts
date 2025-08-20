import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'en', 'fa'],
  defaultLocale: 'de',
  localePrefix: 'as-needed'
});
