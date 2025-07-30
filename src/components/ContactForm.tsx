export default function ContactForm() {
  return (
    <form className="glass-card max-w-lg mx-auto flex flex-col gap-4">
      <input type="text" placeholder="Name" className="px-4 py-2 rounded border border-gray-200 bg-white bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-200" />
      <input type="email" placeholder="Email" className="px-4 py-2 rounded border border-gray-200 bg-white bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-200" />
      <textarea placeholder="Message" rows={4} className="px-4 py-2 rounded border border-gray-200 bg-white bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-200" />
      <button type="submit" className="bg-blue-600 text-white rounded px-6 py-2 font-semibold hover:bg-blue-700 transition">Send</button>
    </form>
  );
} 