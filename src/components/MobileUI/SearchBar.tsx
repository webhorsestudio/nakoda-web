import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onFilter?: () => void;
}

export default function SearchBar({ 
  placeholder = "Search", 
  onSearch, 
  onFilter 
}: SearchBarProps) {
  return (
    <div className="px-4 py-3 bg-white">
      <div className="flex items-center space-x-3">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
            onChange={(e) => onSearch?.(e.target.value)}
            suppressHydrationWarning
          />
        </div>

        {/* Filter Button */}
        <button 
          onClick={onFilter}
          className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center"
          suppressHydrationWarning
        >
          <Filter className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
} 