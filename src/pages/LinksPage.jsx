import { useState } from 'react'
import {
  GripVertical,
  Pencil,
  Trash2,
  ToggleLeft,
  ToggleRight,
  Globe,
  Camera,
  Video,
  MessageCircle,
  Plus,
  Image,
} from 'lucide-react'

const defaultLinks = [
  { id: 1, title: 'My Portfolio', url: 'https://lakshmi.dev', enabled: true, icon: 'globe', clicks: 234 },
  { id: 2, title: 'Follow me on Instagram', url: 'https://instagram.com/lakshmi', enabled: true, icon: 'camera', clicks: 189 },
  { id: 3, title: 'YouTube Channel', url: 'https://youtube.com/@lakshmi', enabled: true, icon: 'video', clicks: 156 },
  { id: 4, title: 'Twitter / X', url: 'https://x.com/lakshmi', enabled: false, icon: 'message', clicks: 78 },
]

const iconMap = {
  globe: Globe,
  camera: Camera,
  video: Video,
  message: MessageCircle,
}

function LinkCard({ link, onToggle, onDelete }) {
  const Icon = iconMap[link.icon] || Globe

  return (
    <div className={`card p-4 flex items-center gap-4 group transition-all duration-200 hover:shadow-md ${!link.enabled ? 'opacity-50' : ''}`}>
      <button className="text-text-muted hover:text-text-secondary cursor-grab active:cursor-grabbing">
        <GripVertical size={18} />
      </button>

      <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
        <Icon size={18} className="text-brand-600" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-text-primary truncate">{link.title}</h3>
        <p className="text-xs text-text-muted truncate mt-0.5">{link.url}</p>
      </div>

      <span className="text-xs text-text-secondary bg-surface-muted px-2.5 py-1 rounded-full font-medium">
        {link.clicks} clicks
      </span>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 rounded-lg hover:bg-surface-muted text-text-muted hover:text-text-primary transition-colors cursor-pointer">
          <Pencil size={15} />
        </button>
        <button
          onClick={() => onDelete(link.id)}
          className="p-2 rounded-lg hover:bg-red-50 text-text-muted hover:text-danger transition-colors cursor-pointer"
        >
          <Trash2 size={15} />
        </button>
      </div>

      <button onClick={() => onToggle(link.id)} className="cursor-pointer">
        {link.enabled ? (
          <ToggleRight size={28} className="text-brand-500" />
        ) : (
          <ToggleLeft size={28} className="text-text-muted" />
        )}
      </button>
    </div>
  )
}

function PhonePreview({ links }) {
  const activeLinks = links.filter((l) => l.enabled)

  return (
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="h-full overflow-y-auto pt-10 pb-6 px-5">
        {/* Profile */}
        <div className="flex flex-col items-center mt-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-xl font-bold shadow-md">
            L
          </div>
          <h3 className="mt-3 text-sm font-bold text-gray-900">@lakshmi</h3>
          <p className="text-[11px] text-gray-500 mt-1 text-center px-4">Creator, developer & storyteller</p>
        </div>

        {/* Links */}
        <div className="space-y-2.5">
          {activeLinks.map((link) => {
            const Icon = iconMap[link.icon] || Globe
            return (
              <div
                key={link.id}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <Icon size={15} className="text-gray-500 shrink-0" />
                <span className="text-xs font-medium text-gray-800 truncate">{link.title}</span>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <p className="text-center text-[10px] text-gray-400 mt-8">
          <span className="text-brand-500 font-medium">the</span>crumb
        </p>
      </div>
    </div>
  )
}

function AddLinkForm({ onAdd, onCancel }) {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !url.trim()) return
    onAdd({ title: title.trim(), url: url.trim() })
    setTitle('')
    setUrl('')
  }

  return (
    <div className="card p-5 border-2 border-dashed border-brand-200 bg-brand-50/30">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Link title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input text-sm"
          autoFocus
        />
        <input
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="input text-sm"
        />
        <div className="flex items-center gap-2 pt-1">
          <button type="submit" className="btn-primary text-sm !py-2">
            Add Link
          </button>
          <button type="button" onClick={onCancel} className="btn-secondary text-sm !py-2">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

function LinksPage() {
  const [links, setLinks] = useState(defaultLinks)
  const [showAddForm, setShowAddForm] = useState(false)

  const toggleLink = (id) => {
    setLinks((prev) =>
      prev.map((l) => (l.id === id ? { ...l, enabled: !l.enabled } : l))
    )
  }

  const deleteLink = (id) => {
    setLinks((prev) => prev.filter((l) => l.id !== id))
  }

  const addLink = ({ title, url }) => {
    const newLink = {
      id: Date.now(),
      title,
      url,
      enabled: true,
      icon: 'globe',
      clicks: 0,
    }
    setLinks((prev) => [newLink, ...prev])
    setShowAddForm(false)
  }

  return (
    <div className="flex gap-8 max-w-6xl mx-auto">
      {/* Left: Link Management */}
      <div className="flex-1 min-w-0 space-y-4">
        {/* Add link button / form */}
        {showAddForm ? (
          <AddLinkForm onAdd={addLink} onCancel={() => setShowAddForm(false)} />
        ) : (
          <button
            onClick={() => setShowAddForm(true)}
            className="w-full card p-4 flex items-center justify-center gap-2 text-sm font-medium text-text-secondary hover:text-brand-600 hover:border-brand-200 hover:bg-brand-50/30 transition-all duration-200 border-2 border-dashed cursor-pointer"
          >
            <Plus size={18} />
            Add a new link
          </button>
        )}

        {/* Links list */}
        <div className="space-y-3">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              link={link}
              onToggle={toggleLink}
              onDelete={deleteLink}
            />
          ))}
        </div>

        {links.length === 0 && (
          <div className="card p-12 text-center">
            <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
              <Image size={24} className="text-brand-400" />
            </div>
            <h3 className="text-base font-semibold text-text-primary">No links yet</h3>
            <p className="text-sm text-text-secondary mt-1">Add your first link to get started</p>
          </div>
        )}
      </div>

      {/* Right: Phone Preview */}
      <div className="shrink-0 hidden lg:flex flex-col items-center pt-4">
        <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-4">Preview</p>
        <PhonePreview links={links} />
      </div>
    </div>
  )
}

export default LinksPage
