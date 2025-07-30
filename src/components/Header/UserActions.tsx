"use client";

import { User, ShoppingCart, Smartphone } from "lucide-react";
import { useState } from "react";
import QRCodeModal from "./QRCodeModal";

interface UserActionsProps {
  className?: string;
}

export default function UserActions({ className = "" }: UserActionsProps) {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const handleGetAppClick = () => {
    setIsQRModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsQRModalOpen(false);
  };

  return (
    <>
      <div className={`flex items-center space-x-4 ${className}`}>
        {/* Shopping Cart */}
        <button 
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors" 
          suppressHydrationWarning
        >
          <ShoppingCart className="w-6 h-6 text-gray-600" />
        </button>
        
        {/* Login Icon */}
        <button 
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors" 
          suppressHydrationWarning
        >
          <User className="w-6 h-6 text-gray-600" />
        </button>
        
        {/* Get App Button */}
        <button 
          onClick={handleGetAppClick}
          className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2.5 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          suppressHydrationWarning
        >
          <Smartphone className="w-4 h-4 text-white" />
          <span className="text-sm text-white">Get App</span>
        </button>
      </div>

      {/* QR Code Modal */}
      <QRCodeModal 
        isOpen={isQRModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
} 