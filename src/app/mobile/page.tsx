"use client";

import React from 'react';
import { MobileApp } from '../../components/MobileUI';

export default function MobilePage() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-auto" suppressHydrationWarning>
      {/* Pure Mobile App - No web layout elements */}
      <MobileApp />
    </div>
  );
} 