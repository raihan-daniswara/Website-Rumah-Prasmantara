export const WaveTop = () => (
  <div className="wave-container absolute bottom-0 left-0 w-full overflow-visible pointer-events-none">
    <svg
      className="relative block w-full h-[180px] z-10 filter drop-shadow-[0_-35px_20px_rgba(0,0,0,0.2)]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#3C261A"
        d="M0,200 
          C240,320 480,80 720,200 
          C960,320 1200,80 1440,200 
          L1440,320 L0,320 Z"
      />
    </svg>
  </div>
);
