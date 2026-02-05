interface WaveDividerProps {
  position?: 'top' | 'bottom';
  variant?: 'wave1' | 'wave2' | 'wave3' | 'curve';
  color?: string;
  opacity?: number;
  flip?: boolean;
}

export function WaveDivider({ 
  position = 'bottom', 
  variant = 'wave1',
  color = 'rgba(255, 255, 255, 0.03)',
  opacity = 1,
  flip = false
}: WaveDividerProps) {
  
  const waves = {
    wave1: (
      <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
    ),
    wave2: (
      <path d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
    ),
    wave3: (
      <path d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,165.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
    ),
    curve: (
      <path d="M0,224L1440,96L1440,320L0,320Z" />
    )
  };

  const positionStyles = position === 'top' 
    ? { top: 0, transform: flip ? 'scaleY(-1) scaleX(-1)' : 'scaleY(-1)' }
    : { bottom: 0, transform: flip ? 'scaleX(-1)' : 'none' };

  return (
    <div 
      className="absolute left-0 right-0 w-full overflow-hidden pointer-events-none"
      style={{
        ...positionStyles,
        height: '120px',
        zIndex: 1
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ 
          display: 'block',
          opacity
        }}
      >
        <g fill={color}>
          {waves[variant]}
        </g>
      </svg>
    </div>
  );
}
