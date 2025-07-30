"use client";

import React, { useState } from "react";
import { ArrowLeft, MoreVertical, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LocationPage() {
  const [address, setAddress] = useState("267 New Avenue Park, New York");
  const router = useRouter();

  const handleBack = () => router.back();
  const handleContinue = () => {
    // Placeholder for continue logic
    console.log(`Address confirmed: ${address}`);
    router.push('/mobile/payment');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full md:max-w-sm md:mx-auto bg-white min-h-screen relative">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white px-4 py-3 border-b border-gray-200 flex items-center justify-between z-30">
          <button onClick={handleBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors" suppressHydrationWarning>
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-900">Your Address/Location</h1>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" suppressHydrationWarning>
            <MoreVertical className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Map Section */}
        <div className="relative h-[65vh] bg-gradient-to-br from-purple-100 to-purple-200 mt-16">
          {/* Map Grid Pattern */}
          <div className="absolute inset-0 opacity-30">
            {/* Horizontal Roads */}
            <div className="absolute top-1/4 left-0 right-0 h-1 bg-white"></div>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white"></div>
            <div className="absolute top-3/4 left-0 right-0 h-1 bg-white"></div>
            
            {/* Vertical Roads */}
            <div className="absolute top-0 bottom-0 left-1/4 w-1 bg-white"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white"></div>
            <div className="absolute top-0 bottom-0 left-3/4 w-1 bg-white"></div>
            
            {/* Roundabout */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-full opacity-60"></div>
          </div>

          {/* Location Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* Purple Location Pin */}
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                {/* Profile Picture Inside Pin */}
                <div className="w-8 h-8 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* Pin Shadow */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-purple-600 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Bottom Sheet */}
        <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-40">
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="px-6 pb-6">
            {/* Title */}
            <h2 className="text-lg font-bold text-gray-900 text-center mb-6">Location Details</h2>

            {/* Address Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-2">Address</label>
              <div className="relative">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your address"
                  suppressHydrationWarning
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg"
              suppressHydrationWarning
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 