"use client";

import React, { useState } from "react";
import { ArrowLeft, MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "13:00 PM",
  "14:00 PM",
  "15:00 PM"
];

export default function BookingPage() {
  const [workingHours, setWorkingHours] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM");
  const [promoCode, setPromoCode] = useState("");
  const [selectedDate, setSelectedDate] = useState<number>(23);
  const router = useRouter();

  // For December 2024 calendar
  const daysInMonth = 31;
  const firstDayOfWeek = 0; // Monday

  const handleBack = () => router.back();
  const handleHourChange = (delta: number) => {
    setWorkingHours((prev) => Math.max(0, prev + delta));
  };
  const handlePromoAdd = () => {
    // Navigate to Add Promo page
    router.push('/mobile/add-promo');
  };
  const handleContinue = () => {
    // Navigate to location page
    router.push('/mobile/location');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full md:max-w-sm md:mx-auto bg-white shadow-lg min-h-screen">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white px-4 py-3 border-b border-gray-200 flex items-center justify-between z-30">
          <button onClick={handleBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors" suppressHydrationWarning>
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-900">Booking Details</h1>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" suppressHydrationWarning>
            <MoreVertical className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 py-4 pt-20">
          {/* Select Date */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">Select Date</label>
            <div className="bg-purple-50 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4">
                <button className="p-1 rounded hover:bg-purple-100 transition-colors">
                  <span className="text-lg font-bold text-purple-400">‹</span>
                </button>
                <span className="font-semibold text-gray-700 text-base">December 2024</span>
                <button className="p-1 rounded hover:bg-purple-100 transition-colors">
                  <span className="text-lg font-bold text-purple-400">›</span>
                </button>
              </div>
              <div className="grid grid-cols-7 text-xs text-center text-gray-500 mb-2">
                <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                  <span key={"empty-" + i}></span>
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setSelectedDate(i + 1)}
                    className={`aspect-square w-8 rounded-lg text-sm font-medium transition-colors
                      ${selectedDate === i + 1 
                        ? "bg-purple-500 text-white shadow-md" 
                        : "bg-white text-gray-900 hover:bg-purple-100"
                      }`}
                    suppressHydrationWarning
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="mb-6">
            <div className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm">
              <div>
                <div className="font-semibold text-gray-900 text-base">Working Hours</div>
                <div className="text-xs text-gray-400 mt-1">Cost increase after 2 hrs of work.</div>
              </div>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => handleHourChange(-1)} 
                  className="w-8 h-8 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center hover:bg-purple-200 transition-colors font-bold text-lg"
                  suppressHydrationWarning
                >
                  -
                </button>
                <span className="w-8 text-center font-semibold text-lg text-gray-900">{workingHours}</span>
                <button 
                  onClick={() => handleHourChange(1)} 
                  className="w-8 h-8 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center hover:bg-purple-200 transition-colors font-bold text-lg"
                  suppressHydrationWarning
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Choose Start Time */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">Choose Start Time</label>
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`px-4 py-2 rounded-full border font-semibold text-sm transition-colors whitespace-nowrap flex-shrink-0
                    ${selectedTime === slot 
                      ? "bg-purple-600 text-white border-purple-600 shadow-md" 
                      : "bg-white text-purple-600 border-purple-300 hover:bg-purple-50"
                    }`}
                  suppressHydrationWarning
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Promo Code */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">Promo Code</label>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4 border border-purple-100">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={e => setPromoCode(e.target.value)}
                    placeholder="Enter Promo Code"
                    className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 shadow-sm"
                    suppressHydrationWarning
                  />
                  {promoCode && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                <button
                  onClick={handlePromoAdd}
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 text-white flex items-center justify-center text-xl font-bold hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  suppressHydrationWarning
                >
                  +
                </button>
              </div>
              {promoCode && (
                <div className="mt-3 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600 font-medium">Promo code ready to apply</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Action Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
          <div className="w-full md:max-w-sm md:mx-auto">
            <button
              onClick={handleContinue}
              className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg"
              suppressHydrationWarning
            >
              Continue - ₹125
            </button>
          </div>
        </div>

        {/* Bottom padding to account for fixed action bar */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}