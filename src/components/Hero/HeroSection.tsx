"use client";

import { useState } from "react";
import ServiceCategoryCard from "./ServiceCategoryCard";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // Handle category selection logic here
  };

  return (
    <section className="pt-8 pb-12 lg:pt-12 lg:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section with Service Categories and 3-Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Section - Service Categories */}
          <div className="space-y-6">
            {/* Service Category Card */}
            <ServiceCategoryCard 
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
          </div>

          {/* Right Section - New 3-Card Layout */}
          <div className="lg:pl-8">
            <div className="space-y-4">
              
              {/* Top Card - Main Hero Section */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 shadow-lg group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Left Content Area */}
                    <div className="space-y-4">
                      {/* Tags */}
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-gray-200/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 border border-gray-300/50">
                          Service
                        </span>
                        <span className="px-3 py-1 bg-gray-200/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 border border-gray-300/50">
                          Helpplatform
                        </span>
                      </div>

                      {/* Headline */}
                      <div className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                          A world of talent right at your fingertips.
                          <span className="block relative">
                            Get help now.
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform -skew-x-12"></div>
                          </span>
                        </h2>
                        
                        {/* CTA Button */}
                        <button className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                          Get help now
                        </button>
                      </div>
                    </div>

                    {/* Right Content Area - Visual */}
                    <div className="relative flex items-center justify-center">
                      {/* Woman with smartphone and laptop */}
                      <div className="relative">
                        {/* Woman with smartphone */}
                        <div className="relative z-10">
                          <div className="w-20 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-80 mb-3"></div>
                          <div className="absolute top-4 left-4 w-10 h-12 bg-black rounded-lg transform rotate-12">
                            <div className="w-full h-full bg-blue-500 rounded-lg flex items-center justify-center">
                              <div className="text-white text-xs font-bold">📱</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Silver laptop */}
                        <div className="absolute bottom-2 right-2 w-16 h-10 bg-gray-300 rounded-lg transform -rotate-6">
                          <div className="w-full h-full bg-gray-100 rounded-lg"></div>
                        </div>
                        
                        {/* Wavy patterns overlay */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-2 right-4 w-4 h-4 bg-gray-400 rounded-full"></div>
                          <div className="absolute bottom-4 left-2 w-3 h-3 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Corner Icon */}
                    <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                      <ArrowUpRight className="w-3 h-3 text-gray-700" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Cards Row */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Bottom-Left Card - Shipping Category */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 border border-blue-400 shadow-lg group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="relative p-4 h-32">
                    {/* Background Image Simulation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-80">
                      {/* Shipping activity simulation */}
                      <div className="absolute bottom-2 left-2 w-8 h-10 bg-white/20 rounded-lg transform rotate-12">
                        <div className="w-full h-full bg-white/30 rounded-lg"></div>
                      </div>
                      <div className="absolute top-2 right-2 w-10 h-6 bg-white/20 rounded-lg transform -rotate-6">
                        <div className="w-full h-full bg-white/30 rounded-lg"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                          Shipping
                        </span>
                        <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <ArrowUpRight className="w-2 h-2 text-gray-700" />
                        </div>
                      </div>
                      
                      <div className="text-white font-bold text-sm">Shipping + Freight</div>
                    </div>
                  </div>
                </div>

                {/* Bottom-Right Card - Join Us */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 border border-blue-500 shadow-lg group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="relative p-4 h-32">
                    {/* Background Pattern */}
                    <div className="absolute bottom-1 right-1 opacity-20">
                      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-blue-300 rounded-full absolute -top-1 -left-1"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <span className="text-blue-600 text-sm">😊</span>
                        </div>
                        <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <ArrowUpRight className="w-2 h-2 text-gray-700" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-white font-bold text-xs leading-tight">
                          Ready to turn your skills into income?
                        </h3>
                        <button className="bg-white text-blue-600 px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                          Join us
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 