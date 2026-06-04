import { Outlet } from 'react-router-dom'
import { PublicHeader } from '@/shared/components/public/PublicHeader'

export function PublicLayout() {
  return (
    // Public shell: full-width header/footer, constrained page content inside main.

    <div className="min-h-screen h-screen flex flex-col md:gap-17 gap-10 bg-white">
      <header className="flex flex-row md:h-35 h-20 bg-brand-purple">
        <PublicHeader />
      </header>

      <main className="flex flex-row h-full">
        <Outlet />
      </main>

    </div>
  )
}
