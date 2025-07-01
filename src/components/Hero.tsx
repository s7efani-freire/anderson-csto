import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Github, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
<div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
  <img
    src="/profile.png"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>


            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Anderson de Oliveira
              <span className="block text-blue-600">Castro Correia</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-2">
              Engenheiro Eletricista
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Energia Solar & Automação Industrial
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Vitória da Conquista, BA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>andersoon089@gmail.com</span>
            </div>
          </div>


          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/anderson-castro-correia/" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/anderson-csto" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;