import React from 'react';
import { useDeviceDetection, DeviceType, LAYOUT_CONFIG } from '../lib/deviceDetection';

interface DeviceAwareLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function DeviceAwareLayout({ children, className = '' }: DeviceAwareLayoutProps) {
  const deviceInfo = useDeviceDetection();
  const config = LAYOUT_CONFIG[deviceInfo.type];

  return (
    <div className={`${config.maxWidth} ${config.padding} ${className}`}>
      {/* Device Info Debug (remove in production) */}
      <div className="fixed top-4 right-4 bg-black text-white px-3 py-1 rounded text-xs z-50">
        {deviceInfo.type} - {deviceInfo.width}x{deviceInfo.height}
      </div>
      
      {children}
    </div>
  );
}

// Example of a device-aware component
export function DeviceAwareCard({ 
  title, 
  content, 
  className = '' 
}: { 
  title: string; 
  content: string; 
  className?: string; 
}) {
  const deviceInfo = useDeviceDetection();
  const config = LAYOUT_CONFIG[deviceInfo.type];

  return (
    <div className={`${config.cardWidth} ${config.cardHeight} bg-white rounded-lg shadow-md p-4 ${className}`}>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}

// Example of conditional rendering based on device
export function ResponsiveContent() {
  const deviceInfo = useDeviceDetection();

  return (
    <div className="space-y-4">
      {deviceInfo.isWeb && (
        <div className="bg-blue-100 p-4 rounded">
          <h3 className="text-lg font-bold">Web Layout</h3>
          <p>This content is only visible on web devices (desktop and large screens).</p>
        </div>
      )}
      
      {deviceInfo.isMobile && (
        <div className="bg-yellow-100 p-4 rounded">
          <h3 className="text-lg font-bold">Mobile Layout</h3>
          <p>This content is only visible on mobile devices (phones and tablets).</p>
        </div>
      )}
    </div>
  );
} 