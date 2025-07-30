"use client";

import React, { useState } from "react";
import { ArrowLeft, ChevronDown, Check, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReviewPage() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const router = useRouter();

  const handleBack = () => router.back();
  const handleConfirmPayment = () => {
    setShowSuccessPopup(true);
  };

  const handleViewReceipt = () => {
    // Navigate to receipt page
    console.log("View E-Receipt clicked");
    router.push('/mobile/receipt');
  };

  const handleMessageWorkers = () => {
    // Navigate to messaging page
    console.log("Message Workers clicked");
    router.push('/mobile/message');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full md:max-w-sm md:mx-auto bg-gray-50 min-h-screen relative">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white px-4 py-3 border-b border-gray-200 flex items-center z-30">
          <button onClick={handleBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors mr-2" suppressHydrationWarning>
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-900">Review Summary</h1>
        </div>

        {/* Content */}
        <div className="px-4 py-4 space-y-4 pt-20">
          {/* Service Information Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-500">Services</span>
                <p className="font-bold text-gray-900">House Cleaning</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Category</span>
                <p className="font-bold text-gray-900">Cleaning</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Workers</span>
                <p className="font-bold text-gray-900">Jenny Wilson</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Date & Time</span>
                <p className="font-bold text-gray-900">Dec 23, 2024 | 10:00 AM</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Working Hours</span>
                <p className="font-bold text-gray-900">2 hours</p>
              </div>
            </div>
          </div>

          {/* House Cleaning Details Section */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">House Cleaning Details</h3>
              <button className="p-1">
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* Cost Breakdown */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-900">House Cleaning</span>
                <span className="font-bold text-gray-900">₹125.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-900">Promo</span>
                <span className="font-bold text-purple-600">- ₹37.50</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-gray-900">₹87.50</span>
              </div>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" 
                  alt="Mastercard" 
                  className="w-8 h-6"
                />
                <span className="font-semibold text-gray-900">**** **** **** 4679</span>
              </div>
              <button className="text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors">
                Change
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Action Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
          <div className="w-full md:max-w-sm md:mx-auto">
            <button
              onClick={handleConfirmPayment}
              className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg"
              suppressHydrationWarning
            >
              Confirm Payment
            </button>
          </div>
        </div>

        {/* Bottom padding to account for fixed action bar */}
        <div className="h-20"></div>

        {/* Success Popup Overlay */}
        {showSuccessPopup && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowSuccessPopup(false)}
          >
            <div 
              className="bg-white rounded-3xl p-8 mx-4 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success Visual */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {/* Large Purple Circle */}
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center relative">
                    {/* White Square with Checkmark */}
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <Check className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  
                  {/* Confetti Dots */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="absolute top-2 -left-3 w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                  <div className="absolute -top-1 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <div className="absolute bottom-1 -right-3 w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
              </div>

              {/* Confirmation Message */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-purple-600 mb-2">Booking Successful!</h2>
                <p className="text-gray-600 text-sm">You have successfully made payment and book the services.</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleViewReceipt}
                  className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors"
                  suppressHydrationWarning
                >
                  View E-Receipt
                </button>
                <button
                  onClick={handleMessageWorkers}
                  className="w-full bg-white text-purple-600 py-4 px-6 rounded-xl font-bold text-lg border-2 border-purple-600 hover:bg-purple-50 transition-colors"
                  suppressHydrationWarning
                >
                  Message Workers
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Background PIN Interface (Partially Visible) */}
        {showSuccessPopup && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 z-40">
            <div className="w-full md:max-w-sm md:mx-auto">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <button className="w-12 h-12 bg-gray-700 text-white rounded-full text-lg font-semibold">7</button>
                <button className="w-12 h-12 bg-gray-700 text-white rounded-full text-lg font-semibold">8</button>
                <button className="w-12 h-12 bg-gray-700 text-white rounded-full text-lg font-semibold">9</button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button className="w-12 h-12 bg-gray-700 text-white rounded-full text-lg font-semibold">.</button>
                <button className="w-12 h-12 bg-gray-700 text-white rounded-full text-lg font-semibold">0</button>
                <button className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 