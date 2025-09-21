import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-emerald-50 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-emerald-100 mt-12">
      <span className="text-emerald-700 font-semibold">© Paisabuddy 2025</span>
      <div className="flex gap-4 text-emerald-600 text-xl">
        <a href="#" aria-label="Instagram" className="hover:text-yellow-500 transition-colors"><FaInstagram /></a>
        <a href="#" aria-label="Twitter" className="hover:text-yellow-500 transition-colors"><FaTwitter /></a>
        <a href="#" aria-label="LinkedIn" className="hover:text-yellow-500 transition-colors"><FaLinkedin /></a>
      </div>
    </footer>
  );
}
