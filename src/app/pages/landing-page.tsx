import { Link } from 'react-router-dom'

export function LandingPage() {
  return (
    <div className="space-y-4">
      {/* Public placeholder page for routing and layout checks. */}
      <h1 className="text-2xl font-semibold">Landing Page</h1>
      <p className="text-slate-600">This is the Landing Page. It should render inside PublicLayout.</p>
      <nav className="flex flex-wrap gap-3 text-sm">
        <Link className="text-blue-700 underline" to="/auth/login">Go to Login</Link>
        <Link className="text-blue-700 underline" to="/auth/signup">Go to Signup</Link>
        <Link className="text-blue-700 underline" to="/dashboard">Go to Dashboard</Link>
      </nav>
    </div>
  )
}
