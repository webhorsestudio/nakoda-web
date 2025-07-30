"use client";

import React, { useState, useEffect } from 'react';
import MobileHeader from './MobileHeader';
import SearchBar from './SearchBar';
import SpecialOffers from './SpecialOffers';
import ServicesGrid from './ServicesGrid';
import MostPopularServices from './MostPopularServices';
import BottomNavigation from './BottomNavigation';
import SplashScreen from './SplashScreen';

export default function MobileApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Search query:', query);
  };

  const handleFilter = () => {
    console.log('Filter clicked');
  };

  const handleServiceClick = (serviceId: string) => {
    console.log('Service clicked:', serviceId);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    console.log('Tab changed to:', tab);
  };

  // Show splash screen while loading
  if (isLoading) {
    return <SplashScreen onLoadingComplete={handleLoadingComplete} />;
  }

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="w-full md:max-w-sm md:mx-auto bg-white shadow-lg">
          <div className="animate-pulse">
            <div className="bg-white px-4 py-3">
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile App Container - Full width on mobile, centered on larger screens */}
      <div className="w-full md:max-w-sm md:mx-auto bg-white shadow-lg">
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 right-0 z-30 bg-white">
          <div className="w-full md:max-w-sm md:mx-auto">
            {/* Header */}
            <MobileHeader />

            {/* Search Bar */}
            <SearchBar 
              onSearch={handleSearch}
              onFilter={handleFilter}
            />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="pt-32">
          {/* Special Offers */}
          <div className="pt-4">
            <SpecialOffers />
          </div>

          {/* Services Grid */}
          <ServicesGrid onServiceClick={handleServiceClick} />

          {/* Most Popular Services */}
          <MostPopularServices onServiceClick={handleServiceClick} />
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>
    </div>
  );
} 