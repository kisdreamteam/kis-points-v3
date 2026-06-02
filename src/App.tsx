import { Navigate, Route, Routes } from 'react-router-dom'
import { LandingPage } from '@/app/pages/landing-page'
import { AuthLayout, DashboardLayout, PublicLayout } from '@/layouts/index'
import {
  ForgotPasswordPage,
  LoginPage,
  ResetPasswordPage,
  SignupPage,
} from '@/features/auth/pages'
import { DashboardPage } from '@/features/dashboard/pages'

function App() {
  return (
    // Route shells verify folder structure and layout composition.
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
