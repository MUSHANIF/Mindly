import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';
import { bullyingContent } from '../data/content';

const Pengaruh = () => {
  return (
    <section id="pengaruh" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {bullyingContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {bullyingContent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {bullyingContent.types.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${type.gradient} p-6 text-white`}>
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{type.icon}</span>
                  <h3 className="text-2xl font-bold">{type.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Efek yang Ditimbulkan:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.effects.map((effect, idx) => (
                      <span
                        key={idx}
                        className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm"
                      >
                        {effect}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8"
        >
          <div className="flex items-center justify-center mb-6">
            <FaExclamationTriangle className="text-4xl text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Statistik Bullying di Indonesia
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bullyingContent.statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {stat.percentage}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Stop Bullying, Mulai Peduli
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Setiap tindakan kecil untuk menghentikan bullying dapat menyelamatkan 
            kesehatan mental seseorang. Mari bersama-sama menciptakan lingkungan yang aman dan suportif.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            Laporkan Bullying
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pengaruh;