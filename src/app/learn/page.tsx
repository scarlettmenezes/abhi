
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
  },
  {
    question: "What is the ideal emergency fund size?",
    options: ["1 month of expenses", "3-6 months of expenses", "1 year of expenses", "No emergency fund needed"],
    answer: 1,
    explanation: "Financial experts recommend having 3-6 months of living expenses saved for emergencies."
  },
  {
    question: "What is compound interest?",
    options: ["Interest only on principal", "Interest on interest", "A type of loan", "A bank fee"],
    answer: 1,
    explanation: "Compound interest is earning interest on both your initial investment and previously earned interest."
  },
  {
    question: "Which investment typically has the highest risk and potential return?",
    options: ["Fixed Deposits", "Government Bonds", "Stocks", "Savings Account"],
    answer: 2,
    explanation: "Stocks generally offer higher potential returns but come with higher risk compared to other options."
  },
  {
    question: "What does SIP stand for in mutual funds?",
    options: ["Simple Investment Plan", "Systematic Investment Plan", "Strategic Investment Portfolio", "Secure Investment Program"],
    answer: 1,
    explanation: "SIP stands for Systematic Investment Plan, allowing regular investments in mutual funds."
  },
  {
    question: "What is a credit score?",
    options: ["Your bank balance", "A measure of creditworthiness", "Investment returns", "Monthly income"],
    answer: 1,
    explanation: "A credit score is a numerical representation of your creditworthiness based on credit history."
  },
  {
    question: "What is the full form of KYC?",
    options: ["Keep Your Cash", "Know Your Customer", "Keep Your Credit", "Know Your Capital"],
    answer: 1,
    explanation: "KYC stands for Know Your Customer, a process used by financial institutions to verify identity."
  },
  {
    question: "Which of these is NOT a type of mutual fund?",
    options: ["Equity Fund", "Debt Fund", "Hybrid Fund", "Credit Card Fund"],
    answer: 3,
    explanation: "Credit Card Fund is not a type of mutual fund. The main types are Equity, Debt, and Hybrid funds."
  },
  {
    question: "What is inflation?",
    options: ["Decrease in prices", "Increase in general price levels", "Stock market crash", "Currency devaluation"],
    answer: 1,
    explanation: "Inflation is the general increase in prices of goods and services over time."
  },
  {
    question: "What is the lock-in period for ELSS mutual funds?",
    options: ["1 year", "2 years", "3 years", "5 years"],
    answer: 2,
    explanation: "ELSS (Equity Linked Savings Scheme) mutual funds have a lock-in period of 3 years."
  },
  {
    question: "Which document is required to open a bank account in India?",
    options: ["Only Aadhaar", "Only PAN", "Both Aadhaar and PAN", "Only passport"],
    answer: 2,
    explanation: "Both Aadhaar and PAN are typically required for opening a bank account in India."
  },
  {
    question: "What is the maximum insurance cover under DICGC for bank deposits?",
    options: ["₹1 lakh", "₹5 lakh", "₹10 lakh", "₹20 lakh"],
    answer: 1,
    explanation: "DICGC (Deposit Insurance and Credit Guarantee Corporation) provides insurance cover up to ₹5 lakh per depositor per bank."
  },
  {
    question: "What is a Demat account used for?",
    options: ["Cash transactions", "Holding shares electronically", "International transfers", "Loan applications"],
    answer: 1,
    explanation: "A Demat account is used to hold shares and securities in electronic format."
  },
  {
    question: "Which tax-saving investment has the shortest lock-in period?",
    options: ["PPF", "ELSS", "NSC", "Tax-saving FD"],
    answer: 1,
    explanation: "ELSS has the shortest lock-in period of 3 years among major tax-saving investments."
  },
  {
    question: "What is the current GST rate on most financial services in India?",
    options: ["0%", "5%", "12%", "18%"],
    answer: 3,
    explanation: "Most financial services in India are subject to 18% GST."
  },
  {
    question: "What does P2P lending stand for?",
    options: ["Person to Person", "Peer to Peer", "Payment to Payment", "Principal to Principal"],
    answer: 1,
    explanation: "P2P stands for Peer to Peer lending, where individuals lend money directly to other individuals."
  }
];

const badges = [
  { name: "Budgeting Beginner", icon: "💡", description: "Completed your first budgeting quiz." },
  { name: "Fraud Buster", icon: "🕵️‍♂️", description: "Spotted a scam in a challenge." },
  { name: "Streak Starter", icon: "🔥", description: "3 days of learning streak." },
  { name: "Investment Guru", icon: "📈", description: "Mastered investment fundamentals." },
  { name: "Tax Saver", icon: "💰", description: "Learned about tax-saving investments." },
  { name: "Credit Champion", icon: "💳", description: "Understood credit scores and management." },
  { name: "Emergency Expert", icon: "🆘", description: "Built knowledge about emergency funds." },
  { name: "Knowledge King", icon: "👑", description: "Answered 15+ questions correctly." }
];

const leaderboard = [
  { username: "Aarav", xp: 1850, streak: 12 },
  { username: "Priya", xp: 1650, streak: 9 },
  { username: "Kabir", xp: 1520, streak: 8 },
  { username: "Sneha", xp: 1420, streak: 6 },
  { username: "Rohan", xp: 1380, streak: 5 },
  { username: "Ananya", xp: 1250, streak: 7 },
  { username: "Vikram", xp: 1180, streak: 4 },
  { username: "Meera", xp: 1120, streak: 6 }
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
