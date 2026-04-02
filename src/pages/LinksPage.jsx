import { useState } from 'react'
import { Copy, Plus, ExternalLink, GripVertical, Trash2, Edit3, Eye, EyeOff, Check } from 'lucide-react'

const demoLinks = [
  { id: 1, name: 'My Portfolio', url: 'https://portfolio.dev', type: 'Link', clicks: 1240, active: true },
  { id: 2, name: 'YouTube Channel', url: 'https://youtube.com/@channel', type: 'Link', clicks: 856, active: true },
  { id: 3, name: 'Camera Gear List', url: 'https://kit.co/gear', type: 'Link', clicks: 2103, active: true },
  { id: 4, name: 'Discord Community', url: 'https://discord.gg/invite', type: 'Social', clicks: 432, active: false },
]

const tabs = ['Links', 'Your Links', 'Appearance']

export default function LinksPage() {
  const [activeTab, setActiveTab] = useState('Links')
  const [copied, setCopied] = useState(false)
  const [linkName, setLinkName] = useState('')
  const [linkUrl, setLinkUrl] = useState('')
  const [linkType, setLinkType] = useState('Link')

  const handleCopy = () => {
    navigator.clipboard.writeText('https://thecrumb.co/lakshmiyadav044')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-[1100px] mx-auto space-y-8">
      {/* Page header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="font-display text-3xl font-semibold text-gray-900">Manage Your Links</h1>
          <p className="mt-2 text-sm text-gray-500">Add, edit, and organize your bio links</p>
        </div>

        {/* Copy link badge */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-3 px-5 py-3 bg-surface-card border border-gray-200 rounded-xl hover:border-brand-300 hover:shadow-card transition-all group shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
            <ExternalLink size={15} className="text-brand-500" />
          </div>
          <span className="text-sm text-gray-600 font-medium">thecrumb.co/lakshmiyadav044</span>
          <div className="w-px h-5 bg-gray-200" />
          {copied ? (
            <Check size={16} className="text-success" />
          ) : (
            <Copy size={16} className="text-gray-400 group-hover:text-brand-500 transition-colors" />
          )}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1.5 bg-gray-100 rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
              activeTab === tab
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Add link form */}
        <div className="lg:col-span-5 bg-surface-card rounded-2xl border border-gray-100 p-7 shadow-card h-fit">
          <h3 className="text-base font-semibold text-gray-900 mb-5">Add New Link</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Name</label>
              <input
                type="text"
                placeholder="e.g. My Portfolio"
                value={linkName}
                onChange={(e) => setLinkName(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent bg-gray-50/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">Type</label>
              <select
                value={linkType}
                onChange={(e) => setLinkType(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent bg-gray-50/50 appearance-none transition-all"
              >
                <option>Link</option>
                <option>Social</option>
                <option>Video</option>
                <option>Music</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">URL</label>
              <input
                type="url"
                placeholder="https://..."
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent bg-gray-50/50 transition-all"
              />
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold rounded-xl hover:from-brand-600 hover:to-brand-700 transition-all shadow-md hover:shadow-lg active:scale-[0.98]">
              <Plus size={18} />
              Add Link
            </button>
          </div>
        </div>

        {/* Links list */}
        <div className="lg:col-span-7 space-y-3">
          {demoLinks.map((link) => (
            <div
              key={link.id}
              className={`group bg-surface-card rounded-2xl border border-gray-100 p-4 shadow-card hover:shadow-card-hover transition-all duration-200 ${
                !link.active ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="cursor-grab text-gray-300 hover:text-gray-400 transition-colors">
                  <GripVertical size={18} />
                </div>

                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <ExternalLink size={16} className="text-brand-500" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900">{link.name}</h4>
                  <p className="text-xs text-gray-400 truncate mt-0.5">{link.url}</p>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-1 bg-brand-50 rounded-lg">
                  <span className="text-xs font-semibold text-brand-600">{link.clicks.toLocaleString()}</span>
                  <span className="text-xs text-brand-400">clicks</span>
                </div>

                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
                    <Edit3 size={14} />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
                    {link.active ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add more placeholder */}
          <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-sm text-gray-400 hover:border-brand-300 hover:text-brand-500 transition-all flex items-center justify-center gap-2">
            <Plus size={16} />
            Add another link
          </button>
        </div>
      </div>
    </div>
  )
}
