// Mock location data for demonstration
export const mockLocations = [
  "Dadar, Mumbai",
  "Andheri, Mumbai", 
  "Bandra, Mumbai",
  "Worli, Mumbai",
  "Juhu, Mumbai",
  "Powai, Mumbai",
  "Kurla, Mumbai",
  "Ghatkopar, Mumbai"
];

// City mapping for SEO-friendly URLs
export const cityMapping = {
  'mumbai': 'Mumbai',
  'delhi': 'Delhi',
  'bangalore': 'Bangalore',
  'chennai': 'Chennai',
  'kolkata': 'Kolkata',
  'hyderabad': 'Hyderabad',
  'pune': 'Pune',
  'ahmedabad': 'Ahmedabad'
};

// Location coordinates for major cities
export const cityCoordinates = {
  'Mumbai': { lat: 19.0760, lng: 72.8777 },
  'Delhi': { lat: 28.7041, lng: 77.1025 },
  'Bangalore': { lat: 12.9716, lng: 77.5946 },
  'Chennai': { lat: 13.0827, lng: 80.2707 },
  'Kolkata': { lat: 22.5726, lng: 88.3639 },
  'Hyderabad': { lat: 17.3850, lng: 78.4867 },
  'Pune': { lat: 18.5204, lng: 73.8567 },
  'Ahmedabad': { lat: 23.0225, lng: 72.5714 }
};

export interface Location {
  id: string;
  name: string;
  city: string;
  state: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export class LocationService {
  private static instance: LocationService;
  private currentLocation: string = "Dadar, Mumbai";
  private isInitialized: boolean = false;
  private geolocationSupported: boolean = false;

  private constructor() {
    // Check if geolocation is supported
    this.geolocationSupported = typeof navigator !== 'undefined' && 'geolocation' in navigator;
  }

  static getInstance(): LocationService {
    if (!LocationService.instance) {
      LocationService.instance = new LocationService();
    }
    return LocationService.instance;
  }

  // Get city from URL path
  getCityFromPath(path: string): string {
    const pathSegments = path.split('/');
    const citySlug = pathSegments[1];
    
    if (citySlug && cityMapping[citySlug as keyof typeof cityMapping]) {
      return cityMapping[citySlug as keyof typeof cityMapping];
    }
    
    return 'Mumbai'; // Default city
  }

  // Get location based on city
  getLocationByCity(city: string): string {
    const cityLocations = mockLocations.filter(location => 
      location.includes(city)
    );
    
    if (cityLocations.length > 0) {
      return cityLocations[0]; // Return first location for consistency
    }
    
    return "Dadar, Mumbai"; // Default location
  }

  // Calculate distance between two coordinates
  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  // Find nearest city based on coordinates
  private findNearestCity(lat: number, lng: number): string {
    let nearestCity = 'Mumbai';
    let minDistance = Infinity;

    for (const [city, coords] of Object.entries(cityCoordinates)) {
      const distance = this.calculateDistance(lat, lng, coords.lat, coords.lng);
      if (distance < minDistance) {
        minDistance = distance;
        nearestCity = city;
      }
    }

    return nearestCity;
  }

  // Real geolocation detection
  async detectLocation(): Promise<string> {
    if (!this.geolocationSupported) {
      console.warn('Geolocation not supported, using default location');
      return this.getLocationByCity('Mumbai');
    }

    try {
      const position = await this.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      
      // Find nearest city based on coordinates
      const nearestCity = this.findNearestCity(latitude, longitude);
      const location = this.getLocationByCity(nearestCity);
      
      this.currentLocation = location;
      return location;
    } catch (error) {
      console.warn('Geolocation failed, using default location:', error);
      return this.getLocationByCity('Mumbai');
    }
  }

  // Wrapper for getCurrentPosition with timeout
  private getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      const options = {
        enableHighAccuracy: true,
        timeout: 10000, // 10 seconds
        maximumAge: 300000 // 5 minutes
      };

      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  // Detect location based on URL (for SSR)
  async detectLocationFromURL(path: string): Promise<string> {
    const city = this.getCityFromPath(path);
    const location = this.getLocationByCity(city);
    this.currentLocation = location;
    return location;
  }

  // Initialize location (only once)
  async initializeLocation(path?: string): Promise<string> {
    if (this.isInitialized) {
      return this.currentLocation;
    }

    let location: string;

    if (path && path !== '/' && path.split('/').length > 1) {
      // Use URL-based location for SSR
      location = await this.detectLocationFromURL(path);
    } else {
      // Use geolocation for client-side
      location = await this.detectLocation();
    }

    this.isInitialized = true;
    return location;
  }

  getCurrentLocation(): string {
    return this.currentLocation;
  }

  setCurrentLocation(location: string): void {
    this.currentLocation = location;
  }

  // Get all available locations
  getAvailableLocations(): string[] {
    return mockLocations;
  }

  // Search locations
  searchLocations(query: string): string[] {
    return mockLocations.filter(location => 
      location.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Get SEO-friendly city slug
  getCitySlug(city: string): string {
    return city.toLowerCase();
  }

  // Get city name from location string
  getCityFromLocation(location: string): string {
    return location.split(', ')[1] || 'Mumbai';
  }

  // Check if geolocation is supported
  isGeolocationSupported(): boolean {
    return this.geolocationSupported;
  }

  // Reset initialization (for testing)
  reset(): void {
    this.isInitialized = false;
  }
}

export default LocationService; 