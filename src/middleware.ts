import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['de', 'en', 'fa'],
  defaultLocale: 'de',
  localePrefix: 'as-needed',
  localeDetection: false  // Disable automatic locale detection
});

export const config = {
  // Match only internationalized pathnames, exclude static assets
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.jpg|.*\\.jpeg|.*\\.png|.*\\.gif|.*\\.svg|.*\\.webp).*)']
};