import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { alasanContent } from '../data/content';

const Alasan = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="alasan" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {alasanContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {alasanContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {alasanContent.reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover-lift"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${reason.color} flex items-center justify-center mb-6`}>
                <span className="text-4xl">{reason.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Investasi Terbaik adalah Kesehatan Mental Anda
            </h3>
            <p className="text-lg opacity-90">
              Mulai perjalanan menuju kesehatan mental yang lebih baik hari ini
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Alasan;