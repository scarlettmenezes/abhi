"use client";


import Link from "next/link";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto flex flex-col items-center text-center pt-8 pb-12 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-emerald-700 mb-4 leading-tight">
          Empowering Young India with <span className="bg-gradient-to-r from-emerald-400 to-yellow-300 bg-clip-text text-transparent">Smart Money Skills</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-6">
          India’s youth face a growing financial literacy gap. Paisabuddy bridges this divide with interactive, India-centric tools and gamified learning—making money management fun, safe, and practical for the next generation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/learn" className="rounded-xl px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg transition-colors text-lg">
            Start Learning
          </Link>
          <Link href="/simulator" className="rounded-xl px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-emerald-900 font-bold shadow-lg transition-colors text-lg">
            Try Simulator
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl mx-auto py-8 px-4" id="features">
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-6 text-center">Platform Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon="💼" title="Virtual Portfolio Simulator" desc="Practice investing in a risk-free environment tailored for Indian markets." />
          <FeatureCard icon="🎮" title="Gamified Learning Modules" desc="Engage with interactive lessons and quizzes to master money skills." />
          <FeatureCard icon="🇮🇳" title="India-Centric Content" desc="Learn with examples and scenarios relevant to young Indians." />
          <FeatureCard icon="📊" title="Interactive Budgeting Tools" desc="Plan, track, and optimize your spending with easy-to-use tools." />
          <FeatureCard icon="🕵️‍♂️" title="Fraud Identification Challenges" desc="Sharpen your skills to spot scams and protect your finances." />
        </div>
      </section>

      {/* Demo Section */}
      <section className="w-full max-w-3xl mx-auto py-8 px-4 flex flex-col items-center">
        <h3 className="text-xl font-bold text-emerald-700 mb-4">Try a Quick Demo</h3>
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 border border-emerald-100">
          <span className="text-2xl font-semibold text-emerald-600 mb-2">Budgeting Tool Preview</span>
          {DynamicDemoBudgetCard && <DynamicDemoBudgetCard />}
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl shadow-lg p-6 bg-white flex flex-col items-center text-center border border-gray-100 hover:shadow-emerald-200 transition-shadow">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-emerald-600">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}


const DynamicDemoBudgetCard = dynamic(() => import("./components/DemoBudgetCard"), { ssr: false });
