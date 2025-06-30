import React from 'react';
import { Zap, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Zap className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">Anderson Castro</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              Engenheiro Eletricista • Especialista em Energia Solar
            </p>
            <p className="text-sm text-gray-500 flex items-center justify-center md:justify-end space-x-1">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>em Vitória da Conquista, BA</span>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Anderson de Oliveira Castro Correia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;