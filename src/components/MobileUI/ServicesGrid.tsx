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

interface SubService {
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

const subServices: Record<string, SubService[]> = {
  cleaning: [
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
  ],
  repairing: [
    {
      id: 'electrical-repair',
      name: 'Electrical Repair',
      description: 'Professional electrical repair services',
      icon: <Wrench className="w-5 h-5" />
    },
    {
      id: 'plumbing-repair',
      name: 'Plumbing Repair',
      description: 'Expert plumbing repair and maintenance',
      icon: <Wrench className="w-5 h-5" />
    },
    {
      id: 'carpentry-repair',
      name: 'Carpentry Repair',
      description: 'Professional carpentry and woodwork repair',
      icon: <Wrench className="w-5 h-5" />
    },
    {
      id: 'appliance-repair',
      name: 'Appliance Repair',
      description: 'Home appliance repair and maintenance',
      icon: <Wrench className="w-5 h-5" />
    },
    {
      id: 'furniture-repair',
      name: 'Furniture Repair',
      description: 'Professional furniture repair and restoration',
      icon: <Wrench className="w-5 h-5" />
    },
    {
      id: 'lock-repair',
      name: 'Lock Repair',
      description: 'Lock and security system repair',
      icon: <Wrench className="w-5 h-5" />
    }
  ],
  painting: [
    {
      id: 'interior-painting',
      name: 'Interior Painting',
      description: 'Professional interior wall painting',
      icon: <Paintbrush className="w-5 h-5" />
    },
    {
      id: 'exterior-painting',
      name: 'Exterior Painting',
      description: 'House exterior and wall painting',
      icon: <Paintbrush className="w-5 h-5" />
    },
    {
      id: 'furniture-painting',
      name: 'Furniture Painting',
      description: 'Furniture refinishing and painting',
      icon: <Paintbrush className="w-5 h-5" />
    },
    {
      id: 'texture-painting',
      name: 'Texture Painting',
      description: 'Specialized texture and design painting',
      icon: <Paintbrush className="w-5 h-5" />
    },
    {
      id: 'commercial-painting',
      name: 'Commercial Painting',
      description: 'Commercial building painting services',
      icon: <Paintbrush className="w-5 h-5" />
    }
  ],
  laundry: [
    {
      id: 'dry-cleaning',
      name: 'Dry Cleaning',
      description: 'Professional dry cleaning services',
      icon: <WashingMachine className="w-5 h-5" />
    },
    {
      id: 'wash-iron',
      name: 'Wash & Iron',
      description: 'Complete wash and ironing services',
      icon: <WashingMachine className="w-5 h-5" />
    },
    {
      id: 'curtain-cleaning',
      name: 'Curtain Cleaning',
      description: 'Professional curtain and drapery cleaning',
      icon: <WashingMachine className="w-5 h-5" />
    },
    {
      id: 'bedding-cleaning',
      name: 'Bedding Cleaning',
      description: 'Bedding and linen cleaning services',
      icon: <WashingMachine className="w-5 h-5" />
    },
    {
      id: 'shoe-cleaning',
      name: 'Shoe Cleaning',
      description: 'Professional shoe cleaning and polishing',
      icon: <WashingMachine className="w-5 h-5" />
    }
  ],
  appliance: [
    {
      id: 'ac-repair',
      name: 'AC Repair',
      description: 'Air conditioning repair and maintenance',
      icon: <Hammer className="w-5 h-5" />
    },
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      description: 'Refrigerator and freezer repair',
      icon: <Hammer className="w-5 h-5" />
    },
    {
      id: 'washing-machine-repair',
      name: 'Washing Machine Repair',
      description: 'Washing machine and dryer repair',
      icon: <Hammer className="w-5 h-5" />
    },
    {
      id: 'microwave-repair',
      name: 'Microwave Repair',
      description: 'Microwave and oven repair services',
      icon: <Hammer className="w-5 h-5" />
    },
    {
      id: 'tv-repair',
      name: 'TV Repair',
      description: 'Television and electronics repair',
      icon: <Hammer className="w-5 h-5" />
    }
  ],
  plumbing: [
    {
      id: 'pipe-repair',
      name: 'Pipe Repair',
      description: 'Professional pipe repair and replacement',
      icon: <Droplets className="w-5 h-5" />
    },
    {
      id: 'faucet-repair',
      name: 'Faucet Repair',
      description: 'Faucet and tap repair services',
      icon: <Droplets className="w-5 h-5" />
    },
    {
      id: 'toilet-repair',
      name: 'Toilet Repair',
      description: 'Toilet repair and installation',
      icon: <Droplets className="w-5 h-5" />
    },
    {
      id: 'drain-cleaning',
      name: 'Drain Cleaning',
      description: 'Professional drain cleaning services',
      icon: <Droplets className="w-5 h-5" />
    },
    {
      id: 'water-heater-repair',
      name: 'Water Heater Repair',
      description: 'Water heater repair and maintenance',
      icon: <Droplets className="w-5 h-5" />
    }
  ],
  shifting: [
    {
      id: 'home-shifting',
      name: 'Home Shifting',
      description: 'Complete home relocation services',
      icon: <Truck className="w-5 h-5" />
    },
    {
      id: 'office-shifting',
      name: 'Office Shifting',
      description: 'Office and commercial space relocation',
      icon: <Truck className="w-5 h-5" />
    },
    {
      id: 'furniture-shifting',
      name: 'Furniture Shifting',
      description: 'Furniture moving and placement',
      icon: <Truck className="w-5 h-5" />
    },
    {
      id: 'packing-unpacking',
      name: 'Packing & Unpacking',
      description: 'Professional packing and unpacking services',
      icon: <Truck className="w-5 h-5" />
    },
    {
      id: 'storage-shifting',
      name: 'Storage Shifting',
      description: 'Storage unit moving and organization',
      icon: <Truck className="w-5 h-5" />
    }
  ],
  more: [
    {
      id: 'pest-control',
      name: 'Pest Control',
      description: 'Professional pest control services',
      icon: <MoreHorizontal className="w-5 h-5" />
    },
    {
      id: 'gardening',
      name: 'Gardening',
      description: 'Garden maintenance and landscaping',
      icon: <MoreHorizontal className="w-5 h-5" />
    },
    {
      id: 'security-installation',
      name: 'Security Installation',
      description: 'Security system installation and maintenance',
      icon: <MoreHorizontal className="w-5 h-5" />
    },
    {
      id: 'carpet-installation',
      name: 'Carpet Installation',
      description: 'Carpet and flooring installation',
      icon: <MoreHorizontal className="w-5 h-5" />
    },
    {
      id: 'deep-cleaning',
      name: 'Deep Cleaning',
      description: 'Specialized deep cleaning services',
      icon: <MoreHorizontal className="w-5 h-5" />
    }
  ]
};

interface ServicesGridProps {
  onServiceClick?: (serviceId: string) => void;
}

export default function ServicesGrid({ onServiceClick }: ServicesGridProps) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleServiceClick = (serviceId: string) => {
    onServiceClick?.(serviceId);
    
    // Show modal for all services
    setSelectedService(serviceId);
    setShowModal(true);
  };

  const handleSubServiceSelect = (serviceId: string, serviceName: string) => {
    setShowModal(false);
    // Navigate to cleaning page with selected service (using cleaning page for all services)
    router.push(`/mobile/cleaning?service=${serviceId}&name=${encodeURIComponent(serviceName)}`);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const getServiceData = (serviceId: string) => {
    return services.find(service => service.id === serviceId);
  };

  const getSubServices = (serviceId: string) => {
    return subServices[serviceId] || [];
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

      {/* Service Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">
                Select {getServiceData(selectedService)?.name} Service
              </h3>
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
                {getSubServices(selectedService).map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleSubServiceSelect(service.id, service.name)}
                    className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
                    suppressHydrationWarning
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full ${getServiceData(selectedService)?.bgColor} flex items-center justify-center`}>
                        <div className={getServiceData(selectedService)?.color}>
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