import LayoutWrapper from "@/components/LayoutWrapper";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <p className="text-lg text-gray-600 text-center">Explore our comprehensive range of professional services.</p>
        </div>
      </div>
    </>
  );
} 