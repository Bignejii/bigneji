import React, { useEffect, useState } from "react";

const BMWHomePage = () => {
  const images = [
    "https://www.bmwusa.com/content/dam/bmw/common/homepage/fmas/2025-05/desktop/BMW-2025-X3-30xDrive0-May-Cookied-HP-FMA-Desktop.jpg",
    "https://www.bmwusa.com/content/dam/bmw/common/homepage/fmas/2025-05/desktop/BMW-2025-i4-eDrive40-May-Cookied-HP-FMA-Desktop.jpg",
    "https://www.bmwusa.com/content/dam/bmw/common/homepage/fmas/2025-05/desktop/BMW-X7-Non-Cookied-Homepage-FMA-Desktop.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="bg-top
">
        <img
          src={images[currentIndex]}
          alt="BMW Hero"
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
        <span></span>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white text-black">
        <img src="https://www.bmwusa.com/content/dam/bmw/common/homepage/fmas/2025-03/desktop/BMW-MY26-iX-Homepage-Secodary-FMA-Desktop.jpg" alt="BMW Electric SUV" className="w-full object-cover" />
        <img src="https://www.bmwusa.com/content/dam/bmw/common/homepage/fmas/2023-03/desktop/BMW-MY24-X5-HP-Secondary-FMA-Desktop.jpg" alt="BMW SUV Driving" className="w-full object-cover" />
      </section>
    </>
  );
};

export default BMWHomePage;
