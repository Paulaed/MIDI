import React from "react";

import midi1 from "../assets/riz.jpg";
import midi2 from "../assets/poulet.jpeg";
import midi3 from "../assets/pilé.jpeg";
import midi4 from "../assets/atcheke.jpeg";
import midi5 from "../assets/telibo1.jpeg";
import midi6 from "../assets/ba.jpeg";

const images = [midi1, midi2, midi3, midi4, midi5, midi6];

const CarouselSection = () => {
  return (
    <div className="w-full overflow-hidden py-10 bg-[#001202]">
      <h1 className="text-3xl font-bold text-center text-white mb-10">
        NOS PLATS
      </h1>

      {/* Carousel défilant */}
      <div className="relative w-full overflow-x-hidden">
        <div className="flex gap-5 animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-amber-200 shadow-lg flex-shrink-0 transition-transform hover:scale-105 "
            >
              <img
                src={image}
                alt={`plat-${index}`}
                className="w-full h-full object-cover "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bouton centré */}
      <div className="flex justify-center mt-10">
        <a
          href="/commander "
          className="bg-orange-500 font-bold rounded-xl px-10 py-3 hover:bg-[#B91C1C] transition-colors "
        >
          Commander
        </a>
      </div>
    </div>
  );
};

export default CarouselSection;
