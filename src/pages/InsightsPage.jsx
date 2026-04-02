import { useState } from 'react'
import { MousePointer, Users, Eye, TrendingUp, ChevronDown } from 'lucide-react'
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

const clicksData = [
  { date: 'Mar 19', impressions: 1200, clicks: 800 },
  { date: 'Mar 20', impressions: 1800, clicks: 1200 },
  { date: 'Mar 21', impressions: 2400, clicks: 1600 },
  { date: 'Mar 22', impressions: 6200, clicks: 4800 },
  { date: 'Mar 23', impressions: 6800, clicks: 5200 },
  { date: 'Mar 24', impressions: 4200, clicks: 3100 },
  { date: 'Mar 25', impressions: 3800, clicks: 2800 },
  { date: 'Mar 26', impressions: 5200, clicks: 3900 },
  { date: 'Mar 27', impressions: 4600, clicks: 3400 },
  { date: 'Mar 28', impressions: 5800, clicks: 4200 },
  { date: 'Mar 29', impressions: 6400, clicks: 4800 },
  { date: 'Mar 30', impressions: 7200, clicks: 5600 },
  { date: 'Mar 31', impressions: 6800, clicks: 5100 },
  { date: 'Apr 01', impressions: 7600, clicks: 5800 },
]

const topLinks = [
  { name: 'Camera Gear List', clicks: 3420 },
  { name: 'My Portfolio', clicks: 2810 },
  { name: 'YouTube Channel', clicks: 1950 },
  { name: 'Discord Community', clicks: 1240 },
  { name: 'Preset Pack', clicks: 890 },
]

const stats = [
  {
    label: 'Total Clicks',
    value: '30,405',
    change: '+5,062%',
    positive: true,
    icon: MousePointer,
    color: 'brand',
  },
  {
    label: 'Unique Visitors',
    value: '20,192',
    change: '+0%',
    positive: true,
    icon: Users,
    color: 'blue',
  },
  {
    label: 'Total Impressions',
    value: '32,670',
    change: '+4,400%',
    positive: true,
    icon: Eye,
    color: 'emerald',
  },
]

const colorMap = {
  brand: { bg: 'bg-brand-50', text: 'text-brand-600', icon: 'text-brand-500' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', icon: 'text-blue-500' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', icon: 'text-emerald-500' },
}

const periods = ['7 Days', '14 Days', '30 Days', '90 Days']

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100">
        <p className="text-xs font-medium text-gray-400 mb-1">{label}</p>
        {payload.map((entry) => (
          <p key={entry.name} className="text-sm font-semibold" style={{ color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function InsightsPage() {
  const [period, setPeriod] = useState('14 Days')
  const [showPeriod, setShowPeriod] = useState(false)

  const maxClicks = Math.max(...topLinks.map((l) => l.clicks))

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-semibold text-gray-900">Insights</h1>
          <p className="mt-1 text-sm text-gray-500">Track your link performance and audience growth</p>
        </div>

        {/* Period selector */}
        <div className="relative">
          <button
            onClick={() => setShowPeriod(!showPeriod)}
            className="flex items-center gap-2 px-4 py-2.5 bg-surface-card border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-brand-300 transition-all"
          >
            {period}
            <ChevronDown size={14} className={`text-gray-400 transition-transform ${showPeriod ? 'rotate-180' : ''}`} />
          </button>

          {showPeriod && (
            <div className="absolute right-0 top-12 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-10 min-w-[120px]">
              {periods.map((p) => (
                <button
                  key={p}
                  onClick={() => { setPeriod(p); setShowPeriod(false) }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                    p === period ? 'text-brand-600 font-medium' : 'text-gray-600'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const colors = colorMap[stat.color]
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="bg-surface-card rounded-2xl border border-gray-100 p-5 shadow-card hover:shadow-card-hover transition-all duration-200 group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2 tracking-tight">{stat.value}</p>
                </div>
                <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon size={20} className={colors.icon} />
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <TrendingUp size={14} className="text-success" />
                <span className="text-sm font-semibold text-success">{stat.change}</span>
                <span className="text-xs text-gray-400">from last period</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Area chart */}
        <div className="lg:col-span-3 bg-surface-card rounded-2xl border border-gray-100 p-6 shadow-card">
          <h3 className="text-base font-semibold text-gray-900 mb-1">Clicks Over Time</h3>
          <p className="text-xs text-gray-400 mb-5">Impressions vs Clicks — last {period.toLowerCase()}</p>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={clicksData}>
                <defs>
                  <linearGradient id="impressionsFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e5b76d" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#e5b76d" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="clicksFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#b87b2e" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#b87b2e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="impressions"
                  name="Impressions"
                  stroke="#e5b76d"
                  fill="url(#impressionsFill)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="clicks"
                  name="Clicks"
                  stroke="#b87b2e"
                  fill="url(#clicksFill)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top performing links */}
        <div className="lg:col-span-2 bg-surface-card rounded-2xl border border-gray-100 p-6 shadow-card">
          <h3 className="text-base font-semibold text-gray-900 mb-1">Top Performing Links</h3>
          <p className="text-xs text-gray-400 mb-5">Clicks — last {period.toLowerCase()}</p>

          <div className="space-y-4">
            {topLinks.map((link, i) => (
              <div key={link.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-gray-700 font-medium truncate pr-4">{link.name}</span>
                  <span className="text-sm font-bold text-gray-900 tabular-nums">{link.clicks.toLocaleString()}</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${(link.clicks / maxClicks) * 100}%`,
                      background: `linear-gradient(90deg, #b87b2e, #d4943a)`,
                      opacity: 1 - i * 0.12,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
