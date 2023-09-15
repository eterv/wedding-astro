import { defaultLanguage, translations, type TranslationKey } from './config';

import type { AstroGlobal } from 'astro';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLanguage;
}

export function useTranslation(astro: AstroGlobal) {
  const lang = getLangFromUrl(astro.url);

  return {
    lang,
    t: (key: TranslationKey) =>
      (translations[lang] as any)[key] || translations[defaultLanguage][key],
  };
}
