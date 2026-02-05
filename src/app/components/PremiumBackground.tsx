export function PremiumBackground() {
  return (
    <>
      {/* Base Gradient: bgDeep (#070C14) → bgBase (#05070B) → Pure Black */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #070C14 0%, #05070B 50%, #000000 100%)'
        }}
      />
      
      {/* Warm Spotlight (Amber #FFB86B) - Bottom Left */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255, 184, 107, 0.4) 0%, rgba(255, 184, 107, 0.2) 40%, transparent 70%)',
            transform: 'translate(-40%, 40%)'
          }}
        />
      </div>
      
      {/* Cool Spotlight (Cyan #2EF2D8) - Top Right */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full blur-[140px] opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(46, 242, 216, 0.4) 0%, rgba(47, 137, 255, 0.2) 40%, transparent 70%)',
            transform: 'translate(40%, -40%)'
          }}
        />
      </div>
      
      {/* Grain Overlay (4% opacity) */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />
    </>
  );
}