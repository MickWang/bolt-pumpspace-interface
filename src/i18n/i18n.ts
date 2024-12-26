import { createContext, useContext } from 'react';

export type Language = 'en' | 'zh';

export interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, variables?: Record<string, any>) => string;
}

export const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export function getNestedValue(obj: any, path: string, variables?: Record<string, any>): string {
  const value = path.split('.').reduce((acc, part) => acc?.[part], obj) || path;
  
  if (!variables) return value;
  
  return value.replace(/\{\{([^}]+)\}\}/g, (_, key) => {
    const trimmedKey = key.trim();
    return variables[trimmedKey]?.toString() || `{{${trimmedKey}}}`;
  });
}