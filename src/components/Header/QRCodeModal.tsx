"use client";

import { X } from "lucide-react";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full mx-4 relative">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4">
          <h2 className="text-lg font-semibold text-gray-900 text-center flex-1">
            Download the app to book your slot
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            suppressHydrationWarning
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* QR Code Section */}
        <div className="px-6 pb-4">
          {/* QR Code Placeholder */}
          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center mb-4">
            <div className="w-48 h-48 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-gray-500 text-sm text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-xs text-gray-400">QR Code</span>
                </div>
                <p className="text-xs">Scan the QR code</p>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            suppressHydrationWarning
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
} 