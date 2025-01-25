import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'
import { AuthProvider, useAuth } from './contexts/AuthContext'

function AppContent() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="app">
      {isAuthenticated ? <HomePage /> : <LoginPage />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
