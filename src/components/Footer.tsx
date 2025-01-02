import { InstagramLogoIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import {  Github, Twitter, Linkedin } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Footer() {
  return (
    <footer className="relative bg-black/80 border-t border-purple-500/20 overflow-hidden bg-slate-900 ">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full filter blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-full mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 translate-x-[10rem]">
          {/* Brand Section */}
          <motion.div variants={item} className="space-y-4 w-full max-w-2xl">
  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
    Aetheria.
  </h3>
  <p className="text-gray-400 text-lg leading-relaxed">
    Our VR technology with AI transforms your perception,
    making the impossible possible. Discover worlds beyond imagination and redefine your reality.
  </p>
</motion.div>

    
          {/* Quick Links */}
          <motion.div variants={item} className="space-y-4 ml-[40rem] ">
            <h4 className="text-xl font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-lg">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-lg">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item} className="space-y-4 ml-96 w-full">
            <h4 className="text-xl font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-lg ">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-lg">Partner</a></li>
            </ul>
          </motion.div>

          <motion.div variants={item} className="space-y-4 ml-32">
            <h4 className="text-xl font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-lg ">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-lg">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-lg">Partners</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="space-y-4">
           
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <InstagramLogoIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div 
          variants={item}
          className="mt-12 pt-8 border-t border-purple-500/20 text-center text-gray-400"
        >
          <div>&copy; {new Date().getFullYear()} Reality. All rights reserved.</div>
        </motion.div>
      </motion.div>
    </footer>
  );
}