import { motion } from "framer-motion";

const projects = [
  {
    title: "Compramos tu usado",
    description: "Plataforma web que permite vender vehículos usados con valoración basada en precios de mercado mediante scraping y verificación por peritos.",
    tech: ["Laravel", "MySQL", "Angular", "Ionic"],
    role: "Full Stack Developer",
    status: "Producción",
    image: "/images/projects/usados.jpg",
    imageAlt: "Captura de pantalla de la plataforma Compramos tu usado mostrando la interfaz de valoración de vehículos"
  },
  {
    title: "Autogestor siniestralidad Crawford colombia",
    description: "Plataforma web que permite gestionar la siniestralidad de diferentes clientes como falabella o zurich haciendo uso de las garantias adquiridas en los diferentes estableciemientos que venden sus productos",
    tech: ["Laravel", "MySQL", "vue2"],
    role: "Full Stack Developer",
    status: "Producción",
    image: "/images/projects/aa.jpg",
    imageAlt: "Captura de pantalla de la plataforma Compramos tu usado mostrando la interfaz de valoración de vehículos"
  },
  {
    title: "Lulosaurio",
    description: "App móvil de audiolibros para niños con sistema de suscripción a través de Apple App Store y Google Play.",
    tech: ["Laravel", "MySQL", "Ionic", "Angular"],
    role: "Full Stack Developer",
    status: "Publicada",
    image: "/images/projects/lulosaurio.jpg",
    imageAlt: "Interfaz de la aplicación móvil Lulosaurio con audiolibros para niños y sistema de suscripción"
  },
  {
    title: "XGoal",
    description: "Aplicación móvil que conecta jóvenes promesas del fútbol con visores y clubes, fomentando la visibilidad de nuevos talentos.",
    tech: ["Laravel", "MySQL", "Angular", "Ionic"],
    role: "Full Stack Developer",
    status: "Desarrollo",
    image: "/images/projects/xgoal.jpg",
    imageAlt: "Aplicación móvil XGoal mostrando perfiles de jóvenes futbolistas y conexión con clubes"
  },
  {
    title: "LatamSec",
    description: "Plataforma web para administrar el sistema de turnos y puestos de trabajo de una empresa de seguridad privada.",
    tech: ["Laravel", "MySQL", "Angular"],
    role: "Full Stack Developer",
    status: "Producción",
    image: "/images/projects/aa.jpg",
    imageAlt: "Dashboard de LatamSec con gestión de turnos y administración de personal de seguridad"
  },
  {
    title: "Control de Tributos",
    description: "Plataforma web para monitorear la creación y presentación de impuestos exigidos por la DIAN, evitando sanciones y manteniendo control documental.",
    tech: ["Laravel", "MySQL", "Angular"],
    role: "Full Stack Developer",
    status: "Producción",
    image: "/images/projects/aa.jpg",
    imageAlt: "Sistema de Control de Tributos con seguimiento de impuestos DIAN y gestión documental"
  },
];

export default function Projects() {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Producción': return 'bg-green-100 text-green-800 border border-green-200';
      case 'Publicada': return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'Desarrollo': return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Mis Proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Una selección de proyectos que demuestran mi experiencia en desarrollo full stack, 
            desde aplicaciones web hasta soluciones móviles
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:brightness-110"
                  onError={(e) => {
                    // Fallback si la imagen no carga
                    e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge de estado */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${getStatusColor(project.status)} shadow-sm`}>
                    {project.status}
                  </span>
                </div>

                {/* Indicador de hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Role */}
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-sm text-blue-600 font-medium">
                    {project.role}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Tecnologías:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100 hover:bg-blue-100 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                {/* <div className="pt-4 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Ver detalles
                  </button>
                </div> */}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿Te interesa conocer más sobre algún proyecto específico?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            <span>Hablemos</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
