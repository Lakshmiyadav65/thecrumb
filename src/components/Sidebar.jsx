import { NavLink } from 'react-router-dom'
import { Link2, FileText, BarChart3, DollarSign, Settings } from 'lucide-react'

const navItems = [
  { to: '/links', label: 'Links', icon: Link2 },
  { to: '/custom-pages', label: 'Custom Pages', icon: FileText },
  { to: '/insights', label: 'Insights', icon: BarChart3 },
  { to: '/monetization', label: 'Monetization', icon: DollarSign },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-surface-sidebar text-white flex flex-col shrink-0">
      {/* Logo */}
      <div className="px-7 pt-8 pb-10">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-white">
          The Crumb
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-brand-500/20 text-brand-200 shadow-[inset_3px_0_0_var(--color-brand-400)]'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <Icon
              size={20}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="px-5 py-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-brand-500/30 flex items-center justify-center text-sm font-semibold text-brand-200">
            L
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-white/90 truncate">Lakshmi</p>
            <p className="text-xs text-white/40 truncate">Creator</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
