"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const paymentMethods = [
  {
    id: "paypal",
    label: "PayPal",
    icon: (
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="w-7 h-7" />
    ),
  },
  {
    id: "googlepay",
    label: "Google Pay",
    icon: (
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Pay" className="w-7 h-7" />
    ),
  },
  {
    id: "applepay",
    label: "Apple Pay",
    icon: (
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="w-7 h-7" />
    ),
  },
  {
    id: "mastercard",
    label: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4679",
    icon: (
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="w-10 h-7" />
    ),
    sublabel: "mastercard"
  },
  {
    id: "cash",
    label: "Cash Money",
    icon: (
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Cash_app_logo.svg" alt="Cash" className="w-7 h-7" />
    ),
  },
];

export default function PaymentPage() {
  const [selected, setSelected] = useState("mastercard");
  const router = useRouter();

  const handleBack = () => router.back();
  const handleContinue = () => {
    // Navigate to Review Summary page
    router.push('/mobile/review');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="w-full md:max-w-sm md:mx-auto bg-white min-h-screen relative">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white px-4 py-3 border-b border-gray-200 flex items-center z-30">
          <button onClick={handleBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors mr-2" suppressHydrationWarning>
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-900">Payment Methods</h1>
        </div>

        {/* Subtitle */}
        <div className="px-6 pt-20 pb-2">
          <p className="text-sm text-gray-500">Select the payment method you want to use</p>
        </div>

        {/* Payment Methods List */}
        <div className="px-4 space-y-4 pb-24">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                {method.icon}
                <span className="font-semibold text-gray-900 text-base">
                  {method.label}
                </span>
              </div>
              <button
                onClick={() => setSelected(method.id)}
                className="w-6 h-6 rounded-full border-2 border-purple-400 flex items-center justify-center transition-colors"
                suppressHydrationWarning
              >
                {selected === method.id && (
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Action Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
          <div className="w-full md:max-w-sm md:mx-auto">
            <button
              onClick={handleContinue}
              className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg"
              suppressHydrationWarning
            >
              Continue
            </button>
          </div>
        </div>
        <div className="h-20"></div>
      </div>
    </div>
  );
}