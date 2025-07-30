import { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  
  return {
    title: `${slug} Services - Nakoda Urban Services`,
    description: `Professional ${slug} services. We deliver quality, innovation, and results.`,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">{slug} Services</h1>
          <p className="text-lg text-gray-600 text-center">Professional {slug} services for your needs.</p>
        </div>
      </div>
    </>
  );
} 