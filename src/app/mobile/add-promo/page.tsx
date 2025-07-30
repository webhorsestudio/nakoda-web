"use client";

import React, { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { useRouter } from "next/navigation";

interface PromoOption {
  id: string;
  title: string;
  description: string;
  color: string;
  iconColor: string;
}

const promoOptions: PromoOption[] = [
  {
    id: "1",
    title: "Special 25% Off",
    description: "Special promo only today!",
    color: "bg-purple-500",
    iconColor: "bg-purple-600"
  },
  {
    id: "2", 
    title: "Discount 30% Off",
    description: "New user special promo",
    color: "bg-yellow-400",
    iconColor: "bg-yellow-500"
  },
  {
    id: "3",
    title: "Special 20% Off", 
    description: "Special promo only today!",
    color: "bg-pink-400",
    iconColor: "bg-pink-500"
  },
  {
    id: "4",
    title: "Discount 40% Off",
    description: "Special promo only valid today",
    color: "bg-teal-400", 
    iconColor: "bg-teal-500"
  },
  {
    id: "5",
    title: "Discount 35% Off",
    description: "Special promo only today!",
    color: "bg-orange-400",
    iconColor: "bg-orange-500"
  }
];

export default function AddPromoPage() {
  const [selectedPromo, setSelectedPromo] = useState<string>("2");
  const router = useRouter();

  const handleBack = () => router.back();
  const handleApplyPromo = () => {
    // Placeholder for apply promo logic
    console.log(`Applied promo: ${selectedPromo}`);
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="w-full md:max-w-sm md:mx-auto bg-white shadow-lg min-h-screen">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white px-4 py-3 border-b border-gray-200 flex items-center justify-between z-30">
          <button onClick={handleBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors" suppressHydrationWarning>
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-900">Add Promo</h1>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" suppressHydrationWarning>
            <Search className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 py-4 pt-20">
          {/* Promo List */}
          <div className="space-y-3">
            {promoOptions.map((promo) => (
              <div
                key={promo.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  {/* Left Circle Icon */}
                  <div className="relative">
                    <div className={`w-16 h-16 ${promo.color} rounded-full flex items-center justify-center relative`}>
                      {/* Gift Box Icon */}
                      <div className={`w-8 h-8 ${promo.iconColor} rounded-lg flex items-center justify-center`}>
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                      </div>
                      {/* Confetti Dots */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-80"></div>
                      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                      <div className="absolute top-1 -left-1 w-1 h-1 bg-white rounded-full opacity-40"></div>
                    </div>
                  </div>

                  {/* Middle Text Content */}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base">{promo.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{promo.description}</p>
                  </div>

                  {/* Right Radio Button */}
                  <div className="flex items-center">
                    <button
                      onClick={() => setSelectedPromo(promo.id)}
                      className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors"
                      suppressHydrationWarning
                    >
                      {selectedPromo === promo.id && (
                        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
          <div className="w-full md:max-w-sm md:mx-auto">
            <button
              onClick={handleApplyPromo}
              className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg"
              suppressHydrationWarning
            >
              Apply Promo
            </button>
          </div>
        </div>

        {/* Bottom padding to account for fixed action bar */}
        <div className="h-20"></div>
      </div>
    </div>
  );
} 