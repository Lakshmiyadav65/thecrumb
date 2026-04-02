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
    <aside className="w-[260px] min-w-[260px] bg-surface-sidebar text-white flex flex-col shrink-0 h-screen">
      {/* Logo */}
      <div className="px-8 pt-8 pb-10">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-white">
          The Crumb
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 space-y-1.5">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `group flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-[14px] font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-brand-500/20 text-brand-200 border-l-[3px] border-brand-400'
                  : 'text-white/55 hover:text-white hover:bg-white/[0.06] border-l-[3px] border-transparent'
              }`
            }
          >
            <Icon
              size={20}
              strokeWidth={1.8}
              className="shrink-0 transition-transform duration-200 group-hover:scale-110"
            />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="px-6 py-5 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-500/30 flex items-center justify-center text-sm font-semibold text-brand-200 shrink-0">
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
