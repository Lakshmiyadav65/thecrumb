import { DollarSign, TrendingUp, CreditCard, Gift, Lock, ArrowUpRight } from 'lucide-react'

const earningsData = [
  { label: 'Total Earnings', value: '$0.00', icon: DollarSign },
  { label: 'This Month', value: '$0.00', icon: TrendingUp },
  { label: 'Pending Payout', value: '$0.00', icon: CreditCard },
]

const features = [
  {
    title: 'Tip Jar',
    description: 'Let your audience support you with one-time tips. Set custom amounts or let them choose.',
    icon: Gift,
    available: true,
  },
  {
    title: 'Paid Links',
    description: 'Gate exclusive content behind a paywall. Charge one-time fees for premium resources.',
    icon: Lock,
    available: true,
  },
  {
    title: 'Subscriptions',
    description: 'Offer recurring memberships for exclusive access to your content and community.',
    icon: CreditCard,
    available: false,
  },
]

function MonetizationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Earnings Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {earningsData.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.label} className="card p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                  <Icon size={18} className="text-brand-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-text-primary">{item.value}</p>
              <p className="text-xs text-text-secondary mt-0.5">{item.label}</p>
            </div>
          )
        })}
      </div>

      {/* Monetization Features */}
      <h3 className="text-lg font-semibold text-text-primary mb-4">Monetization Tools</h3>
      <div className="space-y-4">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div key={feature.title} className="card p-6 flex items-center gap-5 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                <Icon size={22} className="text-brand-600" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-text-primary">{feature.title}</h4>
                  {!feature.available && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-100 text-brand-700">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">{feature.description}</p>
              </div>

              <button
                className={`shrink-0 px-5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  feature.available
                    ? 'btn-primary'
                    : 'bg-surface-muted text-text-muted cursor-not-allowed'
                }`}
                disabled={!feature.available}
              >
                {feature.available ? 'Enable' : 'Notify Me'}
              </button>
            </div>
          )
        })}
      </div>

      {/* Payout Settings */}
      <div className="card p-6 mt-8">
        <h3 className="text-base font-semibold text-text-primary mb-1">Payout Settings</h3>
        <p className="text-sm text-text-secondary mb-5">Connect your payment method to receive payouts</p>

        <button className="btn-secondary flex items-center gap-2 text-sm">
          <CreditCard size={16} />
          Connect Payment Method
        </button>
      </div>
    </div>
  )
}

export default MonetizationPage
