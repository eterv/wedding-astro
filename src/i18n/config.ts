import ko from './ko.json';
import zh from './zh.json';

export type TranslationKey = keyof typeof ko;

export const languages = {
  ko: '한국어',
  zh: 'Chinese',
};
export type Language = keyof typeof languages;

export const defaultLanguage = 'ko' satisfies Language;

export const translations = { ko, zh } as const;
