import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`relative rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${className}`}>
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
} 