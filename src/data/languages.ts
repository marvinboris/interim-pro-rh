import { Language } from '@chipsanalytics/ui-components-web';

export const getLanguages = async (): Promise<Language[]> => [
  {
    name: 'English',
    abbr: 'en',
    flag: 'gb',
  },
  {
    name: 'Français',
    abbr: 'fr',
    flag: 'fr',
  },
  {
    name: 'Português',
    abbr: 'pt',
    flag: 'pt',
  },
  {
    name: 'Español',
    abbr: 'es',
    flag: 'es',
  },
];
