import { useState } from 'react'
import { User, AtSign, FileText, MapPin, Camera, Shield, Bell, Trash2, LogOut } from 'lucide-react'

function SettingsPage() {
  const [profile, setProfile] = useState({
    name: 'Lakshmi',
    username: 'lakshmi',
    bio: 'Creator, developer & storyteller',
    location: 'India',
    email: 'lakshmi@example.com',
  })

  const [notifications, setNotifications] = useState({
    emailDigest: true,
    clickAlerts: false,
    weeklyReport: true,
  })

  const handleProfileChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Profile Section */}
      <section className="card p-6">
        <h3 className="text-base font-semibold text-text-primary mb-1">Profile</h3>
        <p className="text-sm text-text-secondary mb-6">This is how others will see you on your page</p>

        {/* Avatar */}
        <div className="flex items-center gap-5 mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-2xl font-bold">
              L
            </div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white border border-border shadow-sm flex items-center justify-center cursor-pointer hover:bg-surface-muted transition-colors">
              <Camera size={13} className="text-text-secondary" />
            </button>
          </div>
          <div>
            <p className="text-sm font-medium text-text-primary">Profile photo</p>
            <p className="text-xs text-text-muted mt-0.5">Recommended: 400x400px, JPG or PNG</p>
          </div>
        </div>

        {/* Fields */}
        <div className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-text-primary mb-1.5">
              <User size={14} className="text-text-muted" />
              Display Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => handleProfileChange('name', e.target.value)}
              className="input"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-text-primary mb-1.5">
              <AtSign size={14} className="text-text-muted" />
              Username
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-4 text-sm text-text-muted bg-surface-muted border border-r-0 border-border rounded-l-lg">
                thecrumb.io/
              </span>
              <input
                type="text"
                value={profile.username}
                onChange={(e) => handleProfileChange('username', e.target.value)}
                className="input !rounded-l-none"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-text-primary mb-1.5">
              <FileText size={14} className="text-text-muted" />
              Bio
            </label>
            <textarea
              value={profile.bio}
              onChange={(e) => handleProfileChange('bio', e.target.value)}
              rows={3}
              className="input resize-none"
            />
            <p className="text-xs text-text-muted mt-1">{profile.bio.length}/150 characters</p>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-text-primary mb-1.5">
              <MapPin size={14} className="text-text-muted" />
              Location
            </label>
            <input
              type="text"
              value={profile.location}
              onChange={(e) => handleProfileChange('location', e.target.value)}
              className="input"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="btn-primary text-sm">Save Changes</button>
        </div>
      </section>

      {/* Notifications */}
      <section className="card p-6">
        <div className="flex items-center gap-2 mb-1">
          <Bell size={16} className="text-text-secondary" />
          <h3 className="text-base font-semibold text-text-primary">Notifications</h3>
        </div>
        <p className="text-sm text-text-secondary mb-5">Manage how you receive updates</p>

        <div className="space-y-4">
          {[
            { key: 'emailDigest', label: 'Daily email digest', desc: 'Summary of your daily page activity' },
            { key: 'clickAlerts', label: 'Click milestone alerts', desc: 'Get notified when a link hits a milestone' },
            { key: 'weeklyReport', label: 'Weekly analytics report', desc: 'Performance summary every Monday' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-text-primary">{item.label}</p>
                <p className="text-xs text-text-muted mt-0.5">{item.desc}</p>
              </div>
              <button
                onClick={() => setNotifications((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
                className={`w-11 h-6 rounded-full relative transition-colors duration-200 cursor-pointer ${
                  notifications[item.key] ? 'bg-brand-500' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                    notifications[item.key] ? 'translate-x-[22px]' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Account */}
      <section className="card p-6">
        <div className="flex items-center gap-2 mb-1">
          <Shield size={16} className="text-text-secondary" />
          <h3 className="text-base font-semibold text-text-primary">Account</h3>
        </div>
        <p className="text-sm text-text-secondary mb-5">Manage your account settings</p>

        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-b border-border-light">
            <div>
              <p className="text-sm font-medium text-text-primary">Email address</p>
              <p className="text-xs text-text-muted mt-0.5">{profile.email}</p>
            </div>
            <button className="btn-secondary text-xs !py-1.5 !px-3">Change</button>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-border-light">
            <div>
              <p className="text-sm font-medium text-text-primary">Password</p>
              <p className="text-xs text-text-muted mt-0.5">Last changed 30 days ago</p>
            </div>
            <button className="btn-secondary text-xs !py-1.5 !px-3">Update</button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-medium text-text-primary">Two-factor authentication</p>
              <p className="text-xs text-text-muted mt-0.5">Add extra security to your account</p>
            </div>
            <button className="btn-secondary text-xs !py-1.5 !px-3">Enable</button>
          </div>
        </div>
      </section>

      {/* Danger Zone */}
      <section className="card p-6 border-danger/20">
        <h3 className="text-base font-semibold text-danger mb-1">Danger Zone</h3>
        <p className="text-sm text-text-secondary mb-5">Irreversible actions</p>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-danger/30 text-danger text-sm font-medium hover:bg-red-50 transition-colors cursor-pointer">
            <LogOut size={15} />
            Sign Out
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-danger text-white text-sm font-medium hover:bg-red-700 transition-colors cursor-pointer">
            <Trash2 size={15} />
            Delete Account
          </button>
        </div>
      </section>
    </div>
  )
}

export default SettingsPage
