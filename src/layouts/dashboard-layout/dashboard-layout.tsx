import { Outlet } from 'react-router-dom'

export function DashboardLayout() {
  return (
    // Dashboard shell: header, sidebar, and main stage with clear boundaries.
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <header className="w-full shrink-0 border-b border-slate-200 bg-white px-4 py-4 md:px-6">
        <p className="text-sm font-medium text-slate-600">Dashboard Header Placeholder</p>
      </header>

      <div className="flex min-w-0 flex-1 w-full flex-col md:flex-row">
        <aside className="w-full shrink-0 border-b border-slate-200 bg-white px-4 py-4 md:w-64 md:border-b-0 md:border-r md:py-6">
          <p className="text-sm font-medium text-slate-600">Dashboard Sidebar Placeholder</p>
        </aside>

        <main className="min-w-0 flex-1 w-full px-4 py-6 md:px-6">
          <section className="w-full">
            <div className="mx-auto w-full max-w-7xl">
              <Outlet />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
