import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const features = [
  {
    title: '4K',
    subtitle: 'Resolution',
    gradient: 'bg-slate-100',
  },
  {
    title: '120Hz',
    subtitle: 'Refresh Rate',
    gradient: 'bg-slate-100',
  },
  {
    title: 'AI',
    subtitle: 'Processor',
    gradient: 'bg-slate-100',
  },
];

export function ProductFeatures() {
  return (
    <section className="relative py-20 overflow-hidden bg-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-full mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Heading */}
          <motion.div variants={item} className="max-w-full">
            <div className="flex w-full">
              <div className="text-[6rem] font-bold mb-6 w-full translate-x-[10rem]">
                <div>Personalized Virtual</div>
                <div>Realities Tailored</div>
                <span className="text-gray-400">by Advanced AI</span>
              </div>
              <div className="space-y-4 -translate-x-[10rem] w-[30rem] justify-content justify-center translate-y-[13rem]">
                <div className="p-4 rounded-lg border border-transparent hover:border-purple-500 transition-all duration-300">
                  <div className=''>
                  <div className="text-2xl font-semibold mb-4 ">Reality Perfected</div>
                  <div className="text-gray-400 text-xl ">
                    Our VR technology, enhanced by <br /> intelligent AI adapts to your unique <br />
                    preferences, creating immersive <br /> experiences that reflect your <br />
                    individual desires and dreams.
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Player */}
          <motion.div
            variants={item}
            className="relative w-[95rem] h-[42rem] rounded-2xl overflow-hidden bg-gray-200 border border-purple-500/20 max-w-full ml-[10rem]"
          >
            <button className="absolute inset-0 flex items-center justify-center group">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all group-hover:scale-110 bg-gray-900">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </button>
          </motion.div>

          {/* Parent Container */}
          <motion.div
            variants={item}
            className="flex flex-wrap md:flex-nowrap items-start max-w-7xl"
          >
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem] w-full translate-x-[10rem]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gray-900/50 border border-purple-500/20 backdrop-blur-sm text-center w-[18rem] h-[15rem] hover:border hover:border-purple-500 transition-all duration-300"
                >
                  <h3
                    className={`text-4xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent translate-y-[3.5rem]`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mt-2 translate-y-[4rem]">{feature.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="flex flex-col space-y-8 translate-x-[18rem]">
              {/* First Info Box */}
              <div className="space-y-2 w-full p-4 rounded-lg border border-transparent hover:border-purple-500 transition-all duration-300">
                <div className="text-2xl font-semibold text-white">Smart Drones, Smarter Choices</div>
                <p className="text-gray-400 text-xl">
                  Elevate your aerial photography with cutting-edge AI technology.
                </p>
              </div>

              {/* Second Info Box */}
              <div className="space-y-2 w-full p-4 rounded-lg border border-transparent hover:border-purple-500 transition-all duration-300">
                <div className="text-2xl font-semibold text-white">AI-Powered Precision</div>
                <p className="text-gray-400 text-xl">
                  Achieve perfect shots every time with our AI-integrated drones.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
