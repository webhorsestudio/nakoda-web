import React from 'react';

interface SpecialOffersProps {
  discount?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
}

export default function SpecialOffers({
  discount = "30%",
  title = "Today's Special!",
  subtitle = "Get discount for every order",
  description = "only valid for today",
  imageUrl = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop"
}: SpecialOffersProps) {
  return (
    <div className="px-4 py-3 bg-white">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold text-gray-900">Special Offers</h3>
        <button className="text-sm text-purple-600 font-medium" suppressHydrationWarning>See All</button>
      </div>

      {/* Promotional Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 p-4">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <div className="text-4xl font-bold mb-1">{discount}</div>
            <div className="text-lg font-semibold mb-1">{title}</div>
            <div className="text-sm opacity-90">{subtitle}</div>
            <div className="text-xs opacity-75">{description}</div>
          </div>

          {/* Right Image */}
          <div className="w-20 h-20 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
            <img 
              src={imageUrl} 
              alt="Cleaning Service" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full -ml-6 -mb-6"></div>
      </div>
    </div>
  );
} 