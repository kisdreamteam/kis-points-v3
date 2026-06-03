import { Outlet } from 'react-router-dom'
import { PublicHeader } from '@/shared/components/public/PublicHeader'
import { PublicHeroMascot } from '@/shared/components/public/PublicHeroMascot'

export function PublicLayout() {
  return (
    // Public shell: full-width header/footer, constrained page content inside main.

    <div className="min-h-screen flex flex-col md:gap-10 gap-5 bg-white">

      <header className="flex flex-row md:h-35 h-20 bg-brand-purple">
        <PublicHeader />
      </header>

      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex justify-center items-center">
          <PublicHeroMascot />
        </div>
        <Outlet />
      </main>

    </div>
  )
}
