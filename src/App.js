import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const InteractiveCV = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [expandedProject, setExpandedProject] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const sections = [
    { id: 'about', name: 'Sobre Mí'},
    { id: 'experience', name: 'Experiencia'},
    { id: 'education', name: 'Educación'},
    { id: 'skills', name: 'Habilidades' },
    { id: 'projects', name: 'Proyectos' },
    { id: 'contact', name: 'Contacto' }
  ];

  const skills = [
    
    { name: 'HTML/CSS', level: 50, color: 'bg-orange-500' },
    { name: 'Python', level: 50, color: 'bg-blue-600' },
    { name: 'SQL / PLSQL', level: 30, color: 'bg-purple-500' },
    { name: 'C' , level: 65, color: 'bg-green-500' },
    { name: 'Networking / Redes', level: 70, color: 'bg-red-500' },
    { name: 'Electrónica', level: 99, color: 'bg-pink-500' },
    
  
    { name: 'Java', level: 50, color: 'bg-gray-500' }

  ];
  const skills2 = [
    { name: 'Inglés', level: 90, color: 'bg-purple-500' },
    { name: 'Ofimática', level: 80, color: 'bg-green-500' },
    { name: 'Linux', level: 20, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 30, color: 'bg-yellow-500' },
    { name: 'Ciberseguridad', level: 20, color: 'bg-indigo-500' },
    { name: 'Implementaciones IoT', level: 60, color: 'bg-teal-500' },
  ];
    

  const projects = [
    {
      id: 1,
      title: 'Comedero para gatos IoT con bot de Telegram',
      description: 'Hicimos un comedero para gatos que se puede controlar desde un bot de telegram, con notificaciones en 1 dia',
      tech: ['ESP-32', 'C++', 'Electrónica'],
      details: 'Me encargué de la programación del ESP-32 y la integración con el bot de Telegram, permitiendo controlar el comedero desde cualquier lugar.'
    },
    {
      id:2,
      title: 'y...',
      description: ' ',
      tech: [],
      details: 'Hasta ahí lo que es relevante ☉ ‿ ⚆'

    }

  ];

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const themeClasses = darkMode 
    ? 'bg-gray-800 text-white' 
    : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800';

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/20 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1
              className={`text-2xl font-bold bg-clip-text text-transparent ${
                darkMode
                  ? 'bg-gradient-to-r from-blue-100 to-blue-500'
                  : 'bg-gradient-to-r from-blue-500 to-blue-300'
              }`}
            >
              Álvaro Fariña
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <nav className="hidden md:flex gap-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'hover:bg-white/20'
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    {section.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden sticky top-20 z-40 bg-white/20 backdrop-blur-md border-b border-white/20">
        <div className="flex overflow-x-auto px-4 py-2 gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-3 py-2 rounded-full whitespace-nowrap transition-all ${
                activeSection === section.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/20'
              }`}
            >
              <span className="mr-1">{section.icon}</span>
              {section.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        {activeSection === 'about' && (
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <img src ="https://avatars.githubusercontent.com/u/91646975?v=4" alt="Álvaro Fariña" className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Estudiante de Ingeniería Electrónica</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
              Estudiante de Ingeniería Electrónica con énfasis en Teleprocesamiento de la información.
            </p>
            <div className="flex justify-center gap-4">

              <button 
                onClick={() => setActiveSection('contact')}
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full transition-colors"
              >
                Contactar
              </button>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">Experiencia Profesional</h2>
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Soporte técnico</h3>
                    <p className="text-blue-500 font-semibold">Farmacenter</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Diciembre 2019 - Enero 2020</span>
                </div>
                <p className="mb-4">Me encargué de proveer solución a diferentes inconvenientes que se presentaban en las distintas sucursales de Farmacenter por el departamento central.</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Mantenimiento de equipos informáticos</li>
                  <li>Instalación de software y actualizaciones</li>
                </ul>
              </div>
              
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Soporte técnico - Atención al cliente</h3>
                    <p className="text-blue-500 font-semibold">Foxy Store PY</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Diciembre 2023 - Febrero 2024</span>
                </div>
                <p className="mb-4">Me encargué de brindar atención personalizada a los clientes.</p>
              </div>
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">Educación</h2>
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-2">Ingeniería en Electrónica</h3>
                <p className="text-blue-500 font-semibold mb-2">Universidad Nacional de Asunción</p>
                <p className="`ml-2 ${darkMode ? 'text-white-400' : 'text-gray-600'">2021 - Presente | 8vo semestre</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-2">Bachiller Técnico en Informática</h3>
                <p className="text-blue-500 font-semibold mb-2">Colegio San Francisco de Asís</p>
                <p className="`ml-2 ${darkMode ? 'text-white-400' : 'text-gray-500'">2018 - 2020</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-2">Certificaciones</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>CCNA ITN v7 (FIUNA) (2024)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>CCNA SRWE (Digital Engineering) (2025)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>CCNA NETWORK SECURITY (SYSNET) (2025)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>INTRODUCCIÓN A LA CIBERSEGURIDAD (NETACAD - SELFPACED) (2025)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>ETHICAL HACKING (NETACAD - SELFPACED) (En curso...)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">Habilidades Técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-sm font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-3xl font-bold mb-8 text-center">Otros conocimientos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills2.map((skill2) => (
                <div key={skill2.name} className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold">{skill2.name}</span>
                    <span className="text-sm font-bold">{skill2.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full ${skill2.color} transition-all duration-1000 ease-out rounded-full`}
                      style={{ width: `${skill2.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">Proyectos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-800 transition-colors"
                  >
                    Ver detalles
                    {expandedProject === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {expandedProject === project.id && (
                    <div className="mt-4 p-4 bg-white/30 rounded-lg animate-fade-in">
                      <p className="text-sm">{project.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">¡Conectemos!</h3>
                  <p className="text-lg">Estoy disponible para realizar pasantía en cualquier rubro relacionado con electrónica e informática, tengo ganas de aprender.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a href="mailto:robocopdenewells@gmail.com" className="flex items-center gap-4 p-4 bg-white/30 rounded-xl hover:bg-white/40 transition-colors">
                    <Mail className="text-blue-500" size={24} />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm">alvaro.aguinagalde13@gmail.com</div>
                    </div>
                  </a>
                  
                  <a href="tel:+595982572528" className="flex items-center gap-4 p-4 bg-white/30 rounded-xl hover:bg-white/40 transition-colors">
                    <Phone className="text-green-500" size={24} />
                    <div>
                      <div className="font-semibold">Teléfono</div>
                      <div className="text-sm">+595 982 572 528</div>
                    </div>
                  </a>
                  
                  <a href="https://www.github.com/alvarofarina" className="flex items-center gap-4 p-4 bg-white/30 rounded-xl hover:bg-white/40 transition-colors">
                    <Github className="text-gray-800" size={24} />
                    <div>
                      <div className="font-semibold">GitHub</div>
                      <div className="text-sm">github.com/alvarofarina</div>
                    </div>
                  </a>
                  
                  <a href="https://linkedin.com/in/alvarofarina" className="flex items-center gap-4 p-4 bg-white/30 rounded-xl hover:bg-white/40 transition-colors">
                    <Linkedin className="text-blue-700" size={24} />
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div className="linkedin-text">linkedin.com/in/alvarofarina</div>
                    </div>
                  </a>
                </div>
                
                <div className="flex items-center justify-center gap-2 mt-6 text-sm">
                  <MapPin size={16} className="text-red-500" />
                  <span>Villa Elisa, Paraguay</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default InteractiveCV;