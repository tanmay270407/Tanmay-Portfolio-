import React from 'react';
import realisticLaptopImg from '../assets/images/realistic_laptop.png';

export const LaptopVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[480px] xl:max-w-[530px] 2xl:max-w-[580px] flex flex-col items-center justify-center select-none group overflow-visible">
      {/* Subtle Atmospheric Blue Glow behind the laptop */}
      <div
        className="absolute -inset-3 sm:-inset-6 bg-radial from-[#348AF0]/25 via-[#348AF0]/8 to-transparent blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Realistic Soft Desk & Ambient Floor Shadows Underneath */}
      <div
        className="absolute -bottom-5 sm:-bottom-7 inset-x-2 sm:inset-x-6 h-8 sm:h-12 bg-black/90 blur-xl rounded-[100%] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-2 sm:-bottom-3 inset-x-8 sm:inset-x-12 h-5 bg-[#348AF0]/25 blur-lg rounded-[100%] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Realistic Laptop Image Asset */}
      <div className="relative w-full flex items-center justify-center overflow-visible">
        <img
          id="hero-laptop-image"
          src={realisticLaptopImg}
          alt="Realistic MacBook Pro displaying Portfolio: Ideas, Code, Impact"
          className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] select-none pointer-events-none"
          referrerPolicy="no-referrer"
          loading="eager"
        />
      </div>
    </div>
  );
};

