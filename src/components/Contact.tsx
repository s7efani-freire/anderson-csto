import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600">
            Interessado em oportunidades de colaboração ou contratação? Vamos conversar!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">andersoon089@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(77) 98817-8785</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Localização</h4>
                    <p className="text-gray-600">Vitória da Conquista, Bahia, Brasil</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">LinkedIn</h4>
                    <p className="text-gray-600">anderson-castro-correia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas of Interest */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Áreas de Interesse</h3>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-800 font-medium">Automação Industrial</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <span className="text-gray-800 font-medium">Energia Solar</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-800 font-medium">Sistemas Inteligentes</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-800 font-medium">Eficiência Energética</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Disponível para oportunidades profissionais
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="mailto:andersoon089@gmail.com"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar Email
                  </a>
                  <a 
                    href="tel:+5577988178785"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Ligar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;