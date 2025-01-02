import React from 'react';

const Footer: React.FC = () => {
  const brands = ['Niscala.io', 'SAMTIV', 'IEA.', 'UNICA', 'BOKING'];

  return (
    <footer className="bg-teal-950 py-14">
      <div className="flex justify-center space-x-48 text-white font-semibold text-xl ">
        {brands.map((brand, index) => (
          <div key={index} className="hover:text-gray-400 transition duration-200">
            {brand}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
