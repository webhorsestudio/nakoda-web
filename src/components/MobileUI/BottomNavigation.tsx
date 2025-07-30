"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Inbox, User, FileText, Home } from 'lucide-react';

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const tabs = [
  {
    id: 'home',
    label: 'Home',
    icon: Home,
    active: true
  },
  {
    id: 'bookings',
    label: 'Bookings',
    icon: FileText,
    active: false
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: Calendar,
    active: false
  },
  {
    id: 'inbox',
    label: 'Inbox',
    icon: Inbox,
    active: false
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: User,
    active: false
  }
];

export default function BottomNavigation({ 
  activeTab = 'home', 
  onTabChange 
}: BottomNavigationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScrollStart = () => {
      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        setIsVisible(false);
      }
    };

    const handleScrollEnd = () => {
      isScrollingRef.current = false;
      setIsVisible(true);
    };

    const handleScroll = () => {
      handleScrollStart();
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollEnd, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`fixed bottom-4 left-4 right-4 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl px-3 py-3">
        <div className="flex justify-around items-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange?.(tab.id)}
                className={`flex flex-col items-center space-y-1 py-1.5 px-2.5 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'text-blue-900 bg-blue-50/80' 
                    : 'text-gray-600 hover:text-blue-900 hover:bg-blue-50/50'
                }`}
                suppressHydrationWarning
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-900' : 'text-gray-600'}`} />
                <span className={`text-xs font-medium ${isActive ? 'text-blue-900' : 'text-gray-600'}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
} 