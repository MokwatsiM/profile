import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-[90vh] flex items-center pt-16" id="home">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Hi, I'm Motebang
            <span className="block text-blue-600 mt-2">
              Full Stack Engineer
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Building scalable web and mobile applications with modern
            technologies. Specialized in React, React Native, and Node.js
            development.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-full bg-blue-100 absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%]" />
          <img
            src="https://media.licdn.com/dms/image/v2/C4D03AQHCCdnHJ5n1Xg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1625818843745?e=1735171200&v=beta&t=ae8ZXt9UbjQF68F9UEv1EMR_Uq52O8bH4ChLjkViUq0"
            alt="Motebang Mokwatsi"
            className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
