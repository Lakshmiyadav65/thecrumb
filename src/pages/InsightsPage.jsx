import { useState } from 'react'
import { MousePointer, Users, Eye, ChevronDown, Link2, ArrowUpRight, ExternalLink, TrendingUp, Lightbulb, Globe2, BarChart3, Sparkles } from 'lucide-react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar,
} from 'recharts'

/* ── Data ─────────────────────────────────────────────── */

const stats = [
  { label: 'Total Clicks', value: '27,440', change: '5228', icon: MousePointer, color: 'from-amber-500 to-orange-600' },
  { label: 'Unique Visitors', value: '18,813', change: '0', icon: Users, color: 'from-emerald-500 to-teal-600' },
  { label: 'Total Impressions', value: '30,167', change: '4862', icon: Eye, color: 'from-violet-500 to-purple-600' },
]

const clicksOverTime = [
  { date: 'Mar 20', impressions: 2100, clicks: 1800 },
  { date: 'Mar 22', impressions: 2400, clicks: 2200 },
  { date: 'Mar 24', impressions: 3200, clicks: 2800 },
  { date: 'Mar 26', impressions: 6200, clicks: 5800 },
  { date: 'Mar 28', impressions: 3400, clicks: 3000 },
  { date: 'Mar 30', impressions: 2600, clicks: 2300 },
  { date: 'Apr 1', impressions: 1200, clicks: 800 },
]

const topPerformingLinks = [
  { name: '8 Real Coding...', clicks: 3100 },
  { name: 'Input Guide', clicks: 2700 },
  { name: 'TCS NQT...', clicks: 2400 },
  { name: '20th March...', clicks: 2600 },
]

const linkPerformance = [
  { title: '8 Real Coding Questions', url: 'https://drive.google.com/file/d/1NM6wOKP...', clicks: 3214, change: 6459 },
  { title: 'Input Guide', url: 'https://aiwithlakshmitcs.vercel.app/input-h...', clicks: 2723, change: 3181 },
  { title: 'TCS NQT Previous Year Questions', url: 'https://drive.google.com/drive/folders/1SFc...', clicks: 2440, change: 6871 },
  { title: '20th March TCS NQT Analysis', url: 'https://aiwithlakshmitcs.vercel.app/tcs-nqt...', clicks: 2100, change: 4200 },
  { title: '8 Real Coding Questions', url: 'https://aiwithlakshmitcs.vercel.app/march-...', clicks: 1850, change: 3500 },
  { title: 'Capgemini Apply Link', url: 'https://app.joinsuperset.com/join/#/signup/...', clicks: 1620, change: 2900 },
]

const countriesData = [
  { country: 'India', flag: '🇮🇳', clicks: 29973, level: 'High' },
  { country: 'United States', flag: '🇺🇸', clicks: 114, level: 'Medium' },
  { country: 'Ireland', flag: '🇮🇪', clicks: 23, level: 'Low' },
  { country: 'Sweden', flag: '🇸🇪', clicks: 16, level: 'Low' },
  { country: 'United Kingdom', flag: '🇬🇧', clicks: 8, level: 'Low' },
  { country: 'Japan', flag: '🇯🇵', clicks: 7, level: 'Low' },
  { country: 'Singapore', flag: '🇸🇬', clicks: 6, level: 'Low' },
  { country: 'Romania', flag: '🇷🇴', clicks: 4, level: 'Low' },
  { country: 'The Netherlands', flag: '🇳🇱', clicks: 3, level: 'Low' },
  { country: 'Spain', flag: '🇪🇸', clicks: 1, level: 'Low' },
  { country: 'Hong Kong', flag: '🇭🇰', clicks: 1, level: 'Low' },
  { country: 'Taiwan', flag: '🇹🇼', clicks: 1, level: 'Low' },
  { country: 'Norway', flag: '🇳🇴', clicks: 1, level: 'Low' },
]

const suggestions = [
  { title: 'Add more social links', description: 'Connect your Instagram, Twitter, and LinkedIn profiles to increase engagement and cross-platform visibility.', tag: 'Growth' },
  { title: 'Optimize link titles', description: 'Use action-oriented titles like "Download Free Guide" instead of generic names to boost click-through rates.', tag: 'CTR' },
  { title: 'Schedule posts during peak hours', description: 'Your audience is most active between 10 AM – 2 PM IST. Share new links during these windows for maximum impressions.', tag: 'Timing' },
  { title: 'Create a custom page', description: 'Use a custom landing page for your top-performing content to provide a richer experience and keep visitors engaged longer.', tag: 'Engagement' },
]

