import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <ContactForm />
        </div>
      </div>
    </>
  );
} 