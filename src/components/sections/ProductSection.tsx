import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ProductSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl" />
      </div>
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={item} className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Product Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={item} className="space-y-4">
              <div className="h-64 bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 rounded-xl" />
              <h3 className="text-xl font-semibold text-white">Advanced AI Integration</h3>
              <p className="text-gray-400">Experience personalized virtual realities tailored by cutting-edge AI technology.</p>
            </motion.div>
            <motion.div variants={item} className="space-y-4">
              <div className="h-64 bg-gradient-to-br from-fuchsia-900/40 to-purple-900/40 rounded-xl" />
              <h3 className="text-xl font-semibold text-white">Immersive Experience</h3>
              <p className="text-gray-400">Dive into stunning virtual worlds with unparalleled visual fidelity.</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}