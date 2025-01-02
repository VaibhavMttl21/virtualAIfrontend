import React from "react";

interface ImageProps {
  imageUrls?: string[];
  size?: "sm" | "md" | "lg";
}

const CircularImageGroup: React.FC<ImageProps> = ({
  imageUrls = [],
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  // If no images provided, show three empty circles
  const displayUrls = imageUrls.length > 0 ? imageUrls : Array(3).fill("");

  return (
    <div className="flex items-center">
      {displayUrls.map((url, index) => (
        <div
          key={index}
          className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border-2 border-white -ml-3 first:ml-0 transform transition-transform duration-300 hover:scale-110`}
          style={{ zIndex: displayUrls.length - index }} // Higher z-index for earlier elements
        >
          {url ? (
            <img
              src={url}
              alt={`Circle ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-400" />
          )}
        </div>
      ))}
    </div>
  );
};

export default CircularImageGroup;
