import { ReactNode } from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon?: ReactNode;
}

export default function ServiceCard({ title, description, image, icon }: ServiceCardProps) {
  return (
    <div className="glass-card flex flex-col items-center text-center hover:shadow-2xl transition-shadow cursor-pointer">
      {icon && <div className="mb-2">{icon}</div>}
      <Image src={image} alt={title} width={80} height={80} className="mb-4 rounded-xl object-cover" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
} 