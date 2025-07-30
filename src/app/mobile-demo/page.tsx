"use client";

import React from 'react';
import { MobileApp } from '../../components/MobileUI';

export default function MobileDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50" suppressHydrationWarning>
      {/* Pure Mobile App - No web layout elements */}
      <MobileApp />
    </div>
  );
} 