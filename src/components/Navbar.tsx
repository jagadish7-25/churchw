"use client";

import { useState } from "react";
import { Search, User, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/", delay: 100 },
    { label: "Gallery", href: "/gallery", delay: 150 },
    { label: "Prayer Requests", href: "/prayer-requests", delay: 200 },
    { label: "About", href: "/about", delay: 250 },
    { label: "Contact", href: "/contact", delay: 300 },
  ];

  return (
    <>
      <nav className="relative z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-6 w-full">
        {/* Left: Logo */}
        <div
          className="animate-blur-fade-up text-xl md:text-2xl font-semibold tracking-widest uppercase h-8 md:h-10 flex items-center"
          style={{ animationDelay: "0ms" }}
        >
          ST. ANN'S
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium hover:text-gray-300 transition-colors animate-blur-fade-up"
              style={{ animationDelay: `${link.delay}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-4">
          <button
            className="hidden sm:flex items-center space-x-2 rounded-full liquid-glass px-4 md:px-6 py-2 animate-blur-fade-up text-sm font-medium hover:bg-white/10 transition-colors"
            style={{ animationDelay: "350ms" }}
          >
            <Search size={18} />
            <span>Search</span>
          </button>
          
          <Link href="/auth">
            <button
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full liquid-glass animate-blur-fade-up hover:bg-white/10 transition-colors"
              style={{ animationDelay: "400ms" }}
            >
              <User size={18} />
            </button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full liquid-glass animate-blur-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            {isMobileMenuOpen ? (
              <X size={18} className="transition-all duration-500 ease-out rotate-180" />
            ) : (
              <Menu size={18} className="transition-all duration-500 ease-out" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-[72px] left-0 w-full z-40 bg-gray-900/95 backdrop-blur-lg border-t border-b border-gray-800 shadow-2xl transition-all duration-500 ease-out lg:hidden overflow-hidden ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map((link, idx) => (
            <Link
              key={link.label}
              href={link.href}
              className="py-3 px-3 rounded-lg hover:bg-gray-800/50 font-medium text-sm transition-transform"
              style={{
                transitionDelay: `${idx * 50}ms`,
                transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="pt-4 mt-2 border-t border-gray-800 flex sm:hidden items-center space-x-4">
            <button className="flex-1 flex items-center justify-center space-x-2 rounded-full liquid-glass px-4 py-2 text-sm font-medium">
              <Search size={18} />
              <span>Search</span>
            </button>
            <Link href="/auth">
              <button className="flex items-center justify-center w-10 h-10 rounded-full liquid-glass">
                <User size={18} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
