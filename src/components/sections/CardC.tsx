import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Card {
  title: string;
  description: string;
  colors: string[];
}

const CardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const cards: Card[] = [
    {
      title: "Color",
      description: "Voice and Gesture Control",
      colors: ["#FFFFFF", "#000033", "#9933FF", "#FF00FF"],
    },
    {
      title: "Explore",
      description: "Interactive Learning",
      colors: ["#FFA500", "#008000", "#00FFFF", "#FFD700"],
    },
    {
      title: "Customize",
      description: "Make it Your Own",
      colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"],
    },
  ];

  const handleDotClick = (index: number): void => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [cards.length]);

  const cardVariants = {
    enter: {
      opacity: 0,
      y: 100,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
    exit: {
      opacity: 0,
      y: -100, 
      transition: { duration: 0.8 },
    },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative", width: "300px", height: "200px", overflow: "hidden" }}>
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              padding: "20px",
              background: "linear-gradient(135deg, #330066, #000033)",
              color: "#FFFFFF",
            }}
          >
            <h2 style={{ margin: 0 }}>{cards[currentIndex].title}</h2>
            <p style={{ margin: "10px 0" }}>{cards[currentIndex].description}</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              {cards[currentIndex].colors.map((color, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: color,
                  }}
                ></motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div style={{ display: "flex", marginTop: "10px", gap: "5px" }}>
        {cards.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            animate={{
              backgroundColor: currentIndex === index ? "#FF00FF" : "#666666",
            }}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
