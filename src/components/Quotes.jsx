import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { quotesContent } from '../data/content';

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotesContent.quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => 
      prev === 0 ? quotesContent.quotes.length - 1 : prev - 1
    );
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {quotesContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {quotesContent.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className={`h-full bg-gradient-to-br ${quotesContent.quotes[currentQuote].gradient}`} />
            </div>

            <div className="relative p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuote}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <FaQuoteLeft className={`text-5xl mb-6 mx-auto bg-gradient-to-r ${quotesContent.quotes[currentQuote].gradient} bg-clip-text text-transparent`} />
                  
                  <p className="text-2xl md:text-3xl text-gray-700 font-light italic mb-6 leading-relaxed">
                    "{quotesContent.quotes[currentQuote].text}"
                  </p>
                  
                  <p className="text-lg text-gray-500">
                    — {quotesContent.quotes[currentQuote].author}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between items-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevQuote}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <FaChevronLeft className="text-gray-600" />
                </motion.button>

                <div className="flex space-x-2">
                  {quotesContent.quotes.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setCurrentQuote(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentQuote 
                          ? 'w-8 bg-gradient-to-r from-primary to-secondary' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextQuote}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <FaChevronRight className="text-gray-600" />
                </motion.button>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Bagikan Inspirasi
            </h3>
            <p className="text-gray-600 mb-6">
              Sebarkan pesan positif tentang kesehatan mental kepada orang-orang terdekat Anda
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold"
              >
                Bagikan ke Facebook
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sky-400 text-white px-6 py-2 rounded-full font-semibold"
              >
                Bagikan ke Twitter
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;