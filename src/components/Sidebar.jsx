import { NavLink } from 'react-router-dom'
import { Link2, FileText, PieChart, DollarSign, Settings, ExternalLink } from 'lucide-react'

const navItems = [
  { to: '/links', label: 'Links', icon: Link2 },
  { to: '/custom-pages', label: 'Custom Pages', icon: FileText },
  { to: '/insights', label: 'Insights', icon: PieChart },
  { to: '/monetization', label: 'Monetization', icon: DollarSign },
  { to: '/settings', label: 'Settings', icon: Settings },
]

function Sidebar() {
  return (
    <aside className="w-[240px] shrink-0 h-screen bg-sidebar flex flex-col sticky top-0">
      {/* Logo */}
      <div className="px-6 py-6">
        <h1 className="text-2xl font-display text-white italic">
          The Crumb
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1 mt-2">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-brand-500/15 text-brand-400'
                  : 'text-stone-400 hover:text-white hover:bg-sidebar-hover'
              }`
            }
          >
            <Icon size={18} strokeWidth={1.8} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="px-3 pb-5 space-y-3">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-stone-400 hover:text-white hover:bg-sidebar-hover transition-all duration-200"
        >
          <ExternalLink size={18} strokeWidth={1.8} />
          View my page
        </a>

        <div className="mx-3 border-t border-white/10" />

        <div className="flex items-center gap-3 px-4 py-2">
          <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs font-semibold">
            L
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white font-medium truncate">Lakshmi</p>
            <p className="text-xs text-stone-500 truncate">thecrumb.io/lakshmi</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
