"use client";

import React from 'react';
import DeviceAwareLayout, { DeviceAwareCard, ResponsiveContent } from '../../components/DeviceAwareLayout';

export default function DeviceDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DeviceAwareLayout>
        <div className="py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Device Detection Demo</h1>
          
          {/* Device-aware cards */}
          <div className="grid gap-6 mb-8">
            <DeviceAwareCard 
              title="Responsive Card 1" 
              content="This card adapts its size and layout based on your device type. Try resizing your browser window to see the changes!"
            />
            <DeviceAwareCard 
              title="Responsive Card 2" 
              content="The card dimensions, padding, and typography all adjust automatically for optimal viewing on your device."
            />
          </div>

          {/* Conditional content based on device */}
          <ResponsiveContent />

          {/* Device information */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4">Device Information</h2>
            <p className="text-gray-600">
              This page demonstrates our device detection system that provides different layouts for:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li><strong>Mobile:</strong> Optimized for phones and tablets with smaller cards and tighter spacing</li>
              <li><strong>Web:</strong> Full-featured layout for desktop and large screens with larger components and generous spacing</li>
            </ul>
          </div>

          {/* Layout configuration showcase */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4">Layout Configuration</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded">
                <h3 className="font-bold text-yellow-800">Mobile</h3>
                <p className="text-sm text-yellow-600">Compact layout with full-width cards for phones and tablets</p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold text-blue-800">Web</h3>
                <p className="text-sm text-blue-600">Spacious layout with large cards for desktop and large screens</p>
              </div>
            </div>
          </div>
        </div>
      </DeviceAwareLayout>
    </div>
  );
} 