import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/raynier-mora-gazabon",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub", 
      icon: FaGithub,
      url: "https://github.com/ramg18",
      color: "hover:text-gray-800"
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:rayniermora@gmail.com",
      color: "hover:text-red-500"
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/+573114285185",
      color: "hover:text-green-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-600 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¡Trabajemos juntos!
        </motion.h2>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl mb-6 text-gray-700 leading-relaxed">
            ¿Te gustaría colaborar o conocer más sobre mis proyectos?
          </p>
          <p className="text-lg text-gray-600">
            Estoy abierto a nuevas oportunidades y desafíos. ¡Hablemos!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center p-6 bg-white rounded-xl shadow-lg ${link.color} transition-all duration-300 hover:shadow-xl hover:scale-105`}
                whileHover={{ y: -5 }}
              >
                <IconComponent className="text-3xl mb-3 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{link.name}</span>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Información de contacto</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">📧 Email</h4>
              <p className="text-gray-600">rayniermora@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">📱 WhatsApp</h4>
              <p className="text-gray-600">+57 311 428 5185</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">📍 Ubicación</h4>
              <p className="text-gray-600">Colombia</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">💼 Disponibilidad</h4>
              <p className="text-gray-600">Disponible para proyectos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
