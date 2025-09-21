
import { PortfolioLineChart } from "../components/ChartComponents";

const lineData = [
  { date: "Day 1", value: 100000 },
  { date: "Day 2", value: 101200 },
  { date: "Day 3", value: 100800 },
  { date: "Day 4", value: 102500 },
  { date: "Day 5", value: 104000 }
];

export default function SimulatorPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white py-8 px-2">
      <h1 className="text-4xl font-bold text-emerald-700 mb-2">Portfolio Simulator</h1>
      <p className="text-gray-600 mb-6 text-center max-w-xl">Manage a virtual portfolio with ₹100,000 play money. Track your simulated investments below.</p>
      <div className="w-full max-w-2xl">
        <PortfolioLineChart data={lineData} />
      </div>
    </main>
  );
}
