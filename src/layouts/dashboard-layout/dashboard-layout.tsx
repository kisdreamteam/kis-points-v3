import { Outlet } from 'react-router-dom'

export function DashboardLayout() {
  return (
    // Layout wrapper
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header placeholder */}
      <header className="border-b border-slate-200 bg-white px-6 py-4">
        <p className="text-sm font-medium text-slate-600">Dashboard Header Placeholder</p>
      </header>

      <div className="mx-auto flex w-full max-w-7xl">
        {/* Sidebar placeholder */}
        <aside className="min-h-[calc(100vh-65px)] w-64 border-r border-slate-200 bg-white px-4 py-6">
          <p className="text-sm font-medium text-slate-600">Dashboard Sidebar Placeholder</p>
        </aside>

        {/* Main content area with nested routes */}
        <main className="flex-1 px-6 py-6">
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-4 text-sm font-medium text-slate-500">Dashboard Content Shell</p>
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  )
}
