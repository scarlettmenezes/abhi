
import { BudgetPieChart, SavingsBarChart } from "../components/ChartComponents";
import GoalTracker from "../components/GoalTracker";

const pieData = [
  { name: "Food", value: 4000, color: "#10b981" },
  { name: "Transport", value: 2000, color: "#facc15" },
  { name: "Entertainment", value: 1500, color: "#38bdf8" },
  { name: "Savings", value: 2500, color: "#a7f3d0" }
];

const barData = [
  { month: "Jan", savings: 2000 },
  { month: "Feb", savings: 2500 },
  { month: "Mar", savings: 3000 },
  { month: "Apr", savings: 3500 }
];

const goals = [
  { name: "Emergency Fund", target: 10000, current: 2500, icon: "💰" },
  { name: "Bike", target: 50000, current: 12000, icon: "🏍️" }
];

export default function BudgetingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white py-8 px-2">
      <h1 className="text-4xl font-bold text-emerald-700 mb-2">Budgeting Tools</h1>
      <p className="text-gray-600 mb-6 text-center max-w-xl">Track expenses, set savings goals, and visualize your budget.</p>
      <div className="w-full max-w-2xl mb-8">
        <BudgetPieChart data={pieData} />
      </div>
      <div className="w-full max-w-2xl mb-8">
        <SavingsBarChart data={barData} />
      </div>
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-emerald-700 mb-2">Your Goals</h2>
        <GoalTracker goals={goals} />
      </div>
    </main>
  );
}
