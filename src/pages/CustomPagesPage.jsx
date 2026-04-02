import { FileText, Plus } from 'lucide-react'

export default function CustomPagesPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold text-gray-900">Custom Pages</h1>
        <p className="mt-1 text-sm text-gray-500">Create and manage custom landing pages</p>
      </div>

      <div className="flex items-center justify-center py-24">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto">
            <FileText size={28} className="text-brand-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">No custom pages yet</h3>
          <p className="text-sm text-gray-400 max-w-sm">Create custom landing pages to showcase your content in unique ways.</p>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold rounded-xl hover:from-brand-600 hover:to-brand-700 transition-all shadow-md">
            <Plus size={16} />
            Create Page
          </button>
        </div>
      </div>
    </div>
  )
}
