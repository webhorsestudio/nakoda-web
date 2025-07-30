"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Phone, Mail, ArrowUp, Facebook, Instagram, Twitter, Linkedin, Share2, Play, Apple, Sparkles, MapPin, Flag } from "lucide-react";

export default function Footer() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const indianCities = [
    "Agra", "Ahmedabad", "Aligarh", "Amritsar", "Bareilly", "Bengaluru", "Bhopal", "Bhubaneswar", 
    "Chandigarh", "Cuttack", "Dehradun", "Delhi", "Faridabad", "Gandhi Nagar", "Ghaziabad", "Gorakhpur", 
    "Greater Noida", "Gurugram", "Gwalior", "Haridwar", "Haldwani", "Hyderabad", "Indore", "Jabalpur", 
    "Jaipur", "Jammu", "Jhansi", "Kanpur", "Lucknow", "Ludhiana", "Meerut", "Mohali", "Moradabad", 
    "Mumbai", "Mysuru", "Nagpur", "Noida", "Patna", "Panchkula", "Prayagraj", "Pune", "Raipur", 
    "Roorkee", "Rudrapur", "Srinagar", "Tirupati", "Ujjain", "Varanasi", "Vijayawada", "Zirakpur", "New Delhi"
  ];

  const ourServices = [
    "Sofa Deep Cleaning", "Full Home Cleaning", "Commercial Space Cleaning", "Kitchen Deep Cleaning", 
    "Bathroom Deep Cleaning", "Carpet & Mattress Cleaning", "Chair Cleaning", "Glass Cleaning", 
    "Carpenter", "Home Painting", "Cleaning Services", "Pest Control", "Packers & Movers", 
    "Plumber", "Electrician", "AC Service Repair", "LED TV Repairing Near Me", "Washing Machine Repair Near Me", 
    "Fridge Repair Near Me", "RO Water Purifier Service Near Me", "Balloon Decoration", "Photography", 
    "CCTV & Smart locks", "Female Home Salon", "Laptop Repair", "Full Body Services", "Hair Studio", 
    "De-tan Bleach Scrub Services", "Clean-up Services", "Mani-pedi", "Female Spa Services", 
    "Pre Bridal Packages", "Nail Art at Home", "Makeup Services", "Facial & Clean-up", "Waxing", 
    "Best Sellers Salon Packages", "Rental Taxis", "Annual Contract Plans", "Elderly Home Service Plans", 
    "Airth AC Air Purifier", "Water Tank Cleaning"
  ];

  const quickLinks = [
    { title: "About Us", href: "#" },
    { title: "Nakoda Services", href: "#" },
    { title: "Corporate Services", href: "#" },
    { title: "Register as a Professional", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Privacy Policy", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      {/* Top Branding and Location Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {/* Left Side - Branding */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-700">100% Bhartiya Brand</span>
              <div className="w-5 h-3 bg-gradient-to-b from-orange-500 via-white to-green-600 rounded-sm relative shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* City Coverage Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Are Live In 50+ Cities
            </h2>
            
            {/* Cities List - Below the text */}
            <div className="text-sm text-gray-600 leading-relaxed">
              {indianCities.join(" • ")}
            </div>
            
            {/* Our Services Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                Our Services
              </h3>
              <div className="text-sm text-gray-600 leading-relaxed">
                {ourServices.join(" • ")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-200"></div>

      {/* Main Footer Content - 4 Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 - About Nakoda */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-gray-900">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">nakoda</span>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nakoda is India&apos;s Prominent Home Services Platform, launched in 2024 and currently functioning in 50+ cities in India. Our commitment is to deliver quality home and professional services with top-level professionals & excellent leading products.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:underline"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Information */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-gray-900">Facing issues? Reach us out at:</h3>
            <div className="bg-white rounded-xl p-6 space-y-3 shadow-sm border border-gray-200">
              <Link 
                href="/contact" 
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium block"
              >
                Contact Us
              </Link>
              <a 
                href="mailto:support@nakoda.com" 
                className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 block"
              >
                support@nakoda.com
              </a>
            </div>
          </div>

          {/* Column 4 - Mobile App & Social Media */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-gray-900">Experience the Nakoda Mobile App</h3>
            
            {/* App Download Buttons */}
            <div className="space-y-3">
              <a 
                href="#" 
                className="flex items-center space-x-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Play className="w-5 h-5" />
                <span className="text-sm font-medium">GET IT ON Google Play</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Apple className="w-5 h-5" />
                <span className="text-sm font-medium">Download on the App Store</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <p className="text-sm text-gray-600 font-medium">
                Show some love ❤️ on social media
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-200 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-600">
            Copyright 2024 @Nakoda | Developed by: Webhorse Studio
          </div>
        </div>
      </div>
    </footer>
  );
} 