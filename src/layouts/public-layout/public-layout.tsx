import { Outlet } from 'react-router-dom'
import { PublicHeader } from '@/shared/components/public-header/PublicHeader'

export function PublicLayout() {
  return (
    // Public shell: full-width header/footer, constrained page content inside main.
    <div className="min-h-screen flex flex-col">
      
      <header className="flex flex-row 
                         lg:h-35 
                         md:h-30 
                         sm:h-25 
                         h-20
                         bg-brand-purple">
        <PublicHeader />
      </header>


      <main className="flex-1 h-full grid grid-cols-1 md:grid-cols-2 bg-brand-cream">
        <Outlet />
      </main>
      
    </div>
  )
}
