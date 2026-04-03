import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import LinksPage from './pages/LinksPage'
import CustomPagesPage from './pages/CustomPagesPage'
import InsightsPage from './pages/InsightsPage'
import MonetizationPage from './pages/MonetizationPage'
import SettingsPage from './pages/SettingsPage'

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto px-8 py-8">
          <Routes>
            <Route path="/" element={<Navigate to="/links" replace />} />
            <Route path="/links" element={<LinksPage />} />
            <Route path="/custom-pages" element={<CustomPagesPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/monetization" element={<MonetizationPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
