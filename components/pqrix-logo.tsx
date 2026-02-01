export default function PQRIXLogo() {
  return (
    <div className="min-h-screen bg-gray-950 p-8 flex flex-col items-center justify-center gap-12">
      <div className="text-white text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">PQRIX Logo Designs</h1>
        <p className="text-gray-400">Pick your favorite variation below</p>
      </div>

      {/* Logo Variations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        
        {/* Variation 1: Icon Only - Geometric P */}
        <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center gap-4">
          <h3 className="text-white text-sm font-semibold mb-2">Icon - Geometric P</h3>
          <svg width="80" height="80" viewBox="0 0 100 100" className="mb-4">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2b0071" stopOpacity={0.9} />
                <stop offset="50%" stopColor="#5E14E4" stopOpacity={0.85} />
                <stop offset="100%" stopColor="#2b0071" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <path d="M 20 10 L 20 90 L 35 90 L 35 55 L 60 55 C 77 55 85 47 85 35 C 85 23 77 10 60 10 Z M 35 25 L 58 25 C 65 25 70 28 70 35 C 70 42 65 45 58 45 L 35 45 Z" fill="url(#grad1)" />
          </svg>
          <div className="text-gray-400 text-xs text-center">Perfect for favicon & icon</div>
        </div>

        {/* Variation 2: Icon Only - Hexagonal P */}
        <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center gap-4">
          <h3 className="text-white text-sm font-semibold mb-2">Icon - Hexagonal P</h3>
          <svg width="80" height="80" viewBox="0 0 100 100" className="mb-4">
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2b0071" stopOpacity={0.9} />
                <stop offset="50%" stopColor="#5E14E4" stopOpacity={0.85} />
                <stop offset="100%" stopColor="#2b0071" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <path d="M 50 5 L 90 27.5 L 90 72.5 L 50 95 L 10 72.5 L 10 27.5 Z" fill="url(#grad2)" opacity="0.2" stroke="url(#grad2)" strokeWidth="2"/>
            <path d="M 35 30 L 35 70 L 45 70 L 45 55 L 60 55 C 70 55 75 50 75 42.5 C 75 35 70 30 60 30 Z M 45 38 L 58 38 C 63 38 65 40 65 42.5 C 65 45 63 47 58 47 L 45 47 Z" fill="url(#grad2)" />
          </svg>
          <div className="text-gray-400 text-xs text-center">Modern tech feel</div>
        </div>

        {/* Variation 3: Full Logo - Bold */}
        <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center gap-4">
          <h3 className="text-white text-sm font-semibold mb-2">Full Logo - Bold</h3>
          <svg width="200" height="60" viewBox="0 0 200 60" className="mb-4">
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2b0071" stopOpacity={0.9} />
                <stop offset="50%" stopColor="#5E14E4" stopOpacity={0.85} />
                <stop offset="100%" stopColor="#2b0071" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <text x="10" y="45" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="900" fill="url(#grad3)" letterSpacing="-2">PQRIX</text>
          </svg>
          <div className="text-gray-400 text-xs text-center">Clean & professional</div>
        </div>

        {/* Variation 4: Full Logo with Icon */}
        <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center gap-4">
          <h3 className="text-white text-sm font-semibold mb-2">Logo + Icon Combo</h3>
          <svg width="220" height="60" viewBox="0 0 220 60" className="mb-4">
            <defs>
              <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2b0071" stopOpacity={0.9} />
                <stop offset="50%" stopColor="#5E14E4" stopOpacity={0.85} />
                <stop offset="100%" stopColor="#2b0071" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <path d="M 5 15 L 5 45 L 12 45 L 12 32 L 22 32 C 29 32 33 28 33 23.5 C 33 19 29 15 22 15 Z M 12 20 L 21 20 C 25 20 27 21.5 27 23.5 C 27 25.5 25 27 21 27 L 12 27 Z" fill="url(#grad4)" />
            <text x="45" y="42" fontFamily="Arial, sans-serif" fontSize="38" fontWeight="800" fill="url(#grad4)" letterSpacing="-1.5">PQRIX</text>
          </svg>
          <div className="text-gray-400 text-xs text-center">Best for navbar</div>
        </div>

        {/* Variation 5: Minimal Text with Underline */}
        <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center gap-4">
          <h3 className="text-white text-sm font-semibold mb-2">Minimal + Accent</h3>
          <svg width="180" height="70" viewBox="0 0 180 70" className="mb-4">
            <defs>
              <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2b0071" stopOpacity={0.9} />
                <stop offset="50%" stopColor="#5E14E4" stopOpacity={0.85} />
                <stop offset="100%" stopColor="#2b0071" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <text x="5" y="42" fontFamily="Arial, sans-serif" fontSize="42" fontWeight="700" fill="#ffffff" letterSpacing="-1">PQRIX</text>
            <rect x="5" y="52" width="60" height="4" fill="url(#grad5)" rx="2"/>
          </svg>
          <div className="text-gray-400 text-xs text-center">Elegant & simple</div>
        </div>

        {/* Variation 6: Squared Icon */}
        <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center gap-4">
          <h3 className="text-white text-sm font-semibold mb-2">Icon - Squared Badge</h3>
          <svg width="80" height="80" viewBox="0 0 100 100" className="mb-4">
            <defs>
              <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2b0071" stopOpacity={0.9} />
                <stop offset="50%" stopColor="#5E14E4" stopOpacity={0.85} />
                <stop offset="100%" stopColor="#2b0071" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="80" height="80" rx="12" fill="url(#grad6)"/>
            <path d="M 30 30 L 30 70 L 40 70 L 40 55 L 57 55 C 65 55 70 50 70 42.5 C 70 35 65 30 57 30 Z M 40 38 L 55 38 C 60 38 62 40 62 42.5 C 62 45 60 47 55 47 L 40 47 Z" fill="white" />
          </svg>
          <div className="text-gray-400 text-xs text-center">App icon style</div>
        </div>

      </div>

      {/* Code Examples */}
      <div className="w-full max-w-5xl mt-8 bg-gray-900 rounded-xl p-8">
        <h2 className="text-white text-xl font-bold mb-6">Ready-to-Use Code Components</h2>
        
        <div className="space-y-6">
          {/* React Component Example */}
          <div>
            <h4 className="text-purple-400 font-mono text-sm mb-3">Logo Component (React/JSX):</h4>
            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-gray-300">{`// PQRIXLogo.jsx
export const PQRIXIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <defs>
      <linearGradient id="pqrix-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2b0071" stopOpacity={0.9} />
        <stop offset="50%" stopColor="#5E14E4" stopOpacity={0.85} />
        <stop offset="100%" stopColor="#2b0071" stopOpacity={0.9} />
      </linearGradient>
    </defs>
    <path d="M 20 10 L 20 90 L 35 90 L 35 55 L 60 55 C 77 55 85 47 85 35 C 85 23 77 10 60 10 Z M 35 25 L 58 25 C 65 25 70 28 70 35 C 70 42 65 45 58 45 L 35 45 Z" fill="url(#pqrix-grad)" />
  </svg>
);

export const PQRIXLogo = ({ size = "default" }) => {
  const heights = { small: 40, default: 60, large: 80 };
  const height = heights[size];
  
  return (
    <div className="flex items-center gap-2">
      <PQRIXIcon size={height * 0.6} />
      <span className="font-bold text-white bg-gradient-to-r from-[#2b0071]/90 via-[#5E14E4]/85 to-[#2b0071]/90 bg-clip-text text-transparent"
            style={{ fontSize: height * 0.6 }}>
        PQRIX
      </span>
    </div>
  );
};`}</code>
            </pre>
          </div>

          {/* CSS Version */}
          <div>
            <h4 className="text-purple-400 font-mono text-sm mb-3">Pure CSS Logo:</h4>
            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-gray-300">{`.pqrix-logo {
  font-family: Arial, sans-serif;
  font-weight: 900;
  font-size: 2rem;
  letter-spacing: -0.05em;
  background: linear-gradient(to right, 
    rgba(43, 0, 113, 0.9) 0%, 
    rgba(94, 20, 228, 0.85) 50%, 
    rgba(43, 0, 113, 0.9) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}