import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Técnico de pós-venda',
      company: 'E.D.O Engenharia',
      period: 'Nov 2024 - Presente',
      duration: '8 meses',
      location: 'Vitória da Conquista, BA',
      type: 'Tempo integral',
      description: 'Responsável pelo atendimento ao cliente na etapa de pós-venda da empresa. As atividades incluem elaboração de projetos para instalações residenciais e comerciais, acompanhamento de obras em campo. Também desenvolveu sistema web interno, utilizando PHP, HTML, CSS e JavaScript, para organização e gestão das demandas dos clientes.',
      skills: ['Desenvolvimento de Aplicações', 'Suporte pós-venda', 'Projetos fotovotaicos', 'Visita de campo']
    },
    {
      title: 'Consultor de energia solar',
      company: 'Televit Tecnologia Distribuidora',
      period: 'Jun 2024 - Nov 2024',
      duration: '6 meses',
      location: 'Vitória da Conquista, BA',
      type: 'Estágio',
      description: 'Responsável por auxiliar no desenvolvimento de projetos de sistemas fotovoltaicos, atuando no dimensionamento técnico, simulações de geração, análise de viabilidade econômica e suporte na elaboração de layouts.',
      skills: ['Setor de energia solar', 'Painel solar fotovoltaico', 'Dimensionamento técnico']
    },
    {
      title: 'Técnico de planejamento',
      company: 'Sirtec Sistemas Elétricos',
      period: 'Ago 2022 - Ago 2023',
      duration: '1 ano 1 mês',
      location: 'Vitória da Conquista, BA',
      type: 'Estágio',
      description: 'Atuação no suporte às atividades de Planejamento e Controle da Produção (PCP), incluindo a análise da carteira de obras e de reservas, elaboração de solicitações de intervenção no sistema elétrico, emissão de relatórios de conclusão de obras e programação das atividades a serem executadas nas unidades da Sirtec. Responsável também por outras demandas correlatas à área, garantindo o acompanhamento e a organização das ações operacionais.',
      skills: ['Suporte técnico', 'PCP', 'Análise de obras']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-gray-600">
            Trajetória profissional na área de energia elétrica e sistemas fotovoltaicos
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      exp.type === 'Tempo integral' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Building className="h-4 w-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;