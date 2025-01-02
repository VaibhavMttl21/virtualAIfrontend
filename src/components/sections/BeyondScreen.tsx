import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

const features = [
  {
    icon: '/placeholder-icon.png',
    title: 'Innovate Your Imagination'
  },
  {
    icon: '/placeholder-icon.png',
    title: 'Personalized Virtual Realities Tailored by Advanced AI'
  }
];

export function BeyondScreen() {
  return (
    <section className="relative py-20 overflow-hidden bg-slate-900 ">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={item} className="space-y-8">
            <h2 className="text-[3.5rem] font-bold -translate-x-[1rem]">Beyond the Screen</h2>
            <p className="text-gray-400 text-lg leading-relaxed -translate-x-[1rem] text-xl">
              Break free from traditional screens and step into a world where sophisticated AI and VR combine to
              bring your most vivid fantasies to life with unparalleled realism.
            </p>

            <div className="space-y-6 -translate-x-[1rem]">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-center space-x-4 bg-gray-900/50 p-4 rounded-xl border border-transparent hover:border-purple-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Circle className="w-3 h-3 text-purple-500" />
                  </div>
                  <span className="text-gray-300 text-xl">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div variants={item} className="relative  rounded-xl transition-all duration-300">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-purple-500/20 translate-x-[2rem] bg-gray-200" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
