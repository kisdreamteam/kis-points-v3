import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enCommon from '@/shared/translations/en/common.json'
import viCommon from '@/shared/translations/vi/common.json'
import koCommon from '@/shared/translations/ko/common.json'
// Future languages belong in: src/shared/translations/<language-code>/common.json

void i18n.use(initReactI18next).init({
  // Keep one simple namespace now; feature namespaces can be added later.
  ns: ['common'],
  defaultNS: 'common',
  resources: {
    en: { common: enCommon },
    vi: { common: viCommon },
    ko: { common: koCommon },
  },
  // Start in English and fall back to English if a key is missing.
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

// Exporting the configured instance keeps setup centralized and reusable.
export default i18n
