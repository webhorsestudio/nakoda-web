"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { ArrowLeft, MoreVertical } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

interface ServicePackage {
  id: string;
  title: string;
  configuration: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  image: string;
  selected: boolean;
}

const servicePackages: ServicePackage[] = [
  {
    id: '1',
    title: 'Deep Cleaning',
    configuration: 'Apartment 1 BHK Furnished',
    originalPrice: '₹4099',
    discountedPrice: '₹3074',
    discount: '25% OFF',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=120&fit=crop',
    selected: false
  },
  {
    id: '2',
    title: 'Deep Cleaning',
    configuration: 'Apartment 1 BHK Furnished',
    originalPrice: '₹4099',
    discountedPrice: '₹3074',
    discount: '25% OFF',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=120&h=120&fit=crop',
    selected: false
  },
  {
    id: '3',
    title: 'Kitchen Deep Clean',
    configuration: '2 BHK Semi-Furnished',
    originalPrice: '₹3599',
    discountedPrice: '₹2699',
    discount: '25% OFF',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=120&fit=crop',
    selected: false
  },
  {
    id: '4',
    title: 'Bathroom Sanitization',
    configuration: '3 BHK Fully Furnished',
    originalPrice: '₹2899',
    discountedPrice: '₹2174',
    discount: '25% OFF',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=120&h=120&fit=crop',
    selected: false
  },
  {
    id: '5',
    title: 'Window Cleaning',
    configuration: 'Villa 4 BHK Premium',
    originalPrice: '₹1899',
    discountedPrice: '₹1424',
    discount: '25% OFF',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=120&fit=crop',
    selected: false
  },
  {
    id: '6',
    title: 'Floor Polishing',
    configuration: 'Penthouse 5 BHK Luxury',
    originalPrice: '₹5999',
    discountedPrice: '₹4499',
    discount: '25% OFF',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=120&h=120&fit=crop',
    selected: false
  },
  {
    id: '7',
    title: 'Carpet Deep Clean',
    configuration: 'Studio Apartment',
    originalPrice: '₹1599',
    discountedPrice: '₹1199',
    discount: '25% OFF',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=120&fit=crop',
    selected: false
  }
];

function PackageSelectionContent() {
  const [mounted, setMounted] = useState(false);
  const [packages, setPackages] = useState<ServicePackage[]>(servicePackages);
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Calculate total price of selected packages
  const totalPrice = selectedPackages.reduce((sum, id) => {
    const pkg = packages.find((p) => p.id === id);
    return sum + (pkg ? parseInt(pkg.discountedPrice.replace('₹', '')) : 0);
  }, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBack = () => router.back();
  const handleAddPackage = (packageId: string) => {
    setSelectedPackages(prev => 
      prev.includes(packageId) 
        ? prev.filter(id => id !== packageId)
        : [...prev, packageId]
    );
  };
  const handleContinue = () => {
    // Navigate to Review Summary page
    router.push('/mobile/review');
  };
  const handleServiceDetails = (packageId: string) => {
    console.log('Service details clicked for package:', packageId);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="w-full md:max-w-sm md:mx-auto bg-white shadow-lg">
          <div className="animate-pulse">
            <div className="bg-white px-4 py-3">
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full md:max-w-sm md:mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white px-4 py-3 border-b border-gray-200 flex items-center justify-between z-30">
          <button onClick={handleBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors" suppressHydrationWarning>
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-900">Choose Package</h1>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" suppressHydrationWarning>
            <MoreVertical className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Package Cards */}
        <div className="px-4 py-4 pt-20 space-y-4 pb-24">
          <div className="space-y-3">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  {/* Package Image */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Package Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-base">{pkg.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{pkg.configuration}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-sm text-gray-400 line-through">{pkg.originalPrice}</span>
                      <span className="text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded">{pkg.discount}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold text-purple-600">{pkg.discountedPrice}</span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleServiceDetails(pkg.id)}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                          suppressHydrationWarning
                        >
                          Service Details
                        </button>
                        <button
                          onClick={() => handleAddPackage(pkg.id)}
                          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            selectedPackages.includes(pkg.id)
                              ? 'bg-red-100 text-red-600 hover:bg-red-200'
                              : 'bg-purple-600 text-white hover:bg-purple-700'
                          }`}
                          suppressHydrationWarning
                        >
                          {selectedPackages.includes(pkg.id) ? 'REMOVE' : 'ADD'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
          <div className="w-full md:max-w-sm md:mx-auto">
            <button
              onClick={handleContinue}
              className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg"
              suppressHydrationWarning
            >
              Continue - ₹{totalPrice}
            </button>
          </div>
        </div>

        {/* Bottom padding to account for fixed action bar */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}

export default function PackageSelectionPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <div className="w-full md:max-w-sm md:mx-auto bg-white shadow-lg">
          <div className="animate-pulse">
            <div className="bg-white px-4 py-3">
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
            </div>
          </div>
        </div>
      </div>
    }>
      <PackageSelectionContent />
    </Suspense>
  );
} 