"use client";

import { useState } from "react";
import { Search, User, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/", delay: 100 },
    { label: "Gallery", href: "/admin/gallery", delay: 150 },
    { label: "Prayer Requests", href: "/prayer-requests", delay: 200 },
    { label: "About", href: "/about", delay: 250 },
    { label: "Contact", href: "/contact", delay: 300 },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 w-full bg-black/40 backdrop-blur-md border-b border-white/10">
        {/* Left: Logo */}
        <div
          className="animate-blur-fade-up text-xl md:text-2xl font-bold tracking-widest uppercase flex items-center text-white"
          style={{ animationDelay: "0ms" }}
        >
          ST. ANN'S
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-gray-300 hover:text-white transition-colors animate-blur-fade-up"
              style={{ animationDelay: `${link.delay}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-5">
          <button
            className="hidden sm:flex items-center space-x-2 rounded-md montfort-glass px-5 py-2.5 animate-blur-fade-up text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-all"
            style={{ animationDelay: "350ms" }}
          >
            <Search size={16} />
            <span>Search</span>
          </button>
          
          <Link href="/auth">
            <button
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-md montfort-glass animate-blur-fade-up hover:bg-white/10 transition-all"
              style={{ animationDelay: "400ms" }}
            >
              <User size={16} />
            </button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md montfort-glass animate-blur-fade-up"
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
        className={`fixed top-[73px] left-0 w-full h-screen z-40 bg-black/95 backdrop-blur-xl border-t border-white/10 transition-all duration-500 ease-out lg:hidden overflow-hidden ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 mt-4">
          {navLinks.map((link, idx) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold tracking-wide text-white hover:text-gray-300 transition-transform"
              style={{
                transitionDelay: `${idx * 50}ms`,
                transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="pt-8 mt-4 border-t border-white/10 flex sm:hidden flex-col space-y-4">
            <button className="flex items-center justify-center space-x-3 rounded-md montfort-glass px-6 py-4 text-sm font-semibold uppercase tracking-wider w-full">
              <Search size={18} />
              <span>Search</span>
            </button>
            <Link href="/auth" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="flex items-center justify-center space-x-3 rounded-md montfort-glass px-6 py-4 text-sm font-semibold uppercase tracking-wider w-full">
                <User size={18} />
                <span>Account</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
