// app/components/Navbar.tsx
import Link from "next/link";
import { Brain, MessageSquare } from "lucide-react";
import SignInDialog from "./SignDialog";

export default function Navbar() {
  return (
    <nav className="bg-slate-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center text-xl font-bold text-gray-800 gap-2">
          <Brain className="w-6 h-6" />
          ResumeAI
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/features" className="text-gray-700 hover:text-black">
            Features
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-black">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black">
            Contact
          </Link>
        </div>

       
        <div className="flex items-center space-x-2">
          <div >
            <SignInDialog/>
          </div>
          <Link
            href="/chat"
            className="flex items-center gap-2 transition-all duration-500 ease-in-out bg-white text-black px-4 py-2 rounded-lg border border-gray-300 hover:border-black"
          >
            <MessageSquare className="w-4 h-4" /> AI Chat
          </Link>
        </div>
      </div>
    </nav>
  );
}
