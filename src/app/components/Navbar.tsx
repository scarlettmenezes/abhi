import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50 border-b border-emerald-100">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-extrabold text-emerald-600 tracking-tight">Paisabuddy</span>
        <span className="ml-2 px-2 py-0.5 rounded bg-yellow-300 text-xs font-semibold text-emerald-900">2025</span>
      </div>
      <div className="flex gap-3 text-emerald-700 font-medium overflow-x-auto text-sm">
        <Link href="/" className="hover:text-yellow-500 transition-colors whitespace-nowrap">Home</Link>
        <Link href="/features" className="hover:text-yellow-500 transition-colors whitespace-nowrap">Features</Link>
        <Link href="/learn" className="hover:text-yellow-500 transition-colors whitespace-nowrap">Learn</Link>
        <Link href="/simulator" className="hover:text-yellow-500 transition-colors whitespace-nowrap">Simulator</Link>
        <Link href="/budgeting" className="hover:text-yellow-500 transition-colors whitespace-nowrap">Budget</Link>
        <Link href="/goals" className="hover:text-yellow-500 transition-colors whitespace-nowrap">Goals</Link>
        <Link href="/fraud-check" className="hover:text-yellow-500 transition-colors whitespace-nowrap">Fraud Check</Link>
        <Link href="/community" className="hover:text-yellow-500 transition-colors whitespace-nowrap">Community</Link>
        <Link href="/news" className="hover:text-yellow-500 transition-colors whitespace-nowrap">News</Link>
        <Link href="/admin" className="hover:text-yellow-500 transition-colors whitespace-nowrap">Admin</Link>
      </div>
    </nav>
  );
}
