"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Church3D from "@/components/Church3D";

interface BibleVerse {
  reference: string;
  text: string;
}

export default function Home() {
  const [verse, setVerse] = useState<BibleVerse | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch random daily bible verse
    const fetchVerse = async () => {
      try {
        const response = await fetch("https://bible-api.com/?random=verse");
        if (response.ok) {
          const data = await response.json();
          setVerse({
            reference: data.reference,
            text: data.text.trim(),
          });
        }
      } catch (error) {
        console.error("Failed to fetch verse:", error);
      }
    };
    fetchVerse();
  }, []);

  const scrollToNext = () => {
    if (scrollRef.current) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="relative w-full bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center pt-20 px-6 md:px-16 overflow-hidden">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 z-20 flex flex-col items-start justify-center">
          <p 
            className="text-gray-400 font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 animate-blur-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Welcome to St. Ann's
          </p>
          <h1 
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[0.9] mb-8 animate-blur-fade-up mix-blend-difference"
            style={{ animationDelay: "400ms" }}
          >
            FAITH.<br />
            COMMUNITY.<br />
            PURPOSE.
          </h1>
          <button 
            className="group flex items-center space-x-4 bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-all animate-blur-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            <span>Discover More</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Right 3D Element */}
        <div className="absolute md:relative inset-0 md:inset-auto w-full md:w-1/2 h-full z-10 opacity-40 md:opacity-100 flex items-center justify-center pointer-events-none">
          <div className="w-[150%] md:w-full scale-150 md:scale-125 transform-gpu">
            <Church3D />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
          onClick={scrollToNext}
        >
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Daily Inspiration Section */}
      <section ref={scrollRef} className="w-full min-h-[70vh] flex flex-col items-center justify-center py-24 px-6 md:px-16 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 font-semibold tracking-[0.2em] uppercase text-xs mb-8">Daily Inspiration</p>
          {verse ? (
            <>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-12 text-gray-200">
                "{verse.text}"
              </h2>
              <p className="text-lg md:text-xl font-bold tracking-widest uppercase text-white/50">
                — {verse.reference}
              </p>
            </>
          ) : (
            <div className="w-full h-32 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-24 px-6 md:px-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Services</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Join us in our daily devotions and Sunday mass. We welcome everyone to experience the peace and community at St. Ann's.
              </p>
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-6 flex justify-between items-center">
                  <span className="text-xl font-medium">Daily Mass</span>
                  <span className="text-gray-400 font-mono">7:00 AM</span>
                </div>
                <div className="border-b border-white/10 pb-6 flex justify-between items-center">
                  <span className="text-xl font-medium">Sunday Service</span>
                  <span className="text-gray-400 font-mono">8:30 AM</span>
                </div>
                <div className="border-b border-white/10 pb-6 flex justify-between items-center">
                  <span className="text-xl font-medium">Confession</span>
                  <span className="text-gray-400 font-mono">Sat 5:00 PM</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-white/5 montfort-glass p-12 flex flex-col justify-center items-center text-center">
               <h3 className="text-2xl font-bold mb-4">Prayer Requests</h3>
               <p className="text-gray-400 mb-8">Submit your prayer requests and our community will pray for you.</p>
               <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all w-full md:w-auto">
                 Submit Request
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2026 St. Ann's RCM Church. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </main>
  );
}
