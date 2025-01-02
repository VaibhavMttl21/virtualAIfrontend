// import React from 'react';

interface AdaptiveCardProps {
  title?: string;
  description?: string;
}

const AdaptiveCard = ({
  title = "Adaptive Environments",
  description = "Our VR system uses AI to create adaptive environments that respond to your actions and preferences."
}: AdaptiveCardProps) => {
  return (
    <div className="w-96 p-8 rounded-3xl bg-gradient-to-br from-purple-900 to-purple-800 border border-purple-700/30 backdrop-blur-sm">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          {title}
        </h2>
        <p className="text-purple-200/90 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AdaptiveCard;