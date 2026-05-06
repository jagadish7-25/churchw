"use client";

import { useEffect, useState } from "react";
import { Star, Clock, Calendar, Play, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Church3D from "@/components/Church3D";

interface BibleVerse {
  reference: string;
  text: string;
}

export default function Home() {
  const [verse, setVerse] = useState<BibleVerse | null>(null);

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

  return (
    <main className="relative w-full h-screen overflow-hidden flex flex-col bg-black">
      {/* Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Bottom Blur Overlay with CSS Mask */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-[1] backdrop-blur-xl"
        style={{
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 45%)",
          maskImage: "linear-gradient(to top, black 0%, transparent 45%)"
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16 z-10 w-full">
        <div className="flex flex-col md:flex-row items-end gap-8">
          
          {/* Left Side: Text and CTA */}
          <div className="flex-1 flex flex-col items-start w-full">
            
            {/* 3D Model Area - Mobile primarily, or above title */}
            <div className="w-full flex justify-center md:justify-start mb-8 h-48 md:h-64 animate-blur-fade-up" style={{ animationDelay: "200ms" }}>
              <Church3D />
            </div>

            {/* Metadata Row */}
            <div 
              className="flex flex-wrap items-center gap-3 sm:gap-6 mb-6 md:mb-8 text-xs sm:text-sm animate-blur-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex items-center gap-1.5 font-medium">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
                <span>St. Ann's RCM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gray-300" />
                <span>Daily Mass 7:00 AM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gray-300" />
                <span>Sunday 8:30 AM</span>
              </div>
            </div>

            {/* Title */}
            <h1 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight mb-4 md:mb-6 animate-blur-fade-up"
              style={{ animationDelay: "400ms", letterSpacing: "-0.04em" }}
            >
              Step Through. Work Smarter.
            </h1>

            {/* Description / Bible Verse */}
            <p 
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl animate-blur-fade-up"
              style={{ animationDelay: "500ms" }}
            >
              {verse ? `"${verse.text}" — ${verse.reference}` : "A voyage through forgotten realms, where past and future intertwine."}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button 
                className="bg-white text-black rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 flex items-center gap-2 hover:bg-gray-200 transition-colors animate-blur-fade-up"
                style={{ animationDelay: "600ms" }}
              >
                <Play className="w-4 h-4 sm:w-[18px] sm:h-[18px] fill-black" />
                <span>Prayer Requests</span>
              </button>
              
              <button 
                className="rounded-full font-medium liquid-glass px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-white/10 transition-colors animate-blur-fade-up"
                style={{ animationDelay: "700ms" }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side: Navigation Arrows */}
          <div className="flex flex-row items-center gap-3 w-full md:w-auto justify-start md:justify-end">
            <button 
              className="rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 hover:bg-white/10 transition-colors animate-blur-fade-up"
              style={{ animationDelay: "800ms" }}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className="rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 hover:bg-white/10 transition-colors animate-blur-fade-up"
              style={{ animationDelay: "900ms" }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