/* ── Tooltip ──────────────────────────────────────────── */

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-gray-900 rounded-xl px-4 py-3 shadow-xl border border-white/10">
      <p className="text-[11px] text-gray-400 mb-1.5">{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className="text-sm font-semibold text-white">
          {entry.name}: {entry.value.toLocaleString()}
        </p>
      ))}
    </div>
  )
}

/* ── Tab: Link Performance ────────────────────────────── */

function LinkPerformanceTab() {
  return (
    <div className="space-y-4">
      {linkPerformance.map((link, i) => (
        <div key={i} className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-border hover:border-brand-200 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center shrink-0">
            <Link2 size={17} className="text-brand-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-text-primary truncate">{link.title}</h4>
            <p className="text-xs text-text-muted truncate mt-0.5">{link.url}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-xl font-bold text-text-primary">{link.clicks.toLocaleString()}</p>
            <p className="text-[11px] text-text-muted">clicks (14d)</p>
          </div>
          <div className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600">
            <ArrowUpRight size={13} />
            <span className="text-xs font-bold">{link.change}%</span>
          </div>
          <button className="p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-surface-muted text-text-muted transition-all cursor-pointer">
            <ExternalLink size={15} />
          </button>
        </div>
      ))}
    </div>
  )
}

/* ── Tab: Geographic Data ─────────────────────────────── */

