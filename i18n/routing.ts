import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['zh', 'en'],
  defaultLocale: 'zh',
  localePrefix: 'never',
  localeDetection: true
});
 
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);
