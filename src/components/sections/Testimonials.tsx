import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const testimonials = [
  {
    name: 'Mario M.',
    rating: 4.9,
    text: 'Incredible immersion! The AI-driven environments and personalized storylines make every game a unique adventure. It\'s like stepping into another dimension.'
  },
  {
    name: 'Emily R.',
    rating: 4.9,
    text: 'This VR stands out with its hyper-realistic graphics and advanced motion tracking. The voice and gesture controls are intuitive and seamless.'
  },
  {
    name: 'Emily R.',
    rating: 4.9,
    text: 'This VR stands out with its hyper-realistic graphics and advanced motion tracking. The voice and gesture controls are intuitive and seamless.'
  },
  {
    name: 'Emily R.',
    rating: 4.9,
    text: 'This VR stands out with its hyper-realistic graphics and advanced motion tracking. The voice and gesture controls are intuitive and seamless.'
  }
];

export function Testimonials() {
  return (
    <section className="relative py-20 overflow-hidden bg-slate-900 ">
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div variants={item} className="space-y-4">
            <h2 className="text-6xl font-light">
              What Our <span className="font-bold">Customers</span>
            </h2>
            <h2 className="text-6xl font-light">
              Are <span className="italic">Saying</span>
            </h2>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="p-8 rounded-2xl bg-gray-900/50 border border-purple-500/20 backdrop-blur-sm space-y-4 
                hover:border-purple-500 hover:shadow-[0_0_15px_rgba(128,90,213,0.5)] transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full" />
                  <div>
                    <h4 className="font-semibold text-2xl">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-purple-500 fill-current" />
                      <span className="text-sm text-gray-400">{testimonial.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed text-xl">{testimonial.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
