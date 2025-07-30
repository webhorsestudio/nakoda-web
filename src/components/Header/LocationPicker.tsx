"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, ChevronDown, Check } from "lucide-react";
import LocationService from "@/lib/locationService";

interface LocationPickerProps {
  currentLocation: string;
  onLocationChange: (location: string) => void;
  className?: string;
}

export default function LocationPicker({ currentLocation, onLocationChange, className = "" }: LocationPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const locationService = LocationService.getInstance();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const availableLocations = locationService.getAvailableLocations();
  const filteredLocations = searchQuery 
    ? availableLocations.filter(location => 
        location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : availableLocations;

  const handleLocationSelect = (location: string) => {
    onLocationChange(location);
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Location Display */}
      <div 
        className="relative flex-1 max-w-xs cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input 
          type="text" 
          value={currentLocation}
          readOnly
          className="w-full pl-10 pr-8 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 text-sm cursor-pointer"
          placeholder="Select location"
          suppressHydrationWarning
        />
        <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {/* Search Input */}
          <div className="p-3 border-b border-gray-100">
            <input
              type="text"
              placeholder="Search locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              suppressHydrationWarning
            />
          </div>

          {/* Location List */}
          <div className="py-1">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location) => (
                <button
                  key={location}
                  onClick={() => handleLocationSelect(location)}
                  className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center justify-between ${
                    location === currentLocation ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                  suppressHydrationWarning
                >
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    {location}
                  </div>
                  {location === currentLocation && (
                    <Check className="w-4 h-4 text-blue-600" />
                  )}
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500">
                No locations found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 