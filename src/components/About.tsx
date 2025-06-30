import React from 'react';
import { Zap, Settings, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Engenheiro Eletricista formado pelo IFBA, com experiência sólida em energia solar 
            e paixão por automação industrial e sistemas inteligentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Atualmente atuo na área de energia solar, com experiência em projetos, 
              atendimento ao cliente e desenvolvimento de soluções tecnológicas para 
              otimização de processos. Tenho interesse em aprofundar meus conhecimentos 
              e avançar na carreira na área de engenharia elétrica, com foco especial 
              em automação industrial e sistemas inteligentes.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Busco oportunidades para aplicar minhas habilidades técnicas e ampliar 
              minha expertise em automação, contribuindo para a inovação e eficiência 
              energética em ambientes industriais e comerciais.
            </p>
            <div className="flex items-center space-x-2 text-green-600 font-semibold">
              <Award className="h-5 w-5" />
              <span>Recém-formado em Engenharia Elétrica pelo IFBA</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Energia Solar</h3>
              </div>
              <p className="text-gray-700">
                Especialista em dimensionamento, simulações de geração e análise 
                de viabilidade econômica de sistemas fotovoltaicos.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Settings className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Automação Industrial</h3>
              </div>
              <p className="text-gray-700">
                Interesse em sistemas inteligentes e automação para otimização 
                de processos industriais e comerciais.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Target className="h-6 w-6 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Desenvolvimento Web</h3>
              </div>
              <p className="text-gray-700">
                Experiência em desenvolvimento de sistemas web utilizando 
                PHP, HTML, CSS e JavaScript para gestão e organização.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;