import { useLocation } from 'react-router-dom'
import { Plus, Bell, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const pageTitles = {
  '/links': 'Links',
  '/custom-pages': 'Custom Pages',
  '/insights': 'Insights',
  '/monetization': 'Monetization',
  '/settings': 'Settings',
}

const pageDescriptions = {
  '/links': 'Manage and organize your links',
  '/custom-pages': 'Build custom landing pages',
  '/insights': 'Track your page performance',
  '/monetization': 'Earn from your audience',
  '/settings': 'Manage your account',
}

function Header({ onAddLink }) {
  const location = useLocation()
  const [copied, setCopied] = useState(false)
  const title = pageTitles[location.pathname] || 'Dashboard'
  const description = pageDescriptions[location.pathname] || ''

  const handleCopy = () => {
    navigator.clipboard.writeText('thecrumb.io/lakshmi')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <header className="sticky top-0 z-30 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-8 py-4">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
          <p className="text-sm text-text-secondary mt-0.5">{description}</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Copy link */}
          <button
            onClick={handleCopy}
            className="btn-secondary flex items-center gap-2 text-sm !py-2 !px-4"
          >
            {copied ? <Check size={15} className="text-success" /> : <Copy size={15} />}
            {copied ? 'Copied!' : 'thecrumb.io/lakshmi'}
          </button>

          {/* Notification */}
          <button className="relative p-2.5 rounded-lg border border-border bg-white hover:bg-surface-muted transition-colors cursor-pointer">
            <Bell size={18} className="text-text-secondary" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-brand-500 rounded-full" />
          </button>

          {/* Add link (only on links page) */}
          {location.pathname === '/links' && (
            <button onClick={onAddLink} className="btn-primary flex items-center gap-2 text-sm !py-2">
              <Plus size={16} />
              Add Link
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
