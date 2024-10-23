import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-600">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" size={24} />
              <a href="mailto:mokwatsimotebang@gmail.com" className="text-gray-600 hover:text-blue-600">
                mokwatsimotebang@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600" size={24} />
              <span className="text-gray-600">Maseru, Lesotho</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" size={24} />
              <span className="text-gray-600">(+27) 791757007</span>
            </div>
          </div>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}