import React from 'react';
import { Zap, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src="/logo-ac.png" alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-bold">Anderson Castro</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              Engenheiro Eletricista
            </p>
            <p className="text-sm text-gray-500 flex items-center justify-center md:justify-end space-x-1">
              <span>
                Portifólio desenvolvido por{' '}
                <a
                  href="https://www.linkedin.com/in/stefani-freire/"
                  target="_blank"
                  className="text-white font-semibold underline hover:opacity-80 transition"
                >
                  Stéfani Freire
                </a>
              </span>
            </p>

          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Anderson de Oliveira Castro Correia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;