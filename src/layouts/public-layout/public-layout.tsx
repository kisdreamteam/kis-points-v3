import { Outlet } from 'react-router-dom'
import { PublicHeader } from '@/shared/components/public/PublicHeader'

export function PublicLayout() {
  return (
    // Public shell: full-width header/footer, constrained page content inside main.

    <div className="min-h-dvh flex flex-col gap-[clamp(2.5rem,4.7vw,5rem)] bg-white">
      <header className="relative flex h-[clamp(5rem,10vw,8.75rem)] min-w-[200px] overflow-visible bg-brand-purple">
        <PublicHeader />
      </header>

      <main className="flex justify-center sm:justify-center md:justify-center lg:justify-center">
        <Outlet />
      </main>

    </div>
  )
}
