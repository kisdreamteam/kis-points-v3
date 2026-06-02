import { Outlet } from 'react-router-dom'

export function PublicLayout() {
  return (
    // Public shell: full-width header/footer, constrained page content inside main.
    <div className="flex min-h-screen w-full flex-col bg-white">
      <header className="flex h-20 w-full shrink-0 flex-row bg-brand-purple md:h-25 lg:h-35" />

      <main className="min-w-0 flex-1 w-full bg-brand-cream">
        <section className="w-full">
          <div className="mx-auto w-full px-4 md:px-6">
            <Outlet />
          </div>
        </section>
      </main>

      <footer className="hidden h-20 w-full shrink-0 bg-brand-purple md:block md:h-25 lg:h-35" />
    </div>
  )
}
