import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaDownload } from "react-icons/fa";

export default function About() {
  const personalInfo = {
    name: "Raynier Mora",
    title: "Full Stack Developer",
    phone: "+57 311 428 5185",
    email: "rayniermora@gmail.com",
    location: "Colombia",
    birthday: "Marzo 05, 1987",
    profileImage: "/images/profile/raynier-mora.jpg"
  };

  const socialLinks = [
    { icon: FaLinkedin, url: "www.linkedin.com/in/raynier-mora-gazabon", color: "text-blue-600 hover:text-blue-700" },
    { icon: FaGithub, url: "https://github.com/ramg18", color: "text-gray-700 hover:text-gray-900" },
    { icon: FaInstagram, url: "https://www.instagram.com/raymor18/", color: "text-pink-500 hover:text-pink-600" }
  ];

  const documents = [
    { url: "/documents/cv.pdf", tipo: "hoja de vida" },
    
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
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personalInfo.name)}&size=128&background=3B82F6&color=FFFFFF&bold=true`;
                    }}
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

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FaCalendarAlt className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Nacimiento</p>
                    <p className="text-sm font-medium text-gray-700">{personalInfo.birthday}</p>
                  </div>
                </div>
              </div>

              {/* Download CV Button */}
              <a href={documents.url} target="_blank" className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <FaDownload className="w-4 h-4" />
                <span>Descargar CV</span>
              </a>
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
                <h2 className="text-4xl font-bold text-gray-800">About</h2>
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
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: "Angular", level: 95, color: "from-red-500 to-red-600" },
                  { name: "Laravel", level: 90, color: "from-red-600 to-orange-600" },
                  { name: "Ionic", level: 85, color: "from-blue-500 to-blue-600" },
                  { name: "MySQL", level: 88, color: "from-blue-600 to-indigo-600" },
                  { name: "JavaScript", level: 92, color: "from-yellow-500 to-yellow-600" },
                  { name: "PHP", level: 90, color: "from-purple-500 to-purple-600" }
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
