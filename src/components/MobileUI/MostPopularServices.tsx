import React, { useState } from 'react';
import { Star, Bookmark } from 'lucide-react';

interface PopularService {
  id: string;
  providerName: string;
  serviceTitle: string;
  price: string;
  rating: string;
  reviews: string;
  image: string;
  category: string;
}

const popularServices: PopularService[] = [
  {
    id: '1',
    providerName: 'Kylee Danford',
    serviceTitle: 'House Cleaning',
    price: '₹25',
    rating: '4.8',
    reviews: '8,289 reviews',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop',
    category: 'cleaning'
  },
  {
    id: '2',
    providerName: 'Alfonzo Schuessler',
    serviceTitle: 'Floor Cleaning',
    price: '₹20',
    rating: '4.9',
    reviews: '6,182 reviews',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=80&h=80&fit=crop',
    category: 'cleaning'
  },
  {
    id: '3',
    providerName: 'Sanjuanita Ordonez',
    serviceTitle: 'Washing Clothes',
    price: '₹22',
    rating: '4.7',
    reviews: '7,938 reviews',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop',
    category: 'cleaning'
  },
  {
    id: '4',
    providerName: 'Freida Varnes',
    serviceTitle: 'Bathroom Cleaning',
    price: '₹24',
    rating: '4.9',
    reviews: '6,182 reviews',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=80&h=80&fit=crop',
    category: 'cleaning'
  }
];

const filterTabs = ['All', 'Cleaning', 'Repairing', 'Painting'];

interface MostPopularServicesProps {
  onServiceClick?: (serviceId: string) => void;
}

export default function MostPopularServices({ onServiceClick }: MostPopularServicesProps) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filteredServices = selectedFilter === 'All' 
    ? popularServices 
    : popularServices.filter(service => service.category === selectedFilter.toLowerCase());

  return (
    <div className="px-4 py-3 bg-white">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-900">Most Popular Services</h3>
        <button className="text-sm text-purple-600 font-medium" suppressHydrationWarning>See All</button>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 mb-4 overflow-x-auto">
        {filterTabs.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
              selectedFilter === filter
                ? 'bg-purple-600 text-white'
                : 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-50'
            }`}
            suppressHydrationWarning
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Services List */}
      <div className="space-y-3">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            onClick={() => onServiceClick?.(service.id)}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer relative"
            suppressHydrationWarning
          >
            {/* Bookmark Icon */}
            <button className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition-colors">
              <Bookmark className="w-5 h-5 text-purple-600" />
            </button>

            <div className="flex items-center space-x-4">
              {/* Service Image */}
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
                <img 
                  src={service.image} 
                  alt={service.serviceTitle} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Details */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-base">{service.providerName}</h4>
                <p className="text-sm text-gray-600 mt-1">{service.serviceTitle}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{service.rating}</span>
                    </div>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{service.reviews}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-purple-600">{service.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 