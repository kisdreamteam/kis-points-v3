import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  return (
    <main className="app bg-slate-50">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {t('app.title')}
      </motion.h1>
    </main>
  )
}

export default App
