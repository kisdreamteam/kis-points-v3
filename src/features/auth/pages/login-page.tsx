import { Link } from 'react-router-dom'

export function LoginPage() {
  return (
    <div className="w-full space-y-3">
      {/* Auth placeholder page for route and layout checks. */}
      <h1 className="text-2xl font-semibold">Login Page</h1>
      <p className="text-slate-600">This is the Login Page. It should render inside AuthLayout.</p>
      <Link className="text-sm text-blue-700 underline" to="/auth/forgot-password">Forgot password?</Link>
    </div>
  )
}
