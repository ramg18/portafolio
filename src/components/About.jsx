import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import { 
  SiJavascript,
  SiMysql,
  SiCss3,
  SiGit,
  SiHtml5,
  SiPhp,
  SiAngular,
  SiIonic,
  SiLaravel,
  SiNodedotjs
} from 'react-icons/si';

export default function About() {
  const personalInfo = {
    name: "Raynier Mora",
    title: "Full Stack Developer",
    phone: "+57 311 428 5185",
    email: "rayniermora@gmail.com",
    location: "Colombia",
    profileImage: "/portafolio/images/avatar.jpg"
  };

  const socialLinks = [
    { icon: FaLinkedin, url: "www.linkedin.com/in/raynier-mora-gazabon", color: "text-blue-600 hover:text-blue-700" },
    { icon: FaGithub, url: "https://github.com/ramg18", color: "text-gray-700 hover:text-gray-900" }
  ];

  const documents = [
    { url: "/portafolio/documents/raynier_mora_cv.pdf", tipo: "hoja de vida" },
    
  ];

  const services = [
    {
      icon: "🎨",
      title: "Frontend Development",
      description: "Desarrollo interfaces modernas y responsivas con Angular, creando experiencias de usuario excepcionales y código limpio.",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Construcción de aplicaciones móviles nativas e híbridas con Ionic, optimizadas para iOS y Android.",
      color: "bg-red-50 border-red-200"
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Desarrollo de APIs robustas y escalables con Laravel, implementando arquitecturas seguras y eficientes.",
      color: "bg-pink-50 border-pink-200"
    },
    {
      icon: "💻",
      title: "Full Stack Solutions",
      description: "Soluciones completas end-to-end, desde la conceptualización hasta la implementación y mantenimiento.",
      color: "bg-blue-50 border-blue-200"
    }
  ];

  const skills = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-50 hover:bg-yellow-100",
    borderColor: "border-yellow-200 hover:border-yellow-300"
  },
  {
    name: "MySQL",
    icon: SiMysql,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50 hover:bg-blue-100",
    borderColor: "border-blue-200 hover:border-blue-300"
  },
  {
    name: "CSS3",
    icon: SiCss3,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50 hover:bg-blue-100",
    borderColor: "border-blue-200 hover:border-blue-300"
  },
  {
    name: "Git",
    icon: SiGit,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50 hover:bg-orange-100",
    borderColor: "border-orange-200 hover:border-orange-300"
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50 hover:bg-orange-100",
    borderColor: "border-orange-200 hover:border-orange-300"
  },
  {
    name: "PHP",
    icon: SiPhp,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50 hover:bg-purple-100",
    borderColor: "border-purple-200 hover:border-purple-300"
  },
  {
    name: "Angular",
    icon: SiAngular,
    iconColor: "text-red-600",
    bgColor: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200 hover:border-red-300"
  },
  {
    name: "Ionic",
    icon: SiIonic,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50 hover:bg-blue-100",
    borderColor: "border-blue-200 hover:border-blue-300"
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    iconColor: "text-red-500",
    bgColor: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200 hover:border-red-300"
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    iconColor: "text-green-600",
    bgColor: "bg-green-50 hover:bg-green-100",
    borderColor: "border-green-200 hover:border-green-300"
  }
];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Card - Left Side */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-8">
              {/* Profile Image */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={personalInfo.profileImage}
                    alt={`Foto de perfil de ${personalInfo.name}`}
                    className="w-32 h-32 rounded-2xl object-cover mx-auto shadow-lg"
                    
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-gray-600 font-medium">
                  {personalInfo.title}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 mb-8">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <FaPhone className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Teléfono</p>
                    <p className="text-sm font-medium text-gray-700">{personalInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                    <p className="text-sm font-medium text-gray-700">{personalInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Ubicación</p>
                    <p className="text-sm font-medium text-gray-700">{personalInfo.location}</p>
                  </div>
                </div>

                
              </div>

              {/* Download CV Button */}
              {documents.map((doc, index) => {
                  const IconComponent = doc.icon;
                  return (
                    <a
                      key={index}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl`}
                    >
                      <FaDownload className="w-4 h-4" />
                      <span>Descargar CV</span>
                    </a>
                  );
                })}
              
            </div>
          </motion.div>

          {/* Main Content - Right Side */}
          <motion.div
            className="lg:col-span-2 space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* About Section */}
            <div>
              <div className="flex items-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800">Acerca de mí</h2>
                <div className="ml-6 flex-1 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  Soy desarrollador Full Stack con experiencia en la creación de aplicaciones modernas y funcionales utilizando{" "}
                  <span className="font-semibold text-blue-600">Angular, Ionic y Laravel</span>. 
                  Me apasiona transformar ideas en soluciones digitales eficientes, con interfaces atractivas y código limpio.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Mi objetivo es transmitir tu mensaje e identidad de la manera más creativa posible. 
                  He creado diseños web para muchas empresas reconocidas, combinando un frontend dinámico 
                  con un backend robusto para crear productos de alto impacto.
                </p>
              </div>
            </div>

            {/* What I Do Section */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">¿Qué hago?</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className={`${service.color} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl mb-4">{service.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-3">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Progress */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Tecnologías</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-1 sm:gap-2 lg:gap-3">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className={`
                        w-24 h-24 
                        rounded-lg 
                        ${skill.bgColor} 
                        border-2 ${skill.borderColor}
                        flex items-center justify-center
                        transition-all duration-300 
                        hover:scale-110 hover:shadow-lg
                        cursor-pointer
                      `}
                    >
                      <IconComponent 
                        className={`text-4xl ${skill.iconColor}`} 
                      />
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
