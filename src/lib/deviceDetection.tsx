import React, { useEffect, useState } from 'react';

// Device type enum - simplified to 2 layouts
export enum DeviceType {
  MOBILE = 'mobile',
  WEB = 'web'
}

// Screen breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

// Device detection interface
export interface DeviceInfo {
  type: DeviceType;
  width: number;
  height: number;
  isMobile: boolean;
  isWeb: boolean;
  isLandscape: boolean;
  isPortrait: boolean;
}

// Hook for device detection
export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    type: DeviceType.WEB,
    width: 0,
    height: 0,
    isMobile: false,
    isWeb: true,
    isLandscape: false,
    isPortrait: true
  });

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      let type: DeviceType;
      let isMobile: boolean;
      let isWeb: boolean;

      // Device type detection based on screen width
      if (width < BREAKPOINTS.lg) {
        type = DeviceType.MOBILE;
        isMobile = true;
        isWeb = false;
      } else {
        type = DeviceType.WEB;
        isMobile = false;
        isWeb = true;
      }

      setDeviceInfo({
        type,
        width,
        height,
        isMobile,
        isWeb,
        isLandscape: width > height,
        isPortrait: height > width
      });
    };

    // Initial detection
    updateDeviceInfo();

    // Listen for resize events
    window.addEventListener('resize', updateDeviceInfo);

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
    };
  }, []);

  return deviceInfo;
}

// Utility function to get device type
export function getDeviceType(width: number): DeviceType {
  if (width < BREAKPOINTS.lg) {
    return DeviceType.MOBILE;
  } else {
    return DeviceType.WEB;
  }
}

// Utility function to check if device is mobile
export function isMobile(width: number): boolean {
  return width < BREAKPOINTS.lg;
}

// Utility function to check if device is web
export function isWeb(width: number): boolean {
  return width >= BREAKPOINTS.lg;
}

// Responsive layout component wrapper
export function withDeviceDetection<P extends object>(
  Component: React.ComponentType<P & { deviceInfo: DeviceInfo }>
) {
  return function DeviceAwareComponent(props: P) {
    const deviceInfo = useDeviceDetection();
    return <Component {...props} deviceInfo={deviceInfo} />;
  };
}

// Conditional rendering utility
export function renderByDevice<T>(
  deviceInfo: DeviceInfo,
  options: {
    mobile?: T;
    web?: T;
    default?: T;
  }
): T | undefined {
  if (deviceInfo.isMobile && options.mobile !== undefined) {
    return options.mobile;
  }
  if (deviceInfo.isWeb && options.web !== undefined) {
    return options.web;
  }
  return options.default;
}

// CSS class utilities for responsive design
export function getResponsiveClasses(deviceInfo: DeviceInfo, classes: {
  mobile?: string;
  web?: string;
  default?: string;
}): string {
  const classMap = {
    [DeviceType.MOBILE]: classes.mobile || classes.default || '',
    [DeviceType.WEB]: classes.web || classes.default || ''
  };

  return classMap[deviceInfo.type];
}

// Layout configuration based on device - simplified to 2 layouts
export const LAYOUT_CONFIG = {
  [DeviceType.MOBILE]: {
    maxWidth: 'max-w-full',
    padding: 'px-4',
    spacing: 'space-y-4',
    cardWidth: 'w-full',
    cardHeight: 'h-64',
    navigationButtons: {
      size: 'w-12 h-12',
      iconSize: 'w-6 h-6'
    }
  },
  [DeviceType.WEB]: {
    maxWidth: 'max-w-7xl',
    padding: 'px-8',
    spacing: 'space-y-8',
    cardWidth: 'w-80',
    cardHeight: 'h-[500px]',
    navigationButtons: {
      size: 'w-16 h-16',
      iconSize: 'w-8 h-8'
    }
  }
} as const; 