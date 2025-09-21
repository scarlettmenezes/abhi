
import GoalTracker from "../components/GoalTracker";

const goals = [
  { name: "Trip to Goa", target: 20000, current: 6500, icon: "🏖️" },
  { name: "New Phone", target: 15000, current: 4000, icon: "📱" },
  { name: "Emergency Fund", target: 10000, current: 2500, icon: "💰" }
];

export default function GoalsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white py-8 px-2">
      <h1 className="text-4xl font-bold text-emerald-700 mb-2">Smart Goal Planner</h1>
      <p className="text-gray-600 mb-6 text-center max-w-xl">Set your financial goals and track your progress visually.</p>
      <div className="w-full max-w-2xl">
        <GoalTracker goals={goals} />
      </div>
    </main>
  );
}
