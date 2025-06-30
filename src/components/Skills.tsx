import React from 'react';
import { Zap, Code, Cog, BarChart3, Wrench, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Energia Solar',
      icon: <Zap className="h-6 w-6" />,
      color: 'from-yellow-400 to-orange-500',
      skills: [
        { name: 'Dimensionamento de Sistemas Fotovoltaicos', level: 90 },
        { name: 'Simulações de Geração', level: 85 },
        { name: 'Análise de Viabilidade Econômica', level: 88 },
        { name: 'Elaboração de Layouts', level: 82 }
      ]
    },
    {
      title: 'Desenvolvimento Web',
      icon: <Code className="h-6 w-6" />,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'PHP', level: 75 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Sistemas Web Internos', level: 78 }
      ]
    },
    {
      title: 'Engenharia Elétrica',
      icon: <Cog className="h-6 w-6" />,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'Automação Industrial', level: 70 },
        { name: 'Sistemas Elétricos', level: 85 },
        { name: 'Projetos Elétricos', level: 88 },
        { name: 'Sistemas Inteligentes', level: 65 }
      ]
    },
    {
      title: 'Gestão e Planejamento',
      icon: <BarChart3 className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'PCP - Planejamento e Controle da Produção', level: 80 },
        { name: 'Atendimento ao Cliente', level: 90 },
        { name: 'Gestão de Projetos', level: 75 },
        { name: 'Análise de Obras', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Competências Técnicas
          </h2>
          <p className="text-lg text-gray-600">
            Habilidades desenvolvidas ao longo da minha trajetória profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <p className="text-gray-600">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Projetos Realizados</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <p className="text-gray-600">Empresas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
              <p className="text-gray-600">Graduação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;