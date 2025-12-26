export default function FloatingTriangles() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Fixed Triangles - Red Border, Empty Inside - ESPRIT Signature */}
      {/* Top Left Area */}
      <div className="absolute top-20 left-16 w-10 h-10 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#DC2626"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* Top Center-Left */}
      <div className="absolute top-32 left-1/4 w-12 h-12 opacity-28">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#DC2626"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* Top Right Area */}
      <div className="absolute top-24 right-20 w-11 h-11 opacity-32">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#DC2626"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* Middle Left */}
      <div className="absolute top-1/2 left-12 w-9 h-9 opacity-29">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#DC2626"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* Middle Center */}
      <div className="absolute top-2/5 left-1/2 w-10 h-10 opacity-27">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#DC2626"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* Middle Right */}
      <div className="absolute top-1/2 right-16 w-12 h-12 opacity-31">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#DC2626"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* Bottom Left */}
      <div className="absolute bottom-32 left-20 w-11 h-11 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#DC2626"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* Bottom Center-Left */}
      <div className="absolute bottom-24 left-1/3 w-9 h-9 opacity-28">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#DC2626"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* Bottom Center-Right */}
      <div className="absolute bottom-28 right-1/3 w-10 h-10 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#DC2626"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* Bottom Right */}
      <div className="absolute bottom-20 right-12 w-11 h-11 opacity-32">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#DC2626"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

