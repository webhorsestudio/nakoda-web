"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onLoadingComplete: () => void;
  loadingTime?: number;
}

export default function SplashScreen({ 
  onLoadingComplete, 
  loadingTime = 3000 
}: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500); // Fade out animation duration
    }, loadingTime);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, loadingTime]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      {/* Logo Section - perfectly centered */}
      <div className="flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Nakoda Logo"
            width={180}
            height={180}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Loading Indicator - fixed at bottom */}
      <div className="absolute bottom-8 left-0 w-full flex items-center justify-center">
        <div className="relative w-12 h-12">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="absolute w-2 h-2 bg-purple-600 rounded-full animate-pulse"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${index * 45}deg) translateY(-18px)`,
                animationDelay: `${index * 0.1}s`,
                animationDuration: '1.2s',
                animationIterationCount: 'infinite',
                opacity: 0.3 + (index * 0.1),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 