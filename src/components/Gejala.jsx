import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { gejalaContent } from '../data/content';

const Gejala = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="gejala" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {gejalaContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {gejalaContent.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gejalaContent.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`${category.color} p-6 text-white cursor-pointer`}
                onClick={() => setActiveCategory(activeCategory === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{category.icon}</span>
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeCategory === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown />
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {activeCategory === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6"
                  >
                    <h4 className="font-semibold text-gray-700 mb-4">
                      Gejala-gejala Umum:
                    </h4>
                    <ul className="space-y-3">
                      {category.symptoms.map((symptom, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <span className="text-gray-400 mt-1">•</span>
                          <span className="text-gray-600">{symptom}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Kapan Harus Mencari Bantuan?
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Jika Anda mengalami beberapa gejala di atas selama lebih dari 2 minggu 
              dan mengganggu aktivitas sehari-hari, segera konsultasikan dengan profesional kesehatan mental.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold shadow-lg"
            >
              Cari Bantuan Sekarang
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gejala;