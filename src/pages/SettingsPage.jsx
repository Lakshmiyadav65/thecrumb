import { Settings } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your account and preferences</p>
      </div>

      <div className="flex items-center justify-center py-24">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto">
            <Settings size={28} className="text-brand-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">Settings page</h3>
          <p className="text-sm text-gray-400 max-w-sm">Share screenshots of this section and I'll build it out with the right design.</p>
        </div>
      </div>
    </div>
  )
}
