
import QuizComponent from "../components/QuizComponent";
import BadgeDisplay from "../components/BadgeDisplay";
import LeaderboardTable from "../components/LeaderboardTable";

const quizQuestions = [
  {
    question: "What is a budget?",
    options: ["A plan for spending money", "A type of investment", "A government tax", "A bank account"],
    answer: 0,
    explanation: "A budget is a plan for how you will spend and save your money."
  },
  {
    question: "Which is a safe way to avoid online fraud?",
    options: ["Share your OTP", "Click unknown links", "Use strong passwords", "Ignore bank alerts"],
    answer: 2,
    explanation: "Strong passwords help protect your accounts from fraud."
  }
];

const badges = [
  { name: "Budgeting Beginner", icon: "💡", description: "Completed your first budgeting quiz." },
  { name: "Fraud Buster", icon: "🕵️‍♂️", description: "Spotted a scam in a challenge." },
  { name: "Streak Starter", icon: "🔥", description: "3 days of learning streak." }
];

const leaderboard = [
  { username: "Aarav", xp: 1200, streak: 7 },
  { username: "Priya", xp: 1100, streak: 5 },
  { username: "Kabir", xp: 950, streak: 4 }
];

export default function LearnPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white py-8 px-2">
      <h1 className="text-4xl font-bold text-emerald-700 mb-2">Gamified Learning Modules</h1>
      <p className="text-gray-600 mb-6 text-center max-w-xl">Test your money skills, earn XP, and unlock badges as you learn!</p>
      <div className="w-full max-w-2xl mb-8">
        <QuizComponent questions={quizQuestions} />
      </div>
      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-xl font-semibold text-emerald-700 mb-2">Your Badges</h2>
        <BadgeDisplay badges={badges} />
      </div>
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-emerald-700 mb-2">Leaderboard</h2>
        <LeaderboardTable entries={leaderboard} />
      </div>
    </main>
  );
}
