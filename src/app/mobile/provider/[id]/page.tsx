"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Bookmark, Star, MapPin, MessageCircle, Calendar, Heart } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';

interface ServiceProvider {
  id: string;
  name: string;
  service: string;
  price: string;
  rating: string;
  reviews: string;
  location: string;
  about: string;
  images: string[];
  category: string;
}

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  likes: number;
  timeAgo: string;
  profileImage: string;
}

const serviceProvider: ServiceProvider = {
  id: '1',
  name: 'Priya Sharma',
  service: 'House Cleaning',
  price: '₹1,200',
  rating: '4.8',
  reviews: '4,479 reviews',
  location: '255 MG Road, Mumbai',
  category: 'Cleaning',
  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  images: [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop'
  ]
};

const reviews: Review[] = [
  {
    id: '1',
    name: 'Lauralee Quintero',
    rating: 5,
    text: 'Awesome! this is what i was looking for. i recommend to everyone ❤️❤️❤️',
    likes: 724,
    timeAgo: '3 weeks ago',
    profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'Clinton Mcclure',
    rating: 4,
    text: 'The workers are very professional and the results are very satisfying! I like it very much! 💯💯💯',
    likes: 783,
    timeAgo: '1 weeks ago',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'Chieko Chute',
    rating: 5,
    text: 'This is the first time I\'ve used his services, and the results were amazing! 👍👍👍',
    likes: 597,
    timeAgo: '2 weeks ago',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
  }
];

export default function ServiceProviderPage() {
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullAbout, setShowFullAbout] = useState(false);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState('All');
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleMessage = () => {
    console.log('Message clicked');
  };

  const handleBookNow = () => {
    console.log('Book Now clicked');
    router.push('/mobile/package');
  };

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  const toggleAbout = () => {
    setShowFullAbout(!showFullAbout);
  };

  const handleLikeReview = (reviewId: string) => {
    console.log('Liked review:', reviewId);
  };

  const filteredReviews = selectedRatingFilter === 'All' 
    ? reviews 
    : reviews.filter(review => review.rating === parseInt(selectedRatingFilter));

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
        {/* Main Image Section */}
        <div className="relative h-80 bg-pink-500">
          {/* Back Button */}
          <button 
            onClick={handleBack}
            className="absolute top-4 left-4 z-10 p-2 rounded-full bg-blue-900/90 backdrop-blur-sm hover:bg-blue-900 transition-colors"
            suppressHydrationWarning
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          {/* Bookmark Button */}
          <button 
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-blue-900/90 backdrop-blur-sm hover:bg-blue-900 transition-colors"
            suppressHydrationWarning
          >
            <Bookmark className="w-5 h-5 text-white fill-current" />
          </button>

          {/* Main Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={serviceProvider.images[currentImageIndex]} 
              alt={serviceProvider.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {serviceProvider.images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleImageChange(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-purple-600' : 'bg-white/60'
                }`}
                suppressHydrationWarning
              />
            ))}
          </div>
        </div>

        {/* Service Details Section */}
        <div className="px-4 py-4 bg-white">
          {/* Service Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{serviceProvider.service}</h1>

          {/* Provider Name & Rating */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-lg font-semibold text-purple-600">{serviceProvider.name}</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{serviceProvider.rating}</span>
              <span className="text-sm text-gray-500">({serviceProvider.reviews})</span>
            </div>
          </div>

          {/* Category Tag */}
          <div className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
            {serviceProvider.category}
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-600">{serviceProvider.location}</span>
          </div>

          {/* Price */}
          <div className="mb-4">
            <span className="text-lg text-black">Starts from</span>
            <span className="text-2xl font-bold text-purple-600 ml-1">{serviceProvider.price}</span>
          </div>
        </div>

        {/* About Section */}
        <div className="px-4 py-4 bg-white border-t border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-3">About me</h2>
          <div className="text-sm text-gray-600 leading-relaxed">
            {showFullAbout ? (
              <div>
                {serviceProvider.about}
                <button 
                  onClick={toggleAbout}
                  className="text-purple-600 font-medium ml-1"
                  suppressHydrationWarning
                >
                  Read less...
                </button>
              </div>
            ) : (
              <div>
                {serviceProvider.about.substring(0, 120)}...
                <button 
                  onClick={toggleAbout}
                  className="text-purple-600 font-medium ml-1"
                  suppressHydrationWarning
                >
                  Read more...
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Photos & Videos Section */}
        <div className="px-4 py-4 bg-white border-t border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-gray-900">Photos & Videos</h2>
            <button className="text-purple-600 text-sm font-medium" suppressHydrationWarning>
              See All
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {serviceProvider.images.slice(0, 6).map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                <img 
                  src={image} 
                  alt={`Photo ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reviews & Rating Section */}
        <div className="px-4 py-4 bg-white border-t border-gray-100">
          {/* Reviews Summary */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">{serviceProvider.rating}</span>
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">({serviceProvider.reviews})</span>
            </div>
            <button className="text-purple-600 text-sm font-medium" suppressHydrationWarning>
              See All
            </button>
          </div>

          {/* Rating Filters */}
          <div className="flex space-x-2 mb-4">
            {['All', '5', '4', '3', '2'].map((rating) => (
              <button
                key={rating}
                onClick={() => setSelectedRatingFilter(rating)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedRatingFilter === rating
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                suppressHydrationWarning
              >
                {rating === 'All' ? '★ All' : `★ ${rating}`}
              </button>
            ))}
          </div>

          {/* Individual Reviews */}
          <div className="space-y-4">
            {filteredReviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                <div className="flex items-start space-x-3">
                  {/* Profile Image */}
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <img 
                      src={review.profileImage} 
                      alt={review.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Review Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-gray-900">{review.name}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-purple-600 fill-current" />
                        <span className="text-sm text-gray-600">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{review.text}</p>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleLikeReview(review.id)}
                        className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
                        suppressHydrationWarning
                      >
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">{review.likes}</span>
                      </button>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{review.timeAgo}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <div className="w-full md:max-w-sm md:mx-auto flex space-x-3">
            <button 
              onClick={handleMessage}
              className="flex-1 bg-purple-100 text-purple-600 py-3 px-4 rounded-lg font-medium hover:bg-purple-200 transition-colors"
              suppressHydrationWarning
            >
              <MessageCircle className="w-5 h-5 inline mr-2" />
              Message
            </button>
            <button 
              onClick={handleBookNow}
              className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              suppressHydrationWarning
            >
              <Calendar className="w-5 h-5 inline mr-2" />
              Book Now
            </button>
          </div>
        </div>

        {/* Bottom padding to account for fixed action bar */}
        <div className="h-20"></div>
      </div>
    </div>
  );
} 