function GeographicDataTab() {
  const maxClicks = countriesData[0].clicks

  return (
    <div className="space-y-6">
      {/* Visual summary bar */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-800 to-brand-900 text-white">
        <h3 className="text-lg font-semibold mb-2">Geographic Distribution</h3>
        <p className="text-sm text-brand-200">Your audience spans {countriesData.length} countries. India dominates with 99.4% of all traffic.</p>
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-white" />
            <span className="text-xs text-brand-200">High Activity</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-400" />
            <span className="text-xs text-brand-200">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-600" />
            <span className="text-xs text-brand-200">Low Activity</span>
          </div>
        </div>
      </div>

      {/* Countries grid */}
      <div className="grid grid-cols-3 gap-3">
        {countriesData.map((c) => {
          const barWidth = Math.max((c.clicks / maxClicks) * 100, 3)
          const levelStyle = c.level === 'High'
            ? 'bg-brand-800 text-white'
            : c.level === 'Medium'
              ? 'bg-brand-200 text-brand-800'
              : 'bg-gray-100 text-text-secondary'

          return (
            <div key={c.country} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border hover:border-brand-200 transition-colors">
              <span className="text-2xl shrink-0">{c.flag}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-text-primary truncate">{c.country}</span>
                  <span className="text-sm font-bold text-text-primary ml-2">{c.clicks.toLocaleString()}</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-brand-500 transition-all duration-700"
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${levelStyle}`}>
                {c.level}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ── Tab: Suggestions ─────────────────────────────────── */

function SuggestionsTab() {
  return (
    <div className="space-y-4">
      {suggestions.map((s, i) => (
        <div key={i} className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-border hover:border-brand-200 transition-all">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-orange-50 flex items-center justify-center shrink-0 mt-0.5">
            <Lightbulb size={18} className="text-amber-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-sm font-semibold text-text-primary">{s.title}</h4>
              <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-brand-50 text-brand-600">{s.tag}</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Main Page ────────────────────────────────────────── */

function InsightsPage() {
  const [activeTab, setActiveTab] = useState('performance')
  const [period, setPeriod] = useState('14 Days')
  const [showDropdown, setShowDropdown] = useState(false)

  const tabs = [
    { id: 'performance', label: 'Link Performance', icon: BarChart3 },
    { id: 'geographic', label: 'Geographic Data', icon: Globe2 },
    { id: 'suggestions', label: 'Suggestions', icon: Sparkles },
  ]

  const periods = ['7 Days', '14 Days', '30 Days', '90 Days']

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      {/* ── Hero Banner ── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 px-8 py-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-400/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />

        <div className="relative flex items-center justify-between mb-7">
          <div>
            <h1 className="text-3xl font-display font-bold text-white">Insights</h1>
            <p className="text-sm text-brand-200 mt-1">Your page performance at a glance</p>
          </div>

          {/* Period Selector */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-xl text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer border border-white/10"
            >
              {period}
              <ChevronDown size={15} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showDropdown && (
              <div className="absolute top-full mt-2 right-0 w-36 bg-white rounded-xl shadow-xl border border-border overflow-hidden z-20">
                {periods.map((p) => (
                  <button
                    key={p}
                    onClick={() => { setPeriod(p); setShowDropdown(false) }}
                    className={`w-full px-4 py-2.5 text-sm text-left hover:bg-surface-muted transition-colors cursor-pointer ${
                      p === period ? 'font-semibold text-brand-600 bg-brand-50' : 'text-text-primary'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stat Cards — glass style */}
        <div className="relative grid grid-cols-3 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-brand-200">{stat.label}</p>
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <Icon size={16} className="text-white" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
                <p className="text-xs text-emerald-400 font-medium mt-2 flex items-center gap-1">
                  <TrendingUp size={12} />
                  ↑{stat.change}% from last period
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Charts Row ── */}
      <div className="grid grid-cols-5 gap-5">
        {/* Clicks Over Time */}
        <div className="col-span-3 rounded-2xl bg-white border border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-semibold text-text-primary">Clicks Over Time</h3>
            <div className="flex items-center gap-4 text-xs text-text-secondary">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-700" />
                Impressions
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-400" />
                Clicks
              </span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={clicksOverTime} margin={{ top: 5, right: 5, left: -15, bottom: 0 }}>
              <defs>
                <linearGradient id="impressionsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9c5f10" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#9c5f10" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="clicksGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f5b642" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#f5b642" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f2ef" vertical={false} />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#a8a29e' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#a8a29e' }} axisLine={false} tickLine={false} />
              <Tooltip content={<ChartTooltip />} />
              <Area type="monotone" dataKey="impressions" stroke="#9c5f10" strokeWidth={2} fill="url(#impressionsGrad)" dot={{ r: 3.5, fill: '#9c5f10', stroke: '#fff', strokeWidth: 2 }} name="Impressions" />
              <Area type="monotone" dataKey="clicks" stroke="#f5b642" strokeWidth={2} fill="url(#clicksGrad)" dot={{ r: 3.5, fill: '#f5b642', stroke: '#fff', strokeWidth: 2 }} name="Clicks" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Top Performing Links */}
        <div className="col-span-2 rounded-2xl bg-white border border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-semibold text-text-primary">Top Performing</h3>
            <span className="flex items-center gap-1.5 text-xs text-text-secondary">
              <span className="w-2.5 h-2.5 rounded bg-brand-700" />
              Clicks ({period})
            </span>
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={topPerformingLinks} margin={{ top: 5, right: 0, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f2ef" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#a8a29e' }} axisLine={false} tickLine={false} interval={0} />
              <YAxis tick={{ fontSize: 11, fill: '#a8a29e' }} axisLine={false} tickLine={false} />
              <Tooltip content={<ChartTooltip />} />
              <Bar dataKey="clicks" radius={[6, 6, 0, 0]} barSize={40} name="Clicks">
                {topPerformingLinks.map((_, index) => (
                  <rect key={index} fill={index === 0 ? '#6d4210' : index === 1 ? '#9c5f10' : index === 2 ? '#c47d12' : '#e69c1e'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ── Tabs Section ── */}
      <div className="rounded-2xl bg-white border border-border overflow-hidden">
        {/* Tab header */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all cursor-pointer relative ${
                  activeTab === tab.id
                    ? 'text-brand-700 bg-brand-50/50'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-muted/50'
                }`}
              >
                <Icon size={16} />
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-500" />
                )}
              </button>
            )
          })}
        </div>

        {/* Tab content */}
        <div className="p-6">
          {activeTab === 'performance' && <LinkPerformanceTab />}
          {activeTab === 'geographic' && <GeographicDataTab />}
          {activeTab === 'suggestions' && <SuggestionsTab />}
        </div>
      </div>
    </div>
  )
}

export default InsightsPage
