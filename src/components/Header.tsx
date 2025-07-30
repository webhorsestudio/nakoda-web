"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import LocationSelector from "./Header/LocationSelector";
import AnimatedSearchBar from "./Header/AnimatedSearchBar";
import UserActions from "./Header/UserActions";
import MobileMenu from "./Header/MobileMenu";
import LocationService from "@/lib/locationService";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("Dadar, Mumbai");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();

  // Initialize location service
  useEffect(() => {
    const initializeLocation = async () => {
      try {
        setIsLocationLoading(true);
        const locationService = LocationService.getInstance();
        const detectedLocation = await locationService.initializeLocation(pathname);
        setCurrentLocation(detectedLocation);
        
        // Update URL for SEO
        const city = locationService.getCityFromLocation(detectedLocation);
        const citySlug = locationService.getCitySlug(city);
        const currentCity = pathname.split('/')[1];
        
        if (currentCity !== citySlug && pathname === '/') {
          router.push(`/${citySlug}`);
        }
      } catch (error) {
        console.error("Failed to detect location:", error);
        setCurrentLocation("Dadar, Mumbai");
        if (pathname === '/') {
          router.push('/mumbai');
        }
      } finally {
        setIsLocationLoading(false);
      }
    };

    initializeLocation();
  }, [router, pathname]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleLocationChange = (location: string) => {
    setCurrentLocation(location);
    const locationService = LocationService.getInstance();
    const city = locationService.getCityFromLocation(location);
    const citySlug = locationService.getCitySlug(city);
    router.push(`/${citySlug}`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-6 lg:gap-8">
          
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="Nakoda Urban Services" 
              width={160} 
              height={45} 
              className="h-11 w-auto"
              priority
            />
          </div>
          
          {/* Center Section - Location & Search */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8 lg:mx-12 gap-4">
            <LocationSelector 
              currentLocation={currentLocation}
              onLocationChange={handleLocationChange}
              isLoading={isLocationLoading}
            />
            <AnimatedSearchBar 
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
            />
          </div>
          
          {/* Right Side - User Actions & Mobile Menu */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            <UserActions />
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              suppressHydrationWarning
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMobileMenuOpen}
          currentLocation={currentLocation}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onLocationChange={handleLocationChange}
          isLoading={isLocationLoading}
        />
      </div>
    </header>
  );
} 