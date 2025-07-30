"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { ArrowLeft, Search, Bookmark, ChevronDown, MoreVertical } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import BottomNavigation from '../../../components/MobileUI/BottomNavigation';

interface ServiceProvider {
  id: string;
  name: string;
  service: string;
  price: string;
  priceValue: number;
  rating: string;
  ratingValue: number;
  reviews: string;
  image: string;
  bhk: string;
}

const serviceProviders: ServiceProvider[] = [
  {
    id: '1',
    name: 'Jenny Wilson',
    service: 'House Cleaning',
    price: '₹1,200',
    priceValue: 1200,
    rating: '4.8',
    ratingValue: 4.8,
    reviews: '4,479 reviews',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop&crop=face',
    bhk: '2'
  },
  {
    id: '2',
    name: 'Willard Purnell',
    service: 'Floor Cleaning',
    price: '₹1,380',
    priceValue: 1380,
    rating: '4.9',
    ratingValue: 4.9,
    reviews: '6,182 reviews',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    bhk: '3'
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    service: 'Washing Clothes',
    price: '₹1,320',
    priceValue: 1320,
    rating: '4.7',
    ratingValue: 4.7,
    reviews: '7,938 reviews',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    bhk: '1'
  },
  {
    id: '4',
    name: 'Maria Garcia',
    service: 'Bathroom Cleaning',
    price: '₹1,440',
    priceValue: 1440,
    rating: '4.8',
    ratingValue: 4.8,
    reviews: '5,234 reviews',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
    bhk: '4'
  },
  {
    id: '5',
    name: 'David Chen',
    service: 'Kitchen Cleaning',
    price: '₹1,260',
    priceValue: 1260,
    rating: '4.9',
    ratingValue: 4.9,
    reviews: '3,567 reviews',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    bhk: '2'
  },
  {
    id: '6',
    name: 'Lisa Thompson',
    service: 'Window Cleaning',
    price: '₹1,500',
    priceValue: 1500,
    rating: '4.6',
    ratingValue: 4.6,
    reviews: '2,891 reviews',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
    bhk: '5+'
  }
];

function CleaningServiceContent() {
  const [mounted, setMounted] = useState(false);
  const [selectedBHK, setSelectedBHK] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [activeTab, setActiveTab] = useState('home');
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get service name from URL parameters
  const selectedService = searchParams.get('name') || 'Cleaning';

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter providers based on selected criteria
  const filteredProviders = serviceProviders.filter(provider => {
    // BHK filter
    if (selectedBHK !== 'All' && provider.bhk !== selectedBHK) {
      return false;
    }
    
    // Rating filter
    if (selectedRating !== 'All') {
      const ratingValue = parseFloat(provider.rating);
      const filterRating = parseFloat(selectedRating.replace('+', ''));
      if (ratingValue < filterRating) {
        return false;
      }
    }
    
    return true;
  }).sort((a, b) => {
    // Price sorting
    if (selectedPrice === 'Low to High') {
      return a.priceValue - b.priceValue;
    } else if (selectedPrice === 'High to Low') {
      return b.priceValue - a.priceValue;
    }
    return 0;
  });

  const handleBack = () => {
    router.back();
  };

  const handleProviderClick = (providerId: string) => {
    console.log('Provider clicked:', providerId);
    // Navigate to provider details page
    router.push(`/mobile/provider/${providerId}`);
  };

  const handleSearch = () => {
    console.log('Search clicked');
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    console.log('Tab changed to:', tab);
  };

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
      <div className="w-full md:max-w-sm md:mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white px-4 py-3 border-b border-gray-200 flex items-center justify-between z-30">
          <button onClick={handleBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors" suppressHydrationWarning>
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-900">{selectedService}</h1>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" suppressHydrationWarning>
            <MoreVertical className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Filters */}
        <div className="px-4 pt-20 pb-4">
          <div className="flex space-x-3">
            {/* Configuration Filter */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">Configuration</label>
              <select
                value={selectedBHK}
                onChange={(e) => setSelectedBHK(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                suppressHydrationWarning
              >
                <option value="All">All</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK</option>
                <option value="5+">5+ BHK</option>
              </select>
            </div>

            {/* Price Filter */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">Price</label>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                suppressHydrationWarning
              >
                <option value="All">All</option>
                <option value="Low to High">Low to High</option>
                <option value="High to Low">High to Low</option>
              </select>
            </div>

            {/* Rating Filter */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">Rating</label>
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                suppressHydrationWarning
              >
                <option value="All">All</option>
                <option value="4.5+">4.5+</option>
                <option value="4+">4+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Service Providers List */}
        <div className="px-4 space-y-4 pb-24">
          <div className="space-y-4">
            {filteredProviders.map((provider) => ( // Changed to use serviceProviders directly
              <div
                key={provider.id}
                onClick={() => handleProviderClick(provider.id)}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                    <img 
                      src={provider.image} 
                      alt={provider.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base">{provider.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{provider.service}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-sm">★</span>
                        <span className="text-sm text-gray-600 ml-1">{provider.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{provider.reviews}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Starts from</div>
                    <div className="text-lg font-bold text-purple-600">{provider.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

export default function CleaningServicePage() {
  return (
    <Suspense fallback={
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
    }>
      <CleaningServiceContent />
    </Suspense>
  );
} 