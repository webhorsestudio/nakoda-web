"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isMobileRoute = pathname?.startsWith('/mobile');

  return (
    <>
      {/* Web Layout - Header and Footer only for web pages, not mobile routes */}
      {!isMobileRoute && <Header />}
      <main>{children}</main>
      {!isMobileRoute && <Footer />}
      {!isMobileRoute && <ScrollToTop />}
    </>
  );
} 