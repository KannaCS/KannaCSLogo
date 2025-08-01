export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="text-center">
        {/* KannaCS Logo - Compact Version */}
        <div className="relative mb-4">
          <svg
            width="350"
            height="80"
            viewBox="0 0 350 80"
            className="mx-auto drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background glow effect */}
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Logo Icon - Stylized K - Centered */}
            <g transform="translate(50, 15)">
              <path
                d="M8 8 L8 52 M8 30 L38 8 M8 30 L38 52"
                stroke="url(#logoGradient)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#glow)"
              />
              <circle
                cx="42"
                cy="30"
                r="6"
                fill="url(#logoGradient)"
                filter="url(#glow)"
              />
            </g>
            
            {/* KannaCS Text - As one word - Centered */}
            <text
              x="175"
              y="50"
              fontSize="32"
              fontFamily="system-ui, -apple-system, sans-serif"
              textAnchor="middle"
              filter="url(#glow)"
            >
              <tspan
                fontWeight="bold"
                fill="url(#textGradient)"
              >
                Kanna
              </tspan>
              <tspan
                fontWeight="300"
                fill="url(#logoGradient)"
              >
                CS
              </tspan>
            </text>
            
            {/* Subtitle - Centered */}
            <text
              x="175"
              y="66"
              fontSize="10"
              fontWeight="400"
              fontFamily="system-ui, -apple-system, sans-serif"
              fill="#94A3B8"
              letterSpacing="1.5px"
              textAnchor="middle"
            >
              Information Systems
            </text>
          </svg>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  );
}