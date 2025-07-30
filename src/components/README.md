# Components Structure

This directory contains all React components organized by feature and functionality.

## 📁 Directory Structure

```
src/components/
├── Header/                    # Header-related components
│   ├── LocationSelector.tsx   # Location picker component
│   ├── SearchBar.tsx         # Search input component
│   ├── NavigationLinks.tsx   # Navigation menu links
│   ├── UserActions.tsx       # User profile and cart actions
│   ├── MobileMenu.tsx        # Mobile navigation menu
│   └── index.ts              # Export all header components
├── Header.tsx                # Main header component
├── Footer.tsx                # Footer component
├── GlassCard.tsx             # Glassmorphism card component
├── LayoutWrapper.tsx         # Layout wrapper with glass effect
├── SectionWrapper.tsx        # Section wrapper component
├── ScrollToTop.tsx           # Scroll to top button
├── ContactForm.tsx           # Contact form component
├── ServiceCard.tsx           # Service card component
├── TestimonialSlider.tsx     # Testimonial slider component
└── ui/                       # Shadcn UI components
    ├── button.tsx
    └── sheet.tsx
```

## 🎯 Header Components

### LocationSelector
- **Purpose**: Handles location selection and display
- **Features**: 
  - Automatic location detection
  - Dropdown indicator
  - Click to change location
- **Props**: `currentLocation`, `onLocationChange`, `className`

### SearchBar
- **Purpose**: Search functionality
- **Features**:
  - Search icon
  - Placeholder text
  - Controlled input
- **Props**: `searchQuery`, `onSearchChange`, `placeholder`, `className`

### NavigationLinks
- **Purpose**: Desktop navigation menu
- **Features**:
  - Responsive design (hidden on mobile)
  - Hover effects
  - Link management
- **Props**: `className`

### UserActions
- **Purpose**: User-related actions (cart, profile)
- **Features**:
  - Shopping cart icon
  - User profile icon
  - Hover effects
- **Props**: `className`

### MobileMenu
- **Purpose**: Mobile navigation menu
- **Features**:
  - Collapsible menu
  - Mobile-optimized layout
  - Location and search integration
- **Props**: `isOpen`, `currentLocation`, `searchQuery`, `onSearchChange`, `onLocationChange`

## 🔧 Usage Examples

### Basic Header Usage
```tsx
import Header from "@/components/Header";

export default function Layout() {
  return (
    <div>
      <Header />
      {/* Your content */}
    </div>
  );
}
```

### Using Individual Components
```tsx
import { LocationSelector, SearchBar } from "@/components/Header";

export default function CustomHeader() {
  const [location, setLocation] = useState("Mumbai");
  const [search, setSearch] = useState("");

  return (
    <div className="flex gap-4">
      <LocationSelector 
        currentLocation={location}
        onLocationChange={setLocation}
      />
      <SearchBar 
        searchQuery={search}
        onSearchChange={setSearch}
      />
    </div>
  );
}
```

## 🎨 Styling

All components use Tailwind CSS with:
- **Responsive design**: Mobile-first approach
- **Consistent spacing**: Using Tailwind's spacing scale
- **Hover effects**: Smooth transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🔄 State Management

- **Location state**: Managed by LocationService singleton
- **Search state**: Local component state
- **Mobile menu**: Local component state
- **Props**: Passed down from parent components

## 📱 Responsive Behavior

- **Desktop**: Full navigation with location and search
- **Tablet**: Collapsed navigation, visible search
- **Mobile**: Hamburger menu with collapsible navigation

## 🚀 Performance

- **Lazy loading**: Components load only when needed
- **Memoization**: React.memo for performance optimization
- **Bundle splitting**: Components can be code-split
- **Image optimization**: Next.js Image component usage 