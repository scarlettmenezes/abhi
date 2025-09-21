const adminStats = [
  { label: "Total Users", value: "2,547", change: "+12%" },
  { label: "Active Learners", value: "1,834", change: "+8%" },
  { label: "Completed Quizzes", value: "15,692", change: "+25%" },
  { label: "Community Posts", value: "892", change: "+15%" }
];

const recentActivity = [
  { action: "New quiz completed", user: "Aarav", time: "2 minutes ago" },
  { action: "Fraud scenario reported", user: "Priya", time: "5 minutes ago" },
  { action: "Goal milestone reached", user: "Kabir", time: "12 minutes ago" },
  { action: "Community post liked", user: "Sneha", time: "18 minutes ago" }
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-emerald-700 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage platform content and monitor user engagement</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {adminStats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-sm font-medium text-gray-500 mb-1">{stat.label}</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Management */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Content Management</h2>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200">
                📝 Manage Quiz Questions
              </button>
              <button className="w-full text-left p-3 rounded-lg bg-red-50 hover:bg-red-100 transition-colors border border-red-200">
                🚨 Update Fraud Scenarios
              </button>
              <button className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-200">
                📰 Publish News Articles
              </button>
              <button className="w-full text-left p-3 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors border border-yellow-200">
                👥 Moderate Community Posts
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                    <p className="text-xs text-gray-500">by {activity.user}</p>
                  </div>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Warning Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <span className="text-yellow-600 text-2xl">⚠️</span>
            <div>
              <h3 className="font-semibold text-yellow-800 mb-1">Protected Route</h3>
              <p className="text-yellow-700 text-sm">
                This admin dashboard requires authentication and proper authorization. 
                In a production environment, this would be protected with role-based access control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
