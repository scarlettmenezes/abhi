import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50 border-b border-emerald-100">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-extrabold text-emerald-600 tracking-tight">Paisabuddy</span>
        <span className="ml-2 px-2 py-0.5 rounded bg-yellow-300 text-xs font-semibold text-emerald-900">2025</span>
      </div>
      <div className="flex gap-6 text-emerald-700 font-medium">
        <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>
        <Link href="/features" className="hover:text-yellow-500 transition-colors">Features</Link>
        <Link href="/learn" className="hover:text-yellow-500 transition-colors">Learn</Link>
        <Link href="/simulator" className="hover:text-yellow-500 transition-colors">Simulator</Link>
        <Link href="#contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
