const newsArticles = [
  {
    id: 1,
    title: "RBI Introduces New Digital Payment Guidelines",
    summary: "Reserve Bank of India announces enhanced security measures for digital transactions affecting young users.",
    category: "Policy",
    date: "2025-01-15",
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "Mutual Funds vs Bank FDs: What Young Investors Should Know",
    summary: "Comparing traditional and modern investment options for students and young professionals.",
    category: "Investment",
    date: "2025-01-12",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "Top 5 Budgeting Apps Popular Among Indian Youth",
    summary: "Technology-driven solutions helping young Indians manage their finances better.",
    category: "Technology",
    date: "2025-01-10",
    readTime: "4 min read"
  }
];

const financialTips = [
  "Start a SIP with as little as ₹500 per month",
  "Emergency fund should be 6 months of expenses", 
  "Compare credit card interest rates before applying",
  "Use UPI for small transactions to track spending"
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-700 mb-4 text-center">Financial News & Insights</h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Stay updated with the latest financial news, policy changes, and investment insights relevant to young Indians.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">
                  {article.category}
                </span>
                <span className="text-xs text-gray-400">{article.readTime}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{article.summary}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">{article.date}</span>
                <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
          <h2 className="text-xl font-semibold text-yellow-800 mb-4">💡 Quick Financial Tips</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {financialTips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span className="text-yellow-700 text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Want to stay updated? Follow us for daily financial tips and news updates!
          </p>
        </div>
      </div>
    </main>
  );
}
