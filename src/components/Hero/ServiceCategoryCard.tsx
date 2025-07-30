"use client";

import { useState, useEffect } from "react";
import { 
  Scissors, 
  User, 
  Snowflake, 
  Sparkles, 
  Wrench, 
  Droplets, 
  Lock, 
  Palette, 
  Square 
} from "lucide-react";

interface ServiceCategoryCardProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
}

const serviceCategories = [
  {
    id: "womens-salon",
    name: "Women's Salon & Spa",
    icon: Scissors,
    color: "bg-pink-500 text-white",
    bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
    sale: "20% OFF"
  },
  {
    id: "mens-salon",
    name: "Men's Salon & Massage",
    icon: User,
    color: "bg-blue-500 text-white",
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    sale: "15% OFF"
  },
  {
    id: "ac-repair",
    name: "AC & Appliance Repair",
    icon: Snowflake,
    color: "bg-green-500 text-white",
    bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    sale: "30% OFF"
  },
  {
    id: "cleaning",
    name: "Cleaning & Pest Control",
    icon: Sparkles,
    color: "bg-red-500 text-white",
    bgColor: "bg-gradient-to-br from-red-500 to-red-600",
    sale: "25% OFF"
  },
  {
    id: "electrician",
    name: "Electrician, Plumber & Carpenter",
    icon: Wrench,
    color: "bg-orange-500 text-white",
    bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
    sale: "10% OFF"
  },
  {
    id: "water-purifier",
    name: "Native Water Purifier",
    icon: Droplets,
    color: "bg-gray-500 text-white",
    bgColor: "bg-gradient-to-br from-gray-500 to-gray-600",
    sale: "40% OFF"
  },
  {
    id: "smart-locks",
    name: "Native Smart Locks",
    icon: Lock,
    color: "bg-black text-white",
    bgColor: "bg-gradient-to-br from-gray-800 to-black",
    sale: "50% OFF"
  },
  {
    id: "painting",
    name: "Walls & rooms painting",
    icon: Palette,
    color: "bg-purple-500 text-white",
    bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
    sale: "35% OFF"
  },
  {
    id: "wall-panels",
    name: "Wall Panels",
    icon: Square,
    color: "bg-amber-500 text-white",
    bgColor: "bg-gradient-to-br from-amber-500 to-amber-600",
    sale: "45% OFF"
  }
];

export default function ServiceCategoryCard({ selectedCategory, onCategorySelect }: ServiceCategoryCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-30"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            What are you looking for?
          </h3>
          
          <div className="grid grid-cols-3 gap-4">
            {serviceCategories.map((category) => {
              const IconComponent = category.icon;
              
              return (
                <div
                  key={category.id}
                  className="group relative p-4 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                      {category.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-30"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          What are you looking for?
        </h3>
        
        <div className="grid grid-cols-3 gap-4">
          {serviceCategories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`group relative p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  isSelected 
                    ? 'border-blue-400 bg-blue-50/80 shadow-lg shadow-blue-200/50' 
                    : 'border-gray-200 hover:border-gray-300 bg-white/60 backdrop-blur-sm hover:bg-white/80'
                }`}
              >
                {/* Sale Banner */}
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {category.sale}
                </div>
                
                <div className="flex flex-col items-center space-y-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color} shadow-lg`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                    {category.name}
                  </span>
                </div>
                
                {/* Book Now Indicator */}
                <div className="mt-3">
                  <div className="w-full bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs font-semibold text-center">
                    Book now
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
} 