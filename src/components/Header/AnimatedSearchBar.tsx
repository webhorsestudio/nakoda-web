"use client";

import { Search } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

interface AnimatedSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  className?: string;
}

// Move services array outside component to prevent recreation
const SERVICES = [
  "Cleaning",
  "Facial", 
  "Kitchen",
  "AC Service",
  "Plumbing",
  "Electrician",
  "Carpenter",
  "Painting",
  "Moving",
  "Beauty"
];

export default function AnimatedSearchBar({ searchQuery, onSearchChange, className = "" }: AnimatedSearchBarProps) {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // Memoize services to prevent recreation
  const services = useMemo(() => SERVICES, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const typeText = () => {
      const currentService = services[currentServiceIndex];
      let charIndex = 0;
      
      setIsTyping(true);
      setDisplayText("");
      
      const typeInterval = setInterval(() => {
        if (charIndex <= currentService.length) {
          setDisplayText(currentService.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          
          // Wait 2 seconds before next service
          timeoutId = setTimeout(() => {
            setCurrentServiceIndex((prev) => (prev + 1) % services.length);
          }, 2000);
        }
      }, 120);
    };

    typeText();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentServiceIndex, services]);

  return (
    <div className={`relative flex-1 ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input 
        type="text" 
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={`Search for "${displayText}${isTyping ? '|' : ''}"`}
        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 text-sm"
        suppressHydrationWarning
      />
    </div>
  );
} 