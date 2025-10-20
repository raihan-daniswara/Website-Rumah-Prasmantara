// Wave Component
export const WaveBottom = () => (
  <div className="wave-container absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
    <svg
      className="wave-svg relative block w-full h-[150px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        className="wave-path"
        fill="#2C231E"
        fillOpacity="1"
        d="M0,192L48,208C96,224,192,256,288,256C384,256,480,224,576,208C672,192,768,192,864,208C960,224,1056,256,1152,256C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);
