"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Filter, Star, Wrench, Drill, Sparkles, Hammer, Paintbrush, Truck, Sprout, UserCheck, Settings, Home, Palette, Package, Leaf, Heart, Funnel } from "lucide-react";
import { useDeviceDetection, LAYOUT_CONFIG } from '../lib/deviceDetection';

interface ServiceProvider {
  id: string;
  name: string;
  image: string;
  rating: number;
  location: string;
  price: number;
  originalPrice: number;
  serviceTag: string;
}

interface PopularServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  rating: number;
  bookings: string;
  badge?: string;
  badgeColor?: string;
  icon: string;
  bgGradient: string;
  textColor: string;
  buttonText: string;
  buttonColor: string;
  productImage?: React.ReactNode;
  features?: string[];
}

const PopularServiceCard = ({
  title,
  subtitle,
  description,
  price,
  rating,
  bookings,
  badge,
  badgeColor = "bg-green-500",
  icon,
  bgGradient,
  textColor,
  buttonText,
  buttonColor,
  productImage,
  features
}: PopularServiceCardProps) => {
  return (
    <div className="flex-shrink-0 w-96 h-52 rounded-3xl overflow-hidden shadow-xl cursor-pointer group hover:shadow-2xl transition-all duration-500">
      <img 
        src="/images/ad1.webp" 
        alt="Service" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

interface VideoCardProps {
  id: string;
  title: string;
  price: string;
  tags: string[];
  image: string;
  videoUrl?: string;
}

const VideoCard = ({ title, price, tags, image, videoUrl }: VideoCardProps) => {
  const deviceInfo = useDeviceDetection();
  const config = LAYOUT_CONFIG[deviceInfo.type];

  return (
    <div className={`flex-shrink-0 ${config.cardWidth} ${config.cardHeight} rounded-3xl overflow-hidden shadow-xl cursor-pointer group hover:shadow-2xl transition-all duration-500 bg-white relative transform hover:-translate-y-1`}>
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Enhanced dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      </div>

      {/* Top Section - Tags and Action Icon */}
      <div className={`relative z-10 ${deviceInfo.isMobile ? 'p-3' : 'p-5'}`}>
        <div className="flex justify-between items-start">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className={`bg-white bg-opacity-95 text-xs font-semibold text-gray-700 rounded-full shadow-sm backdrop-blur-sm ${deviceInfo.isMobile ? 'px-2 py-1' : 'px-4 py-2'}`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Enhanced Action Icon */}
          <div className={`bg-white bg-opacity-95 rounded-full flex items-center justify-center border border-gray-200 shadow-md backdrop-blur-sm hover:bg-gray-50 transition-colors ${deviceInfo.isMobile ? 'w-8 h-8' : 'w-10 h-10'}`}>
            <div className="w-3 h-3 border-t border-r border-gray-600 transform rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Text Overlays and CTA */}
      <div className={`absolute bottom-0 left-0 right-0 ${deviceInfo.isMobile ? 'p-3' : 'p-5'}`}>
        {/* Service Title */}
        <h3 className={`text-white font-bold mb-2 drop-shadow-lg ${deviceInfo.isMobile ? 'text-lg' : 'text-2xl'}`}>{title}</h3>
        
        {/* Price */}
        <p className={`text-white text-sm mb-5 opacity-95 drop-shadow-md ${deviceInfo.isMobile ? 'mb-3' : 'mb-5'}`}>{price}</p>
        
        {/* Enhanced CTA Button */}
        <button className={`w-full bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 ${deviceInfo.isMobile ? 'px-4 py-3 text-sm' : 'px-6 py-4'}`}>
          GET HELP NOW
          <div className="w-0 h-0 border-l-[5px] border-l-gray-600 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
        </button>
      </div>

      {/* Enhanced Play Button Overlay */}
      {videoUrl && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className={`bg-white rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300 ${deviceInfo.isMobile ? 'w-16 h-16' : 'w-20 h-20'}`}>
            <div className={`w-0 h-0 border-l-blue-600 border-t-transparent border-b-transparent ml-1 ${deviceInfo.isMobile ? 'border-l-[8px] border-t-[6px] border-b-[6px]' : 'border-l-[12px] border-t-[10px] border-b-[10px]'}`}></div>
          </div>
        </div>
      )}
    </div>
  );
};

const videoData: VideoCardProps[] = [
  {
    id: "1",
    title: "Professional House Cleaning",
    price: "₹1,200",
    tags: ["Cleaning", "Professional"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
    videoUrl: "https://example.com/video1.mp4"
  },
  {
    id: "2",
    title: "Kitchen Deep Cleaning Service",
    price: "₹1,500",
    tags: ["Kitchen", "Deep Clean"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=500&fit=crop",
    videoUrl: "https://example.com/video2.mp4"
  },
  {
    id: "3",
    title: "Bathroom Sanitization",
    price: "₹1,300",
    tags: ["Bathroom", "Sanitization"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
    videoUrl: "https://example.com/video3.mp4"
  },
  {
    id: "4",
    title: "Window Cleaning Service",
    price: "₹800",
    tags: ["Windows", "Crystal Clear"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=500&fit=crop",
    videoUrl: "https://example.com/video4.mp4"
  },
  {
    id: "5",
    title: "Floor Cleaning & Polishing",
    price: "₹1,400",
    tags: ["Floor", "Polishing"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
    videoUrl: "https://example.com/video5.mp4"
  },
  {
    id: "6",
    title: "Carpet Deep Cleaning",
    price: "₹1,600",
    tags: ["Carpet", "Deep Clean"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=500&fit=crop",
    videoUrl: "https://example.com/video6.mp4"
  }
];

const serviceCategories = [
  { id: "assembly", name: "Assembly", icon: Settings, active: true },
  { id: "mounting", name: "Mounting", icon: Drill },
  { id: "cleaning", name: "Cleaning", icon: Sparkles },
  { id: "home-repair", name: "Home Repair", icon: Home },
  { id: "painting", name: "Painting", icon: Palette },
  { id: "moving", name: "Moving", icon: Package },
  { id: "outdoor", name: "Outdoor", icon: Leaf },
  { id: "rehab", name: "Rehab", icon: Heart },
];

const assemblySubCategories = [
  { id: "furniture", name: "Furniture Assembly", active: false },
  { id: "wardrobe", name: "Wardrobe & Dresser Assembly", active: false },
  { id: "table-chair", name: "Table & Chair Assembly", active: true },
  { id: "bed", name: "Bed Assembly", active: false },
  { id: "disassemble", name: "Disassemble Furniture", active: false },
  { id: "general", name: "General Furniture", active: false },
];

const serviceProviders: ServiceProvider[] = [
  {
    id: "1",
    name: "TechAssemble Solutions",
    image: "/api/placeholder/150/200",
    rating: 4.98,
    location: "Mumbai",
    price: 1200,
    originalPrice: 1400,
    serviceTag: "Repair"
  },
  {
    id: "2",
    name: "HomeFix Pro Services",
    image: "/api/placeholder/150/200",
    rating: 4.99,
    location: "Delhi",
    price: 1800,
    originalPrice: 2100,
    serviceTag: "Office"
  },
  {
    id: "3",
    name: "QuickAssemble India",
    image: "/api/placeholder/150/200",
    rating: 4.98,
    location: "Bangalore",
    price: 2400,
    originalPrice: 2800,
    serviceTag: "Event planning"
  },
  {
    id: "4",
    name: "SmartFix Services",
    image: "/api/placeholder/150/200",
    rating: 4.98,
    location: "Hyderabad",
    price: 900,
    originalPrice: 1100,
    serviceTag: "Rehab"
  },
  {
    id: "5",
    name: "ProAssemble Solutions",
    image: "/api/placeholder/150/200",
    rating: 4.97,
    location: "Chennai",
    price: 1350,
    originalPrice: 1600,
    serviceTag: "Assembly"
  },
  {
    id: "6",
    name: "EliteFix Services",
    image: "/api/placeholder/150/200",
    rating: 4.96,
    location: "Pune",
    price: 1650,
    originalPrice: 1900,
    serviceTag: "Mounting"
  }
];

export default function ServiceMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState("assembly");
  const [selectedSubCategory, setSelectedSubCategory] = useState("table-chair");
  const [mounted, setMounted] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [categoryScrollIndex, setCategoryScrollIndex] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [subCategoryScrollIndex, setSubCategoryScrollIndex] = useState(0);
  const [providerScrollIndex, setProviderScrollIndex] = useState(0);
  
  const deviceInfo = useDeviceDetection();
  const config = LAYOUT_CONFIG[deviceInfo.type];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCategoryScroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && categoryScrollIndex > 0) {
      setCategoryScrollIndex(categoryScrollIndex - 1);
    } else if (direction === 'right' && categoryScrollIndex < serviceCategories.length - 7) {
      setCategoryScrollIndex(categoryScrollIndex + 1);
    }
  };

  const handleSubCategoryScroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && subCategoryScrollIndex > 0) {
      setSubCategoryScrollIndex(subCategoryScrollIndex - 1);
    } else if (direction === 'right' && subCategoryScrollIndex < assemblySubCategories.length - 4) {
      setSubCategoryScrollIndex(subCategoryScrollIndex + 1);
    }
  };

  const handleProviderScroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && providerScrollIndex > 0) {
      setProviderScrollIndex(providerScrollIndex - 1);
    } else if (direction === 'right' && providerScrollIndex < serviceProviders.length - 3) {
      setProviderScrollIndex(providerScrollIndex + 1);
    }
  };

  const visibleCategories = serviceCategories.slice(categoryScrollIndex, categoryScrollIndex + 8);
  const visibleSubCategories = assemblySubCategories.slice(subCategoryScrollIndex, subCategoryScrollIndex + 4);
  const visibleProviders = serviceProviders.slice(providerScrollIndex, providerScrollIndex + 4);

  if (!mounted) {
    return null;
  }

  const scrollProgress = (providerScrollIndex / (serviceProviders.length - 4)) * 100;

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Navigation and Filters */}
          <div className="mb-12">
            {/* Service Categories */}
            <div className="flex items-center justify-between mb-8 bg-gray-100 rounded-lg p-4">
              {/* Categories Section - 95% width */}
              <div className="flex items-center space-x-3 w-[95%]">
                <button 
                  onClick={() => handleCategoryScroll('left')}
                  disabled={categoryScrollIndex === 0}
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                    categoryScrollIndex === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex items-center space-x-3 flex-1 justify-between">
                  {visibleCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    const isHalfVisible = index === 7; // 8th item (index 7) is half visible
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex flex-col items-center space-y-2 h-20 ${
                          isHalfVisible 
                            ? 'flex-[0.5] opacity-50' 
                            : 'flex-1'
                        } ${
                          category.active
                            ? 'bg-blue-600 text-white border-b-2 border-blue-700'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                        }`}
                      >
                        <IconComponent className={`w-7 h-7 ${
                          category.active ? 'text-white' : 'text-gray-700'
                        }`} />
                        <span className="text-xs font-medium">{category.name}</span>
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={() => handleCategoryScroll('right')}
                  disabled={categoryScrollIndex >= serviceCategories.length - 7}
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                    categoryScrollIndex >= serviceCategories.length - 7
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Filter Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm font-medium">Filter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sub Categories */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900">Assembly Services</h3>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => handleSubCategoryScroll('left')}
                disabled={subCategoryScrollIndex === 0}
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                  subCategoryScrollIndex === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex items-center space-x-3 flex-1 justify-between">
                {visibleSubCategories.map((subCategory) => (
                  <button
                    key={subCategory.id}
                    onClick={() => setSelectedSubCategory(subCategory.id)}
                    className={`flex-1 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 border ${
                      subCategory.active
                        ? 'bg-blue-500 text-white border-blue-500 shadow-sm'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {subCategory.name}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => handleSubCategoryScroll('right')}
                disabled={subCategoryScrollIndex >= assemblySubCategories.length - 4}
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                  subCategoryScrollIndex >= assemblySubCategories.length - 4
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Service Provider Display Area */}
          <div className="relative">
            {/* Horizontal Scrollable Cards */}
            <div className="flex space-x-8 pb-6">
              {visibleProviders.map((provider) => (
                <div
                  key={provider.id}
                  className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  {/* Provider Image */}
                  <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute top-3 left-3 px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-lg">
                      {provider.serviceTag}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xl">👤</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Provider Details */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 text-base">{provider.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 font-medium">{provider.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{provider.location}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400 line-through">₹{provider.originalPrice}</span>
                        <span className="font-semibold text-gray-900 text-base">₹{provider.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator and Navigation Buttons */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div className="w-[70%]">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full transition-all duration-300" style={{ width: `${scrollProgress}%` }} suppressHydrationWarning></div>
                  </div>
                </div>

                <div className="w-[30%] flex justify-end space-x-3">
                  <button
                    onClick={() => handleProviderScroll('left')}
                    disabled={providerScrollIndex === 0}
                    className={`w-10 h-10 bg-white rounded-full flex items-center justify-center transition-colors shadow-sm border border-gray-200 ${
                      providerScrollIndex === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleProviderScroll('right')}
                    disabled={providerScrollIndex >= serviceProviders.length - 3}
                    className={`w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                      providerScrollIndex >= serviceProviders.length - 3
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'hover:bg-blue-600'
                    }`}
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular Services</h2>
            <p className="text-gray-600">Transform your home with our professional services</p>
          </div>
          
          {/* Horizontal Carousel Container */}
          <div className="relative">
            {/* Navigation Arrow - Left */}
            <button className="absolute -left-7 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors border border-gray-200">
              <ChevronLeft className="w-7 h-7 text-gray-700" />
            </button>
            
            {/* Cards Container */}
            <div className="flex space-x-8 overflow-x-auto scrollbar-hide px-12">
              
              {/* Card 1 */}
              <PopularServiceCard
                title=""
                subtitle=""
                description=""
                price="₹599"
                rating={4.9}
                bookings="2.5k+ bookings"
                icon="❄️"
                bgGradient="bg-gradient-to-br from-blue-50 to-blue-100"
                textColor="text-gray-900"
                buttonText="Book now"
                buttonColor="bg-blue-600 hover:bg-blue-700"
                productImage={null}
              />

              {/* Card 2 */}
              <PopularServiceCard
                title=""
                subtitle=""
                description=""
                price="₹599"
                rating={4.9}
                bookings="2.5k+ bookings"
                icon="❄️"
                bgGradient="bg-gradient-to-br from-blue-50 to-blue-100"
                textColor="text-gray-900"
                buttonText="Book now"
                buttonColor="bg-blue-600 hover:bg-blue-700"
                productImage={null}
              />

              {/* Card 3 */}
              <PopularServiceCard
                title=""
                subtitle=""
                description=""
                price="₹599"
                rating={4.9}
                bookings="2.5k+ bookings"
                icon="❄️"
                bgGradient="bg-gradient-to-br from-blue-50 to-blue-100"
                textColor="text-gray-900"
                buttonText="Book now"
                buttonColor="bg-blue-600 hover:bg-blue-700"
                productImage={null}
              />

            </div>
            
            {/* Navigation Arrow - Right */}
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors border border-gray-200">
              <ChevronRight className="w-7 h-7 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* Short Videos Section */}
      <section className={`py-20 bg-gray-50 ${deviceInfo.isMobile ? 'py-12' : 'py-20'}`}>
        <div className={`${config.maxWidth} mx-auto ${config.padding}`}>
          <div className={`mb-12 ${deviceInfo.isMobile ? 'mb-8' : 'mb-12'}`}>
            <h2 className={`text-3xl font-bold text-gray-900 mb-3 text-center ${deviceInfo.isMobile ? 'text-2xl' : 'text-3xl'}`}>Short Videos</h2>
            <p className={`text-gray-600 text-center ${deviceInfo.isMobile ? 'text-sm' : 'text-lg'}`}>Quick tips and tutorials for your home</p>
          </div>
          
          {/* Horizontal Carousel Container */}
          <div className="relative">
            {/* Navigation Arrow - Left */}
            <button className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${config.navigationButtons.size} bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:shadow-2xl ${deviceInfo.isMobile ? '-left-6' : '-left-8'}`}>
              <ChevronLeft className={`${config.navigationButtons.iconSize} text-gray-700`} />
            </button>
            
            {/* Cards Container */}
            <div className={`flex overflow-x-auto scrollbar-hide ${deviceInfo.isMobile ? 'space-x-4 px-8' : 'space-x-10 px-16'}`}>
              
              {videoData.map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}

            </div>
            
            {/* Navigation Arrow - Right */}
            <button className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${config.navigationButtons.size} bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:shadow-2xl ${deviceInfo.isMobile ? '-right-6' : '-right-8'}`}>
              <ChevronRight className={`${config.navigationButtons.iconSize} text-gray-700`} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
} 