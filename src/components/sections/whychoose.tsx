import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="p-6 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-transparent transition-all duration-300 hover:border-fuchsia-500 hover:scale-105 w-[25rem] h[20rem]">
    <h3 className="text-2xl font-medium text-white mb-4 italic">{title}</h3>
    <p className="text-gray-400 text-xl leading-relaxed">{description}</p>
  </div>
);

const VRFeaturesSection: React.FC = () => {
  const features = [
    {
      title: "AI-Personalized Experiences",
      description: "Our VR system leverages advanced AI to create uniquely tailored experiences for each user."
    },
    {
      title: "Hyper-Realistic Visuals and Sound",
      description: "Combining 4K per eye resolution and cutting-edge audio technology, our VR headset delivers a level of realism that's unmatched."
    },
    {
      title: "Intuitive Interaction",
      description: "Our VR system features advanced voice and gesture control, allowing for natural and intuitive interactions."
    }
  ];

  return (
    <div className=" bg-gray-950 text-white bg-slate-900 ">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-fuchsia-500 text-lg mb-2 font-bold  translate-y-[2rem] -translate-x-[3rem]">Why Choose</h2>
          <div className="-space-y-4 text-[3.5rem] translate-x-[8rem]">
            <h1 className="font-bold text-white">What's that</h1>
            <h1 className="font-bold text-white">made us different</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18rem] -translate-x-[5rem] -translate-y-[2rem]">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VRFeaturesSection;
