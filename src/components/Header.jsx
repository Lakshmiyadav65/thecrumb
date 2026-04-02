import { Bell, Search } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/links': 'Links',
  '/custom-pages': 'Custom Pages',
  '/insights': 'Insights',
  '/monetization': 'Monetization',
  '/settings': 'Settings',
}

export default function Header() {
  const location = useLocation()
  const title = pageTitles[location.pathname] || 'Dashboard'

  return (
    <header className="h-16 px-8 flex items-center justify-between border-b border-black/5 bg-white/60 backdrop-blur-sm shrink-0">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 w-56 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition-all"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Bell size={18} className="text-gray-500" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-400 rounded-full" />
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-sm font-semibold cursor-pointer hover:shadow-md transition-shadow">
          L
        </div>
      </div>
    </header>
  )
}
