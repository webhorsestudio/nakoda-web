import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import GlassCard from "@/components/GlassCard";
import HeroSection from "@/components/Hero/HeroSection";
import ServiceMarketplace from "@/components/ServiceMarketplace";
import { ArrowUpRight, Smile, Search, Users, Truck, Briefcase, Home, Wrench, Star } from "lucide-react";
import LocationService, { cityMapping } from "@/lib/locationService";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const cityName = cityMapping[city as keyof typeof cityMapping] || 'Mumbai';
  
  return {
    title: `Nakoda Urban Services in ${cityName} - Professional Services`,
    description: `Find professional services in ${cityName}. We deliver quality, innovation, and results for all your urban service needs.`,
    keywords: `${cityName}, urban services, professional services, home services, ${cityName.toLowerCase()} services`,
    openGraph: {
      title: `Nakoda Urban Services in ${cityName}`,
      description: `Professional services in ${cityName} - Quality, innovation, and results.`,
      url: `https://nakoda-ui.com/${city}`,
      siteName: 'Nakoda Urban Services',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Nakoda Urban Services in ${cityName}`,
      description: `Professional services in ${cityName} - Quality, innovation, and results.`,
    },
  };
}

// Generate static params for all cities
export async function generateStaticParams() {
  return Object.keys(cityMapping).map((city) => ({
    city: city,
  }));
}

export default async function CityPage({ params }: CityPageProps) {
  const { city } = await params;
  const cityName = cityMapping[city as keyof typeof cityMapping] || 'Mumbai';
  const locationService = LocationService.getInstance();
  const cityLocations = locationService.getAvailableLocations().filter(location => 
    location.includes(cityName)
  );

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Service Marketplace */}
      <ServiceMarketplace />

      {/* Service Cards Grid - Responsive Layout */}
      <SectionWrapper className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Shipping + Freight - Top Left */}
            <div className="animate-fade-in-up">
              <GlassCard className="relative h-80 rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-400/30 backdrop-blur-sm"></div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-5 right-5 w-20 h-20 bg-blue-300 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-5 left-5 w-16 h-16 bg-cyan-300 rounded-full blur-xl"></div>
                </div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/30 shadow-lg">Shipping</span>
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 shadow-lg" suppressHydrationWarning>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Shipping + Freight</h3>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Join Us Card - Top Middle */}
            <div className="animate-fade-in-up-delay">
              <GlassCard className="relative h-80 rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/20"></div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <Smile className="w-10 h-10 text-white" />
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 shadow-lg" suppressHydrationWarning>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight">
                      Ready to turn your skills into income?
                    </h3>
                    <button 
                      className="bg-white text-gray-800 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      suppressHydrationWarning
                    >
                      Join us
                    </button>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Handyman Services - Top Right */}
            <div className="animate-fade-in-up-delay-2">
              <GlassCard className="relative h-80 rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300/30 to-red-400/30 backdrop-blur-sm"></div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-5 right-5 w-20 h-20 bg-orange-300 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-5 left-5 w-16 h-16 bg-red-300 rounded-full blur-xl"></div>
                </div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/30 shadow-lg">Wood</span>
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 shadow-lg" suppressHydrationWarning>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Handyman Services</h3>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Hire Top Taskers - Bottom Left */}
            <div className="animate-fade-in-up-delay-3">
              <GlassCard className="relative h-80 rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-500/20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 to-pink-400/30 backdrop-blur-sm"></div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-5 right-5 w-20 h-20 bg-purple-300 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-5 left-5 w-16 h-16 bg-pink-300 rounded-full blur-xl"></div>
                </div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div></div>
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 shadow-lg" suppressHydrationWarning>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Hire top tasker</h3>
                    <p className="text-white/80 text-sm mb-6">{/* Hire the Best Taskers for Your Needs. */}</p>
                    
                    {/* Team Avatars */}
                    <div className="flex -space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">P</span>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">M</span>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">S</span>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">J</span>
                      </div>
                    </div>
                    
                    <div className="text-white/90 text-xs font-medium">
                      Preston, Marry, Sandy, John
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Office Work - Bottom Right */}
            <div className="animate-fade-in-up-delay-4">
              <GlassCard className="relative h-80 rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-500/20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-300/30 to-teal-400/30 backdrop-blur-sm"></div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-5 right-5 w-20 h-20 bg-green-300 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-5 left-5 w-16 h-16 bg-teal-300 rounded-full blur-xl"></div>
                </div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/30 shadow-lg">Administration</span>
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 shadow-lg" suppressHydrationWarning>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Office work</h3>
                    <p className="text-white/80 text-sm mb-6">{/* Efficiency Starts Here: Elevate Your Office Work. */}</p>
                    <button 
                      className="bg-white text-gray-800 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      suppressHydrationWarning
                    >
                      Get help now
                    </button>
                  </div>
                </div>
              </GlassCard>
            </div>

          </div>
        </div>
      </SectionWrapper>
    </>
  );
} 