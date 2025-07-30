import LocationSelector from "./LocationSelector";
import AnimatedSearchBar from "./AnimatedSearchBar";

interface MobileMenuProps {
  isOpen: boolean;
  currentLocation: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onLocationChange?: (location: string) => void;
  isLoading?: boolean;
}

export default function MobileMenu({ 
  isOpen, 
  currentLocation, 
  searchQuery, 
  onSearchChange, 
  onLocationChange,
  isLoading = false
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-gray-200 bg-white mt-4">
      <div className="px-4 py-4 space-y-4">
        {/* Mobile Location & Search */}
        <div className="space-y-3">
          <LocationSelector 
            currentLocation={currentLocation}
            onLocationChange={onLocationChange}
            isLoading={isLoading}
          />
          
          <AnimatedSearchBar 
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
          />
        </div>
      </div>
    </div>
  );
} 