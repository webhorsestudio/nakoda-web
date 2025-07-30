import React, { useState } from 'react';
import { 
  Sparkles, 
  Wrench, 
  Paintbrush, 
  WashingMachine, 
  Hammer, 
  Droplets, 
  Truck, 
  MoreHorizontal,
  X
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ServiceItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

interface CleaningService {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    id: 'repairing',
    name: 'Repairing',
    icon: <Wrench className="w-6 h-6" />,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    id: 'painting',
    name: 'Painting',
    icon: <Paintbrush className="w-6 h-6" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    id: 'laundry',
    name: 'Laundry',
    icon: <WashingMachine className="w-6 h-6" />,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 'appliance',
    name: 'Appliance',
    icon: <Hammer className="w-6 h-6" />,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: <Droplets className="w-6 h-6" />,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    id: 'shifting',
    name: 'Shifting',
    icon: <Truck className="w-6 h-6" />,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  },
  {
    id: 'more',
    name: 'More',
    icon: <MoreHorizontal className="w-6 h-6" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  }
];

const cleaningServices: CleaningService[] = [
  {
    id: 'house-cleaning',
    name: 'House Cleaning',
    description: 'Complete home cleaning services',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: 'chair-cleaning',
    name: 'Chair Cleaning',
    description: 'Professional chair and furniture cleaning',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: 'glass-cleaning',
    name: 'Glass Cleaning',
    description: 'Window and glass surface cleaning',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: 'bathroom-deep-cleaning',
    name: 'Bathroom Deep Cleaning',
    description: 'Thorough bathroom sanitization',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: 'kitchen-cleaning',
    name: 'Kitchen Cleaning',
    description: 'Complete kitchen deep cleaning',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: 'floor-cleaning',
    name: 'Floor Cleaning',
    description: 'Professional floor cleaning services',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    description: 'Deep carpet and rug cleaning',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: 'sofa-cleaning',
    name: 'Sofa Cleaning',
    description: 'Professional sofa and upholstery cleaning',
    icon: <Sparkles className="w-5 h-5" />
  }
];

interface ServicesGridProps {
  onServiceClick?: (serviceId: string) => void;
}

export default function ServicesGrid({ onServiceClick }: ServicesGridProps) {
  const router = useRouter();
  const [showCleaningModal, setShowCleaningModal] = useState(false);

  const handleServiceClick = (serviceId: string) => {
    onServiceClick?.(serviceId);
    
    // Show cleaning modal for cleaning service
    if (serviceId === 'cleaning') {
      setShowCleaningModal(true);
    }
    // Add more service routes as needed
    // else if (serviceId === 'repairing') {
    //   router.push('/mobile/repairing');
    // }
  };

  const handleCleaningServiceSelect = (serviceId: string, serviceName: string) => {
    setShowCleaningModal(false);
    // Navigate to cleaning page with selected service
    router.push(`/mobile/cleaning?service=${serviceId}&name=${encodeURIComponent(serviceName)}`);
  };

  const closeModal = () => {
    setShowCleaningModal(false);
  };

  return (
    <>
      <div className="px-4 py-3 bg-white">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-900">Services</h3>
          <button className="text-sm text-purple-600 font-medium" suppressHydrationWarning>See All</button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-4 gap-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className="flex flex-col items-center space-y-2 group"
              suppressHydrationWarning
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                <div className={service.color}>
                  {service.icon}
                </div>
              </div>

              {/* Service Name */}
              <span className="text-xs font-medium text-gray-700 text-center">
                {service.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Cleaning Services Modal */}
      {showCleaningModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">Select Cleaning Service</h3>
              <button 
                onClick={closeModal}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                suppressHydrationWarning
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 max-h-[60vh] overflow-y-auto">
              <div className="space-y-3">
                {cleaningServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleCleaningServiceSelect(service.id, service.name)}
                    className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
                    suppressHydrationWarning
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <div className="text-purple-600">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 