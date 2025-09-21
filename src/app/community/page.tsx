
const posts = [
  { section: "Saving Hacks", user: "Aarav", content: "Set up auto-transfer to your savings account every month!", upvotes: 12 },
  { section: "Stock Market Basics", user: "Priya", content: "Start with index funds—they’re less risky for beginners.", upvotes: 9 },
  { section: "Fraud Alerts", user: "Kabir", content: "Never share your OTP with anyone, even if they claim to be from your bank.", upvotes: 15 }
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white py-8 px-2">
      <h1 className="text-4xl font-bold text-emerald-700 mb-2">Community Forum</h1>
      <p className="text-gray-600 mb-6 text-center max-w-xl">Share your best money tips and upvote helpful advice!</p>
      <div className="w-full max-w-2xl space-y-4">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-4 border border-emerald-100">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs bg-emerald-100 text-emerald-700 rounded px-2 py-0.5 font-semibold">{post.section}</span>
              <span className="ml-auto text-xs text-gray-400">by {post.user}</span>
            </div>
            <div className="text-gray-700 mb-2">{post.content}</div>
            <button className="text-yellow-500 font-bold flex items-center gap-1 hover:text-emerald-600 transition-colors">
              ▲ {post.upvotes} Upvote
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
