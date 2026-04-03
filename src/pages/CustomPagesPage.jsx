import { Plus, FileText, Eye, MoreHorizontal, Clock } from 'lucide-react'

const pages = [
  { id: 1, title: 'TCS NQT Resources Hub', status: 'Published', views: 1240, lastEdited: '2 days ago' },
  { id: 2, title: 'Coding Interview Prep', status: 'Draft', views: 0, lastEdited: '5 hours ago' },
  { id: 3, title: 'Free Study Materials', status: 'Published', views: 856, lastEdited: '1 week ago' },
]

function CustomPagesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Create new page */}
      <button className="w-full card p-5 flex items-center justify-center gap-2 text-sm font-medium text-text-secondary hover:text-brand-600 hover:border-brand-200 hover:bg-brand-50/30 transition-all duration-200 border-2 border-dashed cursor-pointer mb-6">
        <Plus size={18} />
        Create a new page
      </button>

      {/* Pages list */}
      <div className="space-y-3">
        {pages.map((page) => (
          <div key={page.id} className="card p-5 flex items-center gap-4 hover:shadow-md transition-shadow group">
            <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
              <FileText size={20} className="text-brand-600" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-text-primary">{page.title}</h3>
              <div className="flex items-center gap-3 mt-1">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  page.status === 'Published'
                    ? 'bg-green-50 text-success'
                    : 'bg-amber-50 text-warning'
                }`}>
                  {page.status}
                </span>
                <span className="flex items-center gap-1 text-xs text-text-muted">
                  <Clock size={12} />
                  {page.lastEdited}
                </span>
              </div>
            </div>

            {page.views > 0 && (
              <span className="flex items-center gap-1.5 text-xs text-text-secondary bg-surface-muted px-3 py-1.5 rounded-full">
                <Eye size={13} />
                {page.views.toLocaleString()} views
              </span>
            )}

            <button className="p-2 rounded-lg hover:bg-surface-muted text-text-muted opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
              <MoreHorizontal size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Empty state hint */}
      {pages.length === 0 && (
        <div className="card p-12 text-center">
          <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
            <FileText size={24} className="text-brand-400" />
          </div>
          <h3 className="text-base font-semibold text-text-primary">No custom pages yet</h3>
          <p className="text-sm text-text-secondary mt-1">Create your first custom landing page</p>
        </div>
      )}
    </div>
  )
}

export default CustomPagesPage
