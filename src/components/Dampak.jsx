import { motion } from 'framer-motion';
import { dampakContent } from '../data/content';

const Dampak = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="dampak" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {dampakContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dampakContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {dampakContent.impacts.map((impact, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${
                index === 0 ? 'from-red-50 to-pink-50' :
                index === 1 ? 'from-blue-50 to-indigo-50' :
                index === 2 ? 'from-green-50 to-emerald-50' :
                'from-purple-50 to-violet-50'
              } rounded-2xl p-8 shadow-lg`}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                {impact.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {impact.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 bg-white/70 rounded-lg p-3"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">
                Jalan Menuju Pemulihan
              </h3>
              <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
                Pemulihan adalah perjalanan, bukan destinasi. Setiap langkah kecil yang Anda ambil 
                adalah kemajuan yang berarti. Ingatlah bahwa Anda tidak sendirian dalam perjalanan ini.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-3 rounded-full font-semibold shadow-lg"
                >
                  Mulai Konsultasi
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold"
                >
                  Pelajari Lebih Lanjut
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dampak;