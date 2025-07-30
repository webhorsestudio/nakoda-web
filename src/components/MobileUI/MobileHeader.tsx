"use client";

import React from 'react';
import { Bell, Bookmark, MapPin } from 'lucide-react';

interface MobileHeaderProps {
  userName?: string;
  profileImage?: string;
  location?: string;
}

export default function MobileHeader({ 
  userName = "Abhishek Krishna", 
  profileImage = "/api/placeholder/40/40",
  location = "Mumbai, Maharashtra"
}: MobileHeaderProps) {
  return (
    <div className="bg-white px-4 py-3">
      {/* Header Content */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Profile Picture */}
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Location */}
          <div>
            <h2 className="text-lg font-bold text-gray-900">{userName}</h2>
            <div className="flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-gray-500" />
              <p className="text-sm text-gray-600">{location}</p>
            </div>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-3">
          <button 
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
            suppressHydrationWarning
          >
            <Bell className="w-4 h-4 text-gray-600" />
          </button>
          <button 
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
            suppressHydrationWarning
          >
            <Bookmark className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
} 