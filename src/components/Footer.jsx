import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBrain,
} from "react-icons/fa";
import { footerContent } from "../data/content";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const socialIcons = {
    facebook: FaFacebook,
    twitter: FaTwitter,
    instagram: FaInstagram,
    linkedin: FaLinkedin,
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <FaBrain className="text-3xl text-primary" />
              <h3 className="text-2xl font-bold">
                {footerContent.about.title}
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              {footerContent.about.description}
            </p>
            <div className="flex space-x-4">
              {footerContent.about.socialLinks.map((link, index) => {
                const Icon = socialIcons[link.platform];
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              {footerContent.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Sumber Daya</h4>
            <ul className="space-y-2">
              {footerContent.resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary" />
                <span className="text-gray-400">
                  {footerContent.contact.email}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary" />
                <span className="text-gray-400">
                  {footerContent.contact.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-gray-400">
                  {footerContent.contact.address}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-800 rounded-2xl p-8 mb-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">
              {footerContent.newsletter.title}
            </h3>
            <p className="text-gray-400">
              {footerContent.newsletter.description}
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footerContent.newsletter.placeholder}
                className="flex-1 px-4 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-full font-semibold"
              >
                {subscribed
                  ? "Terima Kasih!"
                  : footerContent.newsletter.buttonText}
              </motion.button>
            </div>
          </form>
        </motion.div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>© 2025 Mindly . All rights reserved.</p>
            <p className="mt-2">Made with ❤️ by Musthafa</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
