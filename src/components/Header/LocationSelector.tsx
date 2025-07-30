import { MapPin, ChevronDown, Loader2 } from "lucide-react";
import LocationPicker from "./LocationPicker";

interface LocationSelectorProps {
  currentLocation: string;
  onLocationChange?: (location: string) => void;
  className?: string;
  isLoading?: boolean;
}

export default function LocationSelector({ currentLocation, onLocationChange, className = "", isLoading = false }: LocationSelectorProps) {
  if (isLoading) {
    return (
      <div className={`relative flex-1 max-w-xs ${className}`}>
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input 
          type="text" 
          value="Detecting location..."
          readOnly
          className="w-full pl-10 pr-8 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 text-sm cursor-pointer"
          placeholder="Select location"
          suppressHydrationWarning
        />
        <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 animate-spin" />
      </div>
    );
  }

  return (
    <LocationPicker 
      currentLocation={currentLocation}
      onLocationChange={onLocationChange || (() => {})}
      className={className}
    />
  );
} 