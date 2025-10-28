import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Digit4l Agency S.A.S",
      location: "Bogotá, Colombia",
      period: "2018 - Presente",
      description: "Desarrollo de aplicaciones web y móviles usando Angular, Ionic y Laravel. Liderazgo de equipo de 4 desarrolladores y arquitectura de sistemas escalables. Colaboración estrecha con equipos de diseño UX/UI.",
      technologies: ["Angular", "Laravel", "Ionic", "MySQL"],
      type: "work"
    },
    {
      title: "Ingeniero I + D",
      company: "Infomedia Service",
      location: "Bogotá, Colombia",
      period: "2016 - 2018",
      description: "Desarrollo de plataformas integradas a productos CISCO y sistemas de gestión empresarial. Implementación de APIs RESTful.",
      technologies: ["Laravel", "Angular", "MySQL", "JavaScript", "PHP"],
      type: "work"
    },
    {
      title: "Backend Developer",
      company: "M&S Software",
      location: "Sincelejo, Colombia",
      period: "2013 - 2016",
      description: "Creación de módulos y clases orientadas a los diferentes proyectos en la empres, desarrollo de componentes reutilizables.",
      technologies: ["Angular", "Laravel", "CSS3", "HTML5"],
      type: "work"
    }
  ];

  const getIcon = (type) => {
    return type === 'education' ? '🎓' : '💼';
  };

  const getColors = (type) => {
    return type === 'education' 
      ? { bg: 'bg-green-100', border: 'border-green-500', dot: 'bg-green-500' }
      : { bg: 'bg-blue-100', border: 'border-blue-500', dot: 'bg-blue-500' };
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experiencia</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mi trayectoria profesional y académica en el desarrollo de software
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {experiences.map((exp, index) => {
            const colors = getColors(exp.type);
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Punto del timeline */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className={`w-4 h-4 ${colors.dot} rounded-full border-4 border-white shadow-lg`}></div>
                </div>

                {/* Contenido */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                  isEven ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className={`${colors.bg} ${colors.border} border-l-4 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
                    {/* Header de la tarjeta */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl mr-3">{getIcon(exp.type)}</span>
                          <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-1">{exp.company}</h4>
                      </div>
                    </div>

                    {/* Información adicional */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-gray-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-gray-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white text-gray-700 text-xs font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Espaciador para desktop */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿Quieres conocer más sobre mi experiencia profesional?
          </p>
          <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <FaBriefcase className="w-5 h-5" />
            <span>Descargar CV</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
