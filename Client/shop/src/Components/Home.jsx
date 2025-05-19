import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const BMWHomePage = () => {
  const images = [
    "https://www.bmwusa.com/content/dam/bmw/common/homepage/fmas/2025-05/desktop/BMW-2025-X3-30xDrive0-May-Cookied-HP-FMA-Desktop.jpg",
    "https://www.bmwusa.com/content/dam/bmw/common/homepage/fmas/2025-05/desktop/BMW-2025-i4-eDrive40-May-Cookied-HP-FMA-Desktop.jpg",
    "https://www.bmwusa.com/content/dam/bmw/common/homepage/fmas/2025-05/desktop/BMW-X7-Non-Cookied-Homepage-FMA-Desktop.jpg"
  ];

  const texts = [
    {
      title: "SPECIAL FINANCE OFFERS.",
      description: "Through June 2nd only, finance select BMW models starting at just 2.99% APR.",
    },
    {
      title: "LEASE THE 100% ELECTRIC 2025 BMW i4 eDRIVE40.",
      description: "$499 Per month for 36 months with $5,379 due at signing. Now through June 2nd.",
    },
    {
      title: "LEASE THE 2025 BMW X3 30 xDRIVE.",
      description: "$659 Per month for 39 months with $5,198 due at signing. Now through June 2nd.",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
  <>
      <div className="bg-top relative">
        <img
          src={images[currentIndex]}
          alt="BMW Hero"
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
        <div className="absolute top-1/3 left-10 text-white text-left max-w-lg">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">{texts[currentIndex].title}</h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">{texts[currentIndex].description}</p>
          <div className="flex gap-4">
            <button 
              className="bg-white text-black px-8 py-3 rounded-md font-semibold text-lg"
              onClick={() => navigate('/products')}
            >
              See All Offers
            </button>
          </div>
          <p className="text-sm mt-4">Made with CGI.</p>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white text-black">
        <img src="https://www.bmwusa.com/content/dam/bmw/common/homepage/fmas/2025-03/desktop/BMW-MY26-iX-Homepage-Secodary-FMA-Desktop.jpg" alt="BMW Electric SUV" className="w-full object-cover" />
        <img src="https://www.bmwusa.com/content/dam/bmw/common/homepage/fmas/2023-03/desktop/BMW-MY24-X5-HP-Secondary-FMA-Desktop.jpg" alt="BMW SUV Driving" className="w-full object-cover" />
      </section>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; Big Neji All rights reserved.</p>
          <p className="text-sm">Follow us on:
            <a href="https://www.instagram.com/_n.eb" target="_blank" rel="noopener noreferrer" className="ml-2 text-pink-400">Instagram</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default BMWHomePage;
