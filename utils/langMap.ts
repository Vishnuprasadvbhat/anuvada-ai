// utils/languageMap.ts
export const languageMap: Record<string, string> = {
  en: 'english',
  hi: 'hindi',
  ja: 'japanese',
  fr: 'french',
  es: 'spanish',
  zh: 'chinese',
  de: 'german',
  ru: 'russian',
  ar: 'arabic',
  ko: 'korean',
  // Add more as needed
};

/**
 * Converts ISO language code to model-friendly language name
 * @param code ISO 639-1 code (e.g., 'en', 'ja')
 * @returns Language name (e.g., 'english', 'japanese')
 */
export function getModelLanguage(code: string): string {
  return languageMap[code.toLowerCase()] ?? 'english'; // fallback to English
}