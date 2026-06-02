import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    // Auth shell: full-width stage with centered, constrained card for page content.
    <div className="flex min-h-screen w-full flex-col bg-slate-50">
      <main className="flex min-w-0 flex-1 w-full items-center justify-center px-4 py-10 md:px-6">
        <section className="w-full">
          <div className="mx-auto w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  )
}
