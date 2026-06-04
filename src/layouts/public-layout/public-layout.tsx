import { Outlet } from 'react-router-dom'
import { PublicHeader } from '@/shared/components/public/PublicHeader'

export function PublicLayout() {
  return (
    // Public shell: full-width header/footer, constrained page content inside main.

    <div className="min-h-screen flex flex-col md:gap-17 gap-10 bg-white">
      <header className="relative flex h-[clamp(5rem,10vw,8.75rem)] overflow-visible bg-brand-purple">
        <PublicHeader />
      </header>

      <main className="flex flex-row h-full">
        <Outlet />
      </main>

    </div>
  )
}
