export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-emerald-700">Features</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <FeatureCard
            icon="💼"
            title="Virtual Portfolio Simulator"
            description="Practice investing in a risk-free environment tailored for Indian markets."
          />
          <FeatureCard
            icon="🎮"
            title="Gamified Learning Modules"
            description="Engage with interactive lessons and quizzes to master money skills."
          />
          <FeatureCard
            icon="🇮🇳"
            title="India-Centric Content"
            description="Learn with examples and scenarios relevant to young Indians."
          />
          <FeatureCard
            icon="📊"
            title="Interactive Budgeting Tools"
            description="Plan, track, and optimize your spending with easy-to-use tools."
          />
          <FeatureCard
            icon="🕵️‍♂️"
            title="Fraud Identification Challenges"
            description="Sharpen your skills to spot scams and protect your finances."
          />
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="rounded-xl shadow-lg p-6 bg-white flex flex-col items-center text-center border border-gray-100 hover:shadow-emerald-200 transition-shadow">
      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2 text-emerald-600">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